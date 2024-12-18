$SRWConfig.customSpecialEvasionActivationCheckers = {
	"complex_shoot_down": function(level, attacker, defender){
		const activationChances = [
			0.10,
			0.20,
			0.30,
			0.40,
			0.50,
			0.60,
			0.70,
			0.80,
			0.90
		];
		
		let bounces = false;
		var aSkill = $statCalc.getPilotStat(attacker.actor, "skill");
		var dSkill = $statCalc.getPilotStat(defender.actor, "skill");	
		
		if(dSkill > aSkill){
			bounces = true;
		}		
		
		if(Math.random() > activationChances[level-1]){
			bounces = false;
		}
		
		return bounces;		
	}	
}


$SRWConfig.pilotAbilties = function(){
	this.addDefinition(
		0, 
		"Support Attack", 
		"Allows the unit to perform a support attack up to Level times per turn.", 
		true,
		false,
		function(actor, level){
			return [{type: "support_attack", modType: "addFlat", value: level}];
		},
		function(actor, level){
			return true;
		},
		[100,100,100,100],
		4
	);
	this.addDefinition(
		1, 
		"Support Defend", 
		"Allows the unit to provide defend support up to Level times per turn.", 
		true,
		false,
		function(actor, level){
			return [{type: "support_defend", modType: "addFlat", value: level}];
		},
		function(actor, level){
			return true;
		},
		[100,100,100,100],
		4
	);
	this.addDefinition(
		2, 
		"Prevail", 
		"Hit, Evade, Armor and Critical go up as HP decreases.", 
		true,
		false,
		function(actor, level){
			var mechStats = $statCalc.getCalculatedMechStats(actor);		
			var targetSlice = Math.floor(mechStats.currentHP / mechStats.maxHP * 10);
			var hitEvadeMod = (level - targetSlice) * 0.05;
			if(hitEvadeMod < 0){
				hitEvadeMod = 0;
			}
			var armorMod = (level - targetSlice) * 0.1;
			if(armorMod < 0){
				armorMod = 0;
			}
			var critMod = (level - targetSlice) * 0.08;
			if(critMod < 0){
				critMod = 0;
			}
			var ownId = $pilotAbilityManager.getIdPrefix()+"_"+4;
			var excludedSkills = {};
			excludedSkills[ownId] = true;
			var prevailBoost = 1 + ($statCalc.applyStatModsToValue(actor, 0, ["prevail_boost"], excludedSkills) / 100);
			
			return [
				{type: "hit", modType: "addFlat", value: hitEvadeMod * prevailBoost * 100},
				{type: "evade", modType: "addFlat", value: hitEvadeMod * prevailBoost * 100},
				{type: "armor", modType: "addPercent", value: armorMod * prevailBoost},
				{type: "crit", modType: "addFlat", value: critMod * prevailBoost * 100},
			];
		},
		function(actor, level){
			var mechStats = $statCalc.getCalculatedMechStats(actor);	
			var targetSlice = Math.floor(mechStats.currentHP / mechStats.maxHP * 10);
			return (targetSlice + 1) <= level;
		},
		[30,30,30,30,30,30,30,30,30,30],
		10,
		function(actor, level){
			var mechStats = $statCalc.getCalculatedMechStats(actor);	
			var targetSlice = Math.floor(mechStats.currentHP / mechStats.maxHP * 10);
			return (targetSlice + 1) <= level ? "on" : "off";
		},
	);
	this.addDefinition(
		3, 
		"AP Up", 
		"Increases max AP by 5 per Level.", 
		true,
		false,
		function(actor, level){
			return [{type: "sp", modType: "addFlat", value: level * 5}];
		},
		function(actor, level){
			return true;
		},
		[50,50,50,50,50,50,50,50,50,50],
		10
	);
	this.addDefinition(
		4, 
		"Flow State", 
		"Increases max Tension by 5 per Level.", 
		false,
		false,
		function(actor, level){
			return [{type: "max_will", modType: "addFlat", value: level * 5}];
		},
		function(actor, level){
			return true;
		},
		[50,50,50,50,50,50,50,50,50,50],
		10,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) > 150 ? "on" : "";
		}
	);	
	this.addDefinition(
		5, 
		"Driven", 
		"+2 Tension at the start of the map per Level.", 
		false,
		false,
		function(actor, level){
			return [{type: "start_will", modType: "addFlat", value: level * 2}];
		},
		function(actor, level){
			return true;
		},
		[30,30,30,30,30],
		5
	);
	this.addDefinition(
		6, 
		"Fighting Spirit", 
		"+1 Tension at the start of each turn per Level.", 
		false,
		false,
		function(actor, level){
			return [{type: "start_turn_will", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
		[50,50,50,50,50],
		5
	);
	this.addDefinition(
		7, 
		"Attacking Confidence", 
		"+1 Will after hitting an enemy.", 
		false,
		false,
		function(actor, level){
			return [{type: "hit_will", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
		[50],
		1
	);
	this.addDefinition(
		8, 
		"Evasion Confidence", 
		"+2 Tension after evading an enemy attack.", 
		false,
		false,
		function(actor, level){
			return [{type: "evade_will", modType: "addFlat", value: 2}];
		},
		function(actor, level){
			return true;
		},
		[50],
		1
	);
	this.addDefinition(
		9, 
		"Endurance Confidence", 
		"+3 Tension after taking damage.", 
		false,
		false,
		function(actor, level){
			return [{type: "damage_will", modType: "addFlat", value: 3}];
		},
		function(actor, level){
			return true;
		},
		[50],
		1
	);
	this.addDefinition(
		10, 
		"Energy Efficient", 
		"Reduces Weapon Energy Costs by 50%.", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_cost", modType: "mult", value: 0.5}];
		},
		function(actor, level){
			return true;
		},
		[300],
		1
	);
	this.addDefinition(
		11, 
		"Ammo Efficient", 
		"Doubles Ammo capacity.", 
		false,
		false,
		function(actor, level){
			return [{type: "ammo", modType: "mult_ceil", value: 2}];
		},
		function(actor, level){
			return true;
		},
		[300],
		1
	);
	this.addDefinition(
		12, 
		"Hit & Run", 
		"The unit can move after attacking if they did not move yet.", 
		false,
		false,
		function(actor, level){
			return [{type: "hit_and_away", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
		[200],
		1
	);	
	this.addDefinition(
		13, 
		"Instinct", 
		"+10% to Hit and Evasion at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "evade", modType: "addFlat", value: 10}, {type: "hit", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[200],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		14, 
		"Guard", 
		"Reduces damage taken by 20% at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_defend", modType: "mult", value: 0.8}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[150],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		15, 
		"Trickster", 
		"Recover 5 AP at the start of the turn.", 
		false,
		true,
		function(actor, level){
			return [{type: "SP_regen", modType: "addFlat", value: 5}];
		},
		function(actor, level){
			return true;
		},
		[500],
		1
	);
	this.addDefinition(
		16, 
		"Quick Counter", 
		"The unit may counterattack first during the enemy phase if Skill stat is higher than the attacker's.", 
		true,
		false,
		function(actor, level){
			return [{type: "counter_rate", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var ownPilotStats = $statCalc.getCalculatedPilotStats(combatInfo.self);
				var otherPilotStats = $statCalc.getCalculatedPilotStats(combatInfo.other);
				return ownPilotStats.skill > otherPilotStats.skill;
			} else {
				return false;
			}
		},
		[50],
		1
	);
	this.addDefinition(
		17, 
		"Parry", 
		"Allows the pilot to deflect melee attacks. Activation depends on Skill stat difference with the enemy.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "special_evade", subType: "melee", activation: "skill", name: "BLOCKED", dodgePattern: 2},
			];
		},
		function(actor, level){
			return true;
		},
		[250],
		1
	);
	this.addDefinition(
		18, 
		"Take Cover", 
		"Allows the pilot to block ranged attacks. Activation depends on Skill stat difference with the enemy.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "special_evade", subType: "ranged", activation: "skill", name: "BLOCKED", dodgePattern: 2},
			];
		},
		function(actor, level){
			return true;
		},
		[250],
		1
	);
	this.addDefinition(
		19, 
		"Double Strike", 
		"The pilot can support attack themself if their Skill stat is atleast 20 points higher than the target's.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "attack_again", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		[200],
		1
	);
	this.addDefinition(
		20, 
		"Tailwind", 
		"Automatically cast Accel, Snipe and Charge at the start of the first turn of combat.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 4},
				{type: "auto_spirit", modType: "addFlat", value: 17},
				{type: "auto_spirit", modType: "addFlat", value: 23}
			];
		},
		function(actor, level){
			return !$statCalc.getUsedCount(actor, "auto_spirit_pilot_20");
		},
		[500],
		1
	);
	this.addDefinition(
		21, 
		"Anti-Human", 
		"+10% Damage against humans.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getPilotTags(combatInfo.other);
				return !!tags["human"];
			} else {
				return false;
			}
		},
		[0],
		1
	);	
	this.addDefinition(
		22, 
		"Gardening", 
		"+10% Damage against mechabeasts.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["kaiju"];
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		23, 
		"Dismantle", 
		"+15% Damage against AI drones.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.15}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["drone"];
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		24, 
		"Victory Shout", 
		"+5 Tension after destroying an enemy.", 
		false,
		false,
		function(actor, level){
			return [{type: "destroy_will", modType: "addFlat", value: 5}];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		25, 
		"TLC", 
		"Repair command restores 75% HP. Resupply command no longer lowers Tension.", 
		false,
		true,
		function(actor, level){
			return [
			{type: "heal_boost", modType: "mult", value: 1.5},
			{type: "resupply_buff", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		26, 
		"Competitive", 
		"+15% Damage against pilots of the same gender.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.15}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["male"];
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		27, 
		"Competitive", 
		"+15% Damage against pilots of the same gender.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.15}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["female"];
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		28, 
		"Clarity", 
		"Doubles Prevail bonuses.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "prevail_boost", modType: "addFlat", value: 100},
			];
		},
		function(actor, level){
			return true;		
		},
		[0],
		1,
	);
	this.addDefinition(
		29, 
		"Challenger", 
		"+10% Damage against enemies at full HP.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.1}
			];
		},
			function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					var mechStats = $statCalc.getCalculatedMechStats(combatInfo.other);
					if(mechStats.currentHP == mechStats.maxHP){
					return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		30, 
		"Sharpshooter", 
		"Innate Weapons Range +1.", 
		false,
		true,
		function(actor, level){			
			return [
				{type: "range", modType: "addFlat", value: 1}
			];		
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
				if(combatInfo){
					if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
						if(combatInfo.self_action.attack.particleType == "innate"){
							return true;
					}
				} 
			}		
			return false;	
		},
		[0],
		1,
	);
	this.addDefinition(
		31, 
		"Familiar Friend", 
		"+10% damage dealt and -10% damage taken while adjacent to a familiar or mechabeast.", 
    false,
    true,
    function(actor, level) {
        return [
            { type: "final_damage", modType: "mult", value: 1.1 },
            { type: "final_defend", modType: "mult", value: 0.9 },
        ];
    },
    function(actor, level) {
        var refEvent = $statCalc.getReferenceEvent(actor);
        const candidates = $statCalc.getAdjacentActors(actor.isActor() ? "actor" : "enemy", { x: refEvent.posX(), y: refEvent.posY() });
        const targets = [];
        for (let candidate of candidates) {
            const tags = $statCalc.getPilotTags(candidate);
            if (tags["female"]) { 
                targets.push(candidate);
            }
        }
        return targets.length > 0 ? targets : null; 
    },
    [0],
    1
);
this.addDefinition(
    32,
    "Blooming Lily",
    "+10% damage dealt and -10% damage taken while adjacent to a female pilot.",
    false,
    true,
    function(actor, level) {
        return [
            { type: "final_damage", modType: "mult", value: 1.1 },
            { type: "final_defend", modType: "mult", value: 0.9 },
        ];
    },
    function(actor, level) {
        var refEvent = $statCalc.getReferenceEvent(actor);
        const candidates = $statCalc.getAdjacentActors(actor.isActor() ? "actor" : "enemy", { x: refEvent.posX(), y: refEvent.posY() });
        const targets = [];
        for (let candidate of candidates) {
            const tags = $statCalc.getPilotTags(candidate);
            if (tags["female"]) { 
                targets.push(candidate);
            }
        }
        return targets.length > 0 ? targets : null; 
    },
    [0],
    1
);
this.addDefinition(
		33, 
		"Continuous Action", 
		"If Tension is at 130 or higher the unit can move one additional time per turn after destroying a target, once per turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "continuous_action", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[0],
		1
	);
	this.addDefinition(
		34, 
		"S&M", 
		"Increases Damage dealt by 1/4 of missing HP.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "vengeance", modType: "addFlat", value: 0.25}
			];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		35, 
		"Supremacy", 
		"+5% Damage dealt and -5% Damage taken per Level to Enemies with SKL stat lower than yours. Range is Level * 2.", 
		true,
		true,
		function(actor, level){
			var effects = [
				[//level 1
					{type: "final_damage", modType: "mult", value: 0.95}, {type: "final_defend", modType: "mult", value: 1.05},						{type: "visible_range", modType: "addFlat", range: 1, color: "#00EE00"},
				],
				[//level 2
					{type: "final_damage", modType: "mult", value: 0.9}, {type: "final_defend", modType: "mult", value: 1.1},
					{type: "visible_range", modType: "addFlat", range: 1, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 2, color: "#00EE00"},
				],
				[//level 3
					{type: "final_damage", modType: "mult", value: 0.85}, {type: "final_defend", modType: "mult", value: 1.15},
					{type: "visible_range", modType: "addFlat", range: 1, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 2, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 3, color: "#00EE00"},
				],
				[//level 4
					{type: "final_damage", modType: "mult", value: 0.8}, {type: "final_defend", modType: "mult", value: 1.2},
					{type: "visible_range", modType: "addFlat", range: 1, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 2, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 3, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 4, color: "#00EE00"},
				],
				[//level 5
					{type: "final_damage", modType: "mult", value: 0.75}, {type: "final_defend", modType: "mult", value: 1.25},
					{type: "visible_range", modType: "addFlat", range: 1, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 2, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 3, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 4, color: "#00EE00"},
					{type: "visible_range", modType: "addFlat", range: 5, color: "#00EE00"},
				],
			];			
			return effects[level-1];		
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var ownPilotStats = $statCalc.getCalculatedPilotStats(combatInfo.self);
				var otherPilotStats = $statCalc.getCalculatedPilotStats(combatInfo.other);
				return ownPilotStats.skill > otherPilotStats.skill;
			} else {
				return false;
			}
		},
		[0,0,0,0,0],
		5,
		null,
		function(actor, level){			
			return {min: 1, max: (level*1 + 1) * 2, targets: "other"}
		}	
	);
	this.addDefinition(
		36, 
		"Commander", 
		"Grants a boost to evasion and accuracy to adjacent allies. Range and effectiveness depend on the skill level.", 
		true,
		true,
		function(actor, level){
			var effects = [
				[//level 1
					{type: "hit", modType: "addFlat", value: 10, range: 1},{type: "evade", modType: "addFlat", value: 10, range: 1},
					{type: "hit", modType: "addFlat", value: 8, range: 2},{type: "evade", modType: "addFlat", value: 8, range: 2},
				],
				[//level 2
					{type: "hit", modType: "addFlat", value: 15, range: 1},{type: "evade", modType: "addFlat", value: 15, range: 1},
					{type: "hit", modType: "addFlat", value: 12, range: 2},{type: "evade", modType: "addFlat", value: 12, range: 2},
					{type: "hit", modType: "addFlat", value: 8, range: 3},{type: "evade", modType: "addFlat", value: 8, range: 3},
				],
				[//level 3
					{type: "hit", modType: "addFlat", value: 20, range: 1},{type: "evade", modType: "addFlat", value: 20, range: 1},
					{type: "hit", modType: "addFlat", value: 16, range: 2},{type: "evade", modType: "addFlat", value: 16, range: 2},
					{type: "hit", modType: "addFlat", value: 12, range: 3},{type: "evade", modType: "addFlat", value: 12, range: 3},
					{type: "hit", modType: "addFlat", value: 8, range: 4},{type: "evade", modType: "addFlat", value: 8, range: 4},
				],
				[//level 4
					{type: "hit", modType: "addFlat", value: 25, range: 1},{type: "evade", modType: "addFlat", value: 25, range: 1},
					{type: "hit", modType: "addFlat", value: 20, range: 2},{type: "evade", modType: "addFlat", value: 20, range: 2},
					{type: "hit", modType: "addFlat", value: 15, range: 3},{type: "evade", modType: "addFlat", value: 15, range: 3},
					{type: "hit", modType: "addFlat", value: 10, range: 4},{type: "evade", modType: "addFlat", value: 10, range: 4},
					{type: "hit", modType: "addFlat", value: 5, range: 5},{type: "evade", modType: "addFlat", value: 5, range: 5},
				],
			];
			
			return effects[level-1];
		},
		function(actor, level){
			return true;
		},
		[0,0,0,0],//cost
		4,//max level
		null,//ability highlighting function, unused for this ability
		function(actor, level){//function that determines the range of the ability depending on level
			return {min: 1, max: 5, targets: "own", targetsBothTwins: true} 
		},
		true //do not allow stacking
	);
	this.addDefinition(
		37, 
		"Intense Ace", 
		"+10% Damage dealt at 130 Will or higher.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[0],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		38, 
		"Sharp Ace", 
		"+20% Attack Power with Sword Weapons.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.2}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Sword"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);	
	this.addDefinition(
		39, 
		"Dogfighter Ace", 
		"+20% Damage dealt with Missile Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.2}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Missile"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);	
	this.addDefinition(
		40, 
		"Artillery Ace", 
		"+15% Damage dealt with Twin Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.15}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Double"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		41, 
		"Tactician Ace", 
		"Reduce SP costs by 20%.", 
		false,
		false,
		function(actor, level){
			return [{type: "sp_cost", modType: "mult", value: 0.8}];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		42, 
		"Materiel Ace", 
		"+15% Damage dealt with Physical Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.15}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Mat"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		43, 
		"Companion Ace", 
		"25% less damage taken when support defending, 25% more damage dealt when support attacking.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "support_defend_armor", modType: "addFlat", value: 25},
				{type: "support_attack_buff", modType: "addFlat", value: 25},
			];
		},
		function(actor, level){
			return $statCalc.isAce(actor);
		},
		[0],
		1
	);
	this.addDefinition(
		44, 
		"CQB Ace", 
		"+10% Damage dealt with Melee Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.1}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Melee"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		45, 
		"Gunner Ace", 
		"+10% Damage dealt with Shooting Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.1}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Shoot"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		46, 
		"Analysis Ace", 
		"+20% Damage to enemies under the Analyze Trick.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.2},
			];
		},
		function(actor, level){
			var isValid = false;
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){				
				isValid = $statCalc.getActiveSpirits(combatInfo.other).analyse;
			} else {
				return false;
			}				
			return $statCalc.isAce(actor) && isValid;
		},
		[0],
		1
	);
	this.addDefinition(
		47, 
		"Newtonian Ace", 
		"+20% Damage dealt with Gravity Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.2}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Grav"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);	
	this.addDefinition(
		48, 
		"Burning Ace", 
		"+15% Damage dealt with Beam Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.15}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Beam"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);	
	this.addDefinition(
		49, 
		"Counterattack Ace", 
		"+15% Damage during enemy phase.", 
		false,
		false,
		function(actor, level){
			return [{type: "revenge", modType: "mult", value: 1.15}];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		50, 
		"Psycho Ace", 
		"+20% Damage dealt with Remote Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.2}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Funnel"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);	
	this.addDefinition(
		51, 
		"Mycotype",
		"Prevents stat reduction, Tension down, AP down, SP Down, Trick Seal and Disable.",
		false,
		false,
		function(actor, level){
			return [
				{type: "status_resistance", modType: "addFlat", value: 1}, 
			];
		},
		function(actor, level){
			return true;		
		},
		[0],
		1,
	);	
	this.addDefinition(
		52, 
		"Double Action", 
		"Allows the pilot an additional action each turn.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "extra_action", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		53, 
		"Triple Action", 
		"Allows the pilot two additional actions each turn.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "extra_action", modType: "addFlat", value: 2}
			];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		54, 
		"Shingan", 
		"Hit rate can exceed 100%. Excess hit rate increases damage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "hit_cap_break", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return $statCalc.isAce(actor);		
		},
		[0],
		1
	);
	this.addDefinition(
		55,
		"Glittering Glamour", 
		"All Weapons lower the target's Accuracy by 50.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_accuracy_down", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return $statCalc.isAce(actor);
		},
		[0],
		1
	);
	this.addDefinition(
		56, 
		"Attacker", 
		"Increases damage dealt by 10% at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[0],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		57, 
		"The Long Shot", 
		"+2 Range at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "range", modType: "addFlat", value: 2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		[0],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		58, 
		"Intense Drones", 
		"+2 Tension for adjacent drones at the start of each turn per Level.", 
		false,
		false,
		function(actor, level){
			return [{type: "start_turn_will", modType: "addFlat", value: 2, range:1}];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		59,
		"Tension Down", 
		"All Weapons lower the target's Tension by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_will_down", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return $statCalc.isAce(actor);
		},
		[0],
		1
	);
	this.addDefinition(
		60, 
		"Quiet Resolve", 
		"+10 Tension after an ally is defeated.", 
		false,
		false,
		function(actor, level){
			return [{type: "defeat_will", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return true;
		},
		[0],
		1
	);
	this.addDefinition(
		61, 
		"Drake Disable", 
		"The target will be unable to act for a turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_disable", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["drake"];
			} else {
				return false;
			}
		},		
		[0],
		1
	);
	this.addDefinition(
		62, 
		"Last Stand", 
		"Automatically cast Wall at the start of the turn at 140 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 22},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 140;
		},
		[0],
		1
	);
	this.addDefinition(
		63, 
		"Viral Load", 
		"+10% Damage against biological units.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["familiar"];
			} else {
				return false;
			}
		},		
		[0],
		1
	);
	this.addDefinition(
		64, 
		"Antimasc", 
		"+15% Damage against male pilots.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.15}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["male"];
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		65, 
		"Range Down", 
		"All Weapons Attack Range reduced by 2 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_range_down", modType: "addFlat", value: 2}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		66, 
		"Double Melee Strike", 
		"The pilot can support attack themself if their Skill stat is atleast 20 points higher than the target's. +10% Melee Damage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "attack_again", modType: "addFlat", value: 1},
				{type: "final_damage", modType: "mult", value: 1.1}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Melee"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1
	);
	this.addDefinition(
		67, 
		"Double Ranged Strike", 
		"The pilot can support attack themself if their Skill stat is atleast 20 points higher than the target's. +10% Ranged Damage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "attack_again", modType: "addFlat", value: 1},
				{type: "final_damage", modType: "mult", value: 1.1}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "Ranged"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1
	);
	this.addDefinition(
		68, 
		"Mobility Down", 
		"All Weapons Mobility reduced by 50 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_mobility_down", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		69, 
		"Dominance", 
		"Damage against enemies with less Will +10%.", 
		false,
		true,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.1}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				return $statCalc.getCurrentWill(combatInfo.self) > $statCalc.getCurrentWill(combatInfo.other);
			} else {
				return false;
			}
		},
		[0],
		1
	);
	this.addDefinition(
		70, 
		"Serene Mind", 
		"+1 to all Pilot Stats per 5 Tension above 100.", 
		false,
		true,
		function(actor, level){
			var increase = Math.floor(Math.max(0, ($statCalc.getCurrentWill(actor) - 100)) / 5);
			return [
				{type: "stat_melee", modType: "addFlat", value: increase},
				{type: "stat_ranged", modType: "addFlat", value: increase},
				{type: "stat_evade", modType: "addFlat", value: increase},
				{type: "stat_defense", modType: "addFlat", value: increase},
				{type: "stat_hit", modType: "addFlat", value: increase},
				{type: "stat_skill", modType: "addFlat", value: increase},
			];
		},
		function(actor, level){
			return true;
		},
		[0],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) > 104 ? "on" : "off";
		},//ability highlighting function, unused for this ability
	);
	this.addDefinition(
		71, 
		"MAPW Boost", 
		"+15% Damage dealt with multi Weapons.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "final_damage", modType: "mult", value: 1.15}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
					if(combatInfo.self_action.attack.particleType == "multi"){
						return true;
					}
				}
			} 
			return false;			
		},
		[0],
		1,
	);
	this.addDefinition(
		72, 
		"Armor Down", 
		"All Weapons Armor reduced by 500 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_armor_down", modType: "addFlat", value: 500}];
		},
		function(actor, level){
			return true;
		}
		[0],
		1,
	);
	this.addDefinition(
		73, 
		"Seal Spirits", 
		"All weapons disable spirit commands for a turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_spirit_seal", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		74, 
		"Snipe", 
		"Automatically cast Snipe at the start of the turn at 120 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 17},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 120;
		},
		[0],
		1
	);
	this.addDefinition(
		75, 
		"Ignore Size", 
		"Ignore negative effects of the target's size when attacking.", 
		false,
		false,
		function(actor, level){
			return [{type: "ignore_size", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
		[0],
		1
	);	
	this.addDefinition(
		76, 
		"Strike", 
		"Automatically cast Snipe at the start of the turn at 120 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 25},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 120;
		},
		[0],
		1
	);
	this.addDefinition(
		77, 
		"In-Fight", 
		"Melee Damage and Movement Range increase with Level.", 
		true,
		true,
		function(actor, level){
			var effectTable = [
				[{type: "weapon_melee", modType: "addFlat", value: 50}], //1
				[{type: "weapon_melee", modType: "addFlat", value: 100}], //2
				[{type: "weapon_melee", modType: "addFlat", value: 150}], //3
				[{type: "weapon_melee", modType: "addFlat", value: 150}, {type: "movement", modType: "addFlat", value: 1}], //4
				[{type: "weapon_melee", modType: "addFlat", value: 200}, {type: "movement", modType: "addFlat", value: 1}], //5
				[{type: "weapon_melee", modType: "addFlat", value: 250}, {type: "movement", modType: "addFlat", value: 1}], //6
				[{type: "weapon_melee", modType: "addFlat", value: 250}, {type: "movement", modType: "addFlat", value: 2}], //7
				[{type: "weapon_melee", modType: "addFlat", value: 300}, {type: "movement", modType: "addFlat", value: 2}], //8
				[{type: "weapon_melee", modType: "addFlat", value: 350}, {type: "movement", modType: "addFlat", value: 2}], //9				
			];
			if(effectTable[level-1]){
				return effectTable[level-1];
			} else {
				return [];
			}			
		},
		function(actor, level){
			return true;
		},
		[0],
		9
	);
	this.addDefinition(
		78, 
		"Gunfight", 
		"Ranged Damage and Range increase with Level.", 
		true,
		true,
		function(actor, level){
			var effectTable = [
				[{type: "weapon_ranged", modType: "addFlat", value: 50}], //1
				[{type: "weapon_ranged", modType: "addFlat", value: 100}], //2
				[{type: "weapon_ranged", modType: "addFlat", value: 150}], //3
				[{type: "weapon_ranged", modType: "addFlat", value: 150}, {type: "range", modType: "addFlat", value: 1}], //4
				[{type: "weapon_ranged", modType: "addFlat", value: 200}, {type: "range", modType: "addFlat", value: 1}], //5
				[{type: "weapon_ranged", modType: "addFlat", value: 250}, {type: "range", modType: "addFlat", value: 1}], //6
				[{type: "weapon_ranged", modType: "addFlat", value: 250}, {type: "range", modType: "addFlat", value: 2}], //7
				[{type: "weapon_ranged", modType: "addFlat", value: 300}, {type: "range", modType: "addFlat", value: 2}], //8
				[{type: "weapon_ranged", modType: "addFlat", value: 350}, {type: "range", modType: "addFlat", value: 2}], //9				
			];
			if(effectTable[level-1]){
				return effectTable[level-1];
			} else {
				return [];
			}			
		},
		function(actor, level){
			return true;
		},
		[0],
		9
	);
	this.addDefinition(
		79, 
		"Attacker X", 
		"Increases damage dealt by 20% at 150 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 150;
		},
		[0],
		1,
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 150 ? "on" : "off";
		},
	);
	this.addDefinition(
		80, 
		"Anti-Mecha", 
		"Increases damage dealt by 20% against non-biological mechs.", 
		false,
		false,
		function(actor, level){
			return [{type: "final_damage", modType: "mult", value: 1.2}];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["mech"];
			} else {
				return false;
			}
		},
		[0],
		1,
	);
}
