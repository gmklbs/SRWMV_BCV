$SRWConfig.mechAbilties = function(){
	this.addDefinition(
		0, 
		"GFUB HP", 
		"HP +2000", 
		false,
		false,
		function(actor, level){
			return [{type: "maxHP", modType: "addFlat", value: 2000}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		1, 
		"GFUB EN", 
		"EN +50", 
		false,
		false,
		function(actor, level){
			return [{type: "maxEN", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		2, 
		"GFUB Armor", 
		"Armor +500", 
		false,
		false,
		function(actor, level){
			return [{type: "base_arm", modType: "addFlat", value: 500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		3, 
		"GFUB Mobility", 
		"Mobility +50", 
		false,
		false,
		function(actor, level){
			return [{type: "base_mob", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
	);
		this.addDefinition(
		4, 
		"GFUB Targeting", 
		"Targeting +50", 
		false,
		false,
		function(actor, level){
			return [{type: "base_acc", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		5, 
		"GFUB Move", 
		"Move +2", 
		false,
		false,
		function(actor, level){
			return [{type: "base_move", modType: "addFlat", value: 2}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		6, 
		"GFUB Range", 
		"Range +1", 
		false,
		false,
		function(actor, level){
			return [{type: "range", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		7, 
		"GFUB Weight", 
		"Weight +100", 
		false,
		false,
		function(actor, level){
			return [{type: "carrying_capacity", modType: "addFlat", value: 100}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		8, 
		"GFUB Targeting", 
		"Rank A in all Terrains", 
		false,
		false,
		function(actor, level){
			return [{type: "land_terrain_rating", modType: "addFlat", value: 3},
				{type: "air_terrain_rating", modType: "addFlat", value: 3},
				{type: "water_terrain_rating", modType: "addFlat", value: 3},
				{type: "space_terrain_rating", modType: "addFlat", value: 3}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		9, 
		"GFUB Item Slots", 
		"+1 Equipment Slot", 
		false,
		false,
		function(actor, level){
			return [{type: "item_slot", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		10, 
		"FUB Human Mechabeast", 
		"+1 Equipment Slot", 
		false,
		false,
		function(actor, level){
			return [{type: "item_slot", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		}
	);	
	this.addDefinition(
		11, 
		"FUB Swordrake", 
		"Max HP +1000, Armor +250.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1000},
				{type: "base_arm", modType: "addFlat", value: 250}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
		this.addDefinition(
		12, 
		"FUB Gundrake", 
		"Mobility +25. Targeting +25.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "base_mob", modType: "addFlat", value: 25},
				{type: "base_acc", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		13, 
		"FUB Firedrake", 
		"Targeting +25. Critical +25", 
		false,
		false,
		function(actor, level){
			return [
				{type: "base_acc", modType: "addFlat", value: 25},
				{type: "base_crit", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		14, 
		"FUB Ringdrake", 
		"Evasion +25. Movement +1", 
		false,
		false,
		function(actor, level){
			return [
				{type: "base_mob", modType: "addFlat", value: 25},
				{type: "base_move", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		15, 
		"FUB Myrmitherion", 
		"Automatically cast Focus at the start of the player turn at 130 Will or higher.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 13},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 && $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		16, 
		"FUB Crustamens", 
		"+5% damage reduction to adjacent allies.", 
		true,
		true,
		function(actor, level){
			var effects = [
				[
					{type: "final_defend", modType: "addFlat", value: 1.05},{type: "final_defend", modType: "addFlat", value: 1.05, range: 1},
				],
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
		this.addDefinition(
		17, 
		"FUB Executioner", 
		"Movement +2", 
		false,
		false,
		function(actor, level){
			return [
				{type: "base_move", modType: "addFlat", value: 2}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
		this.addDefinition(
		18, 
		"FUB Expurgator", 
		"Range +1", 
		false,
		false,
		function(actor, level){
			return [
				{type: "range", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
		this.addDefinition(
		19,
		"FUB Polyspina", 
		"10% Damage to Innate Weapons.", 
		false,
		true,
		function(actor, level){			
			return [
				{type: "final_damage", modType: "mult", value: 1.1}
			];		
		},
		function(actor, level){
			if($statCalc.isFUB(actor)){
				var combatInfo = $statCalc.getActiveCombatInfo(actor);
				if(combatInfo){
					if(combatInfo.self_action.type == "attack" && combatInfo.self_action.attack){
						if(combatInfo.self_action.attack.particleType == "innate"){
							return true;
						}
					}
				} 
			}		
			return false;	
		}
	);
		this.addDefinition(
		20,
		"FUB Megacephalus", 
		"All Weapons lower the target's Tension by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_will_down", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);	
		this.addDefinition(
		21,
		"FUB Fafnir", 
		"+15 Tension at the start of the map.", 
		false,
		false,
		function(actor, level){
			return [{type: "start_will", modType: "addFlat", value: 15}];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
		this.addDefinition(
		22,
		"FUB Quetzacoatl", 
		"Survive a lethal hit up to once per stage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "one_time_miracle", modType: "addFlat", value: 1},
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor) && !$statCalc.getUsedCount(actor, "one_time_miracle");
		},
	);
		this.addDefinition(
		23,
		"FUB Tiamat", 
		"+5% Damage bonus to adjacent allies.", 
        true,
        true,
		function(actor, level){
			var effects = [
				[
					{type: "final_damage", modType: "addFlat", value: 0.95},{type: "final_defend", modType: "addFlat", value: 0.95, range: 1},
				],
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		24, 
		"Maintenance Drone", 
		"Repair & Resupply commands work from a distance.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "all_range_resupply", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return $statCalc.isAce(actor);
		},
	);
	this.addDefinition(
		25, 
		"Regenerative (S)", 
		"250 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "HP_regen_flat", modType: "addFlat", value: 250}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		26, 
		"Regenerative (M)", 
		"500 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "HP_regen", modType: "addFlat", value: 500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		27, 
		"Regenerative (L)", 
		"750 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "HP_regen_flat", modType: "addFlat", value: 750}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		28, 
		"Solar Panels (S)", 
		"15 Energy recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "EN_regen_flat", modType: "addFlat", value: 5}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		29, 
		"Solar Panels (M)", 
		"10 Energy recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_regen_flat", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		30, 
		"Solar Panels (L)", 
		"15 EN recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_regen_flat", modType: "addFlat", value: 15}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		31, 
		"Double Image (S)", 
		"10% chance to evade any attack at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "DOUBLE IMAGE", value: 0.1, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		32, 
		"Double Image (M)", 
		"20% chance to evade any attack at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "DOUBLE IMAGE", value: 0.2, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		33, 
		"Double Image (L)", 
		"30% chance to evade any attack at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "DOUBLE IMAGE", value: 0.3, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		34, 
		"Barrier Field (S)", 
		"Reduces all damage by 500. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "all", value: 500, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		35, 
		"Barrier Field (M)", 
		"Reduces all damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "all", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		36, 
		"Barrier Field (L)", 
		"Reduces all damage by 1500. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "all", value: 1500, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		37, 
		"Arm Shield", 
		"20% chance to block a melee weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "melee", activation: "random", name: "ARM SHIELD", value: 0.2, dodgePattern: 2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		38, 
		"Chaff Dispenser", 
		"20% chance to block a melee weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "ranged", activation: "random", name: "ARM SHIELD", value: 0.2, dodgePattern: 2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		39, 
		"Friction Field", 
		"Reduces all material weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "mat", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		40, 
		"Beam Coating", 
		"Reduces all beam weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "beam", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		41, 
		"Electronic Cloaking System", 
		"20% chance to evade a single target weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "single", activation: "random", name: "ECS", value: 0.2, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
	);
	this.addDefinition(
		42, 
		"Learning Computer", 
		"30% chance to evade any attack at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "ECS", value: 0.3, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		}
	);
	this.addDefinition(
		43, 
		"Bunker Field", 
		"Reduces all twin or mapw weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "multi", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		44, 
		"Absolute Territory", 
		"Cancels an attack if damage is below 1500. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "threshold_barrier", subType: "all", value: 1800, cost: 15}];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		45, 
		"Hyper Reloader", 
		"Restores Ammo to Max at the start of Player Phase.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "ammo_regen", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		46, 
		"Repair Device", 
		"The unit can heal an adjacent Unit.", 
		false,
		false,
		function(actor, level){
			return [{type: "heal", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		47, 
		"Resupply Device", 
		"The unit can recover all EN for an adjacent Unit. The target's Will is reduced by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "resupply", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);	
	this.addDefinition(
		48, 
		"Trajectory Predictor", 
		"Hit becomes 100% if Hit is above 75%, and enemy Hit becomes 0% if enemy Hit is below 25%.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "causality_manip", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		49, 
		"Evasion Assisting Code", 
		"The Unit suffers no Evasion decay.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "ignore_evasion_decay", modType: "addFlat", value: 1},
				];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		50, 
		"Flyer", 
		"Mech and Weapon Air terrain rankings become S. Enables Flight.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "air_terrain_rating", modType: "addFlat", value: 4},
				{type: "fly", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		51, 
		"Digger", 
		"Mech and Weapon Land terrain rankings become S. Enables underground movement.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 4},
				{type: "dig_enabled", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		52, 
		"Amphibious", 
		"Mech and Weapon Water terrain rankings become S. Improves water movement.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "water_terrain_rating", modType: "addFlat", value: 4},
				{type: "water_enabled", modType: "addFlat", value: 2}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		53, 
		"Mechabeast", 
		"Mech and Weapon Fungal terrain rankings become S. +5 Tension at the start of the mission in Fungal terrain.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "space_terrain_rating", modType: "addFlat", value: 4},
					{type: "start_will", modType: "addFlat", value: 5}
					];
		},
		function(actor, level){
			const refEvent = $statCalc.getReferenceEvent(actor);
				const currentTerrain = $gameMap.regionId(refEvent.posX(), refEvent.posY()) % 8;
			return currentTerrain === 5;
		},
	);	
		this.addDefinition(
		54, 
		"Fungal Symbiosis", 
		"250 HP and 5 EN recovered at the start of the turn while in fungal terrain.", 
		false,
		false,
		function(actor, level){
			return [
					{type: "HP_regen_flat", modType: "addFlat", value: 250},
					{type: "EN_regen_flat", modType: "addFlat", value: 5}
					];
		},
		function(actor, level){
			const refEvent = $statCalc.getReferenceEvent(actor);
				const currentTerrain = $gameMap.regionId(refEvent.posX(), refEvent.posY()) % 8;
			return currentTerrain === 5;
		},
	);	
	this.addDefinition(
		55, 
		"Sniper Scope", 
		"Range +1.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "range", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		56, 
		"Magnetic Coating", 
		"The unit counters first during the enemy phase.", 
		true,
		false,
		function(actor, level){
			return [{type: "counter_rate", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		57, 
		"Beast Mode", 
		"Increases Damage by 10% at 130 Tension or higher.", 
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
		58, 
		"Adrenalin Pump", 
		"Increases Damage dealt by 1/4 of missing HP.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "vengeance", modType: "addFlat", value: 0.25}
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		59, 
		"Hyper Reloader", 
		"Restores Ammo to Max at the start of Player Phase.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "ammo_regen", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		60, 
		"Art is an Explosion!", 
		"Critical +50 at 130 Tension or higher.", 
		false,
		true,
		function(actor, level){
			return [{type: "crit", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 && $statCalc.isFUB(actor);;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		},
	);
	this.addDefinition(
		61, 
		"Taskmaster", 
		"+10% Damage dealt for each adjacent Slave.", 
    false,
    true,
    function(actor, level) {
        return [
            { type: "final_damage", modType: "mult", value: 1.1 }
        ];
    },
    function(actor, level) {
        var refEvent = $statCalc.getReferenceEvent(actor);
        const candidates = $statCalc.getAdjacentActors(actor.isActor() ? "actor" : "enemy", { x: refEvent.posX(), y: refEvent.posY() });
        const targets = [];
        for (let candidate of candidates) {
            const tags = $statCalc.getMechTags(candidate);
            if (tags["slave"]) { 
                targets.push(candidate);
            }
        }
		const numMatches = targets.length;
		return numMatches;
    },
);
	this.addDefinition(
		62, 
		"Defensor System", 
		"-10% Damage taken for each adjacent Slave.", 
    false,
    true,
    function(actor, level) {
        return [
            { type: "final_defend", modType: "mult", value: 1.1 }
        ];
    },
    function(actor, level) {
        var refEvent = $statCalc.getReferenceEvent(actor);
        const candidates = $statCalc.getAdjacentActors(actor.isActor() ? "actor" : "enemy", { x: refEvent.posX(), y: refEvent.posY() });
        const targets = [];
        for (let candidate of candidates) {
            const tags = $statCalc.getMechTags(candidate);
            if (tags["slave"]) { 
                targets.push(candidate);
            }
        }
		const numMatches = targets.length;
		return numMatches;
    },
);
	this.addDefinition(
		63, 
		"Death Before Dishonor", 
		"All Weapons Attack Power +500, but they inflict 25% of the Damage back to the user.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "weapon_melee", modType: "addFlat", value: 500},
				{type: "weapon_ranged", modType: "addFlat", value: 500},
				{type: "hp_drain", modType: "addFlat", value: -0.25}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		64, 
		"Ninjutsu", 
		"Automatically cast Focus at the start of the player turn at 150 Will or higher. +10% Damage dealt when using Focus.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 3},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 10 && $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		65, 
		"All-Terrain", 
		"Negates terrain penalties, doubles terrain bonuses.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "terrain_adept", modType: "addFlat", value: 1},
				{type: "terrain_master", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;	
		}
	);
	this.addDefinition(
		66, 
		"Internal Fortification",
		"Prevents all status conditions.",
		false,
		false,
		function(actor, level){
			return [
				{type: "status_resistance", modType: "addFlat", value: 1}			
			];
		},
		function(actor, level){
			return true;		
		}
	);
	this.addDefinition(
		67, 
		"Omniframe", 
		"All Mech and Weapon terrain rankings become A.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 3},
				{type: "air_terrain_rating", modType: "addFlat", value: 3},
				{type: "water_terrain_rating", modType: "addFlat", value: 3},
				{type: "space_terrain_rating", modType: "addFlat", value: 3}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		68, 
		"Divide and Conquer", 
		"Ignores Support Defense.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "disable_support", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;		
		},
	);
	this.addDefinition(
		69, 
		"Defensive Teleport", 
		"40% chance to evade any attack at 120 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "DOUBLE IMAGE", value: 0.4, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 120;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 120 ? "on" : "off";
		}
	);
	this.addDefinition(
		70, 
		"Crystal Shell", 
		"Reduces all damage by 2000. 10 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "all", value: 2000, cost: 10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		71, 
		"Drone Endurance", 
		"+10% damage reduction to drones in range 5.", 
		true,
		true,
		function(actor, level){
			var effects = [
				[
					{type: "final_defend", modType: "addFlat", value: 1.05, range: 1},
				],
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		72, 
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
			return true;
		},
	);
	this.addDefinition(
		73, 
		"Valor", 
		"Casts Valor at 140 will.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 24},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 140 && $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		74, 
		"Soul", 
		"Casts Soul at 150 will.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 19},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 150 && $statCalc.isFUB(actor);
		},
	);
	this.addDefinition(
		75, 
		"Reaper of Souls", 
		"Attacks recover 25% of damage dealt as HP.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "hp_drain", modType: "addFlat", value: 0.25}
			];
		},
	);
	this.addDefinition(
		76, 
		"Assassin", 
		"Ignores the target's Armor stat.", 
		false,
		false,
		function(actor, level){
			return [{type: "ignore_armor", modType: "addFlat", value: 99999999}];
		},
	);
	this.addDefinition(
		77, 
		"Movement Down", 
		"All Weapons inflict Movement Down.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_move_down", modType: "addFlat", value: 4}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		78, 
		"Free Barrier", 
		"Barrier Cost reduced by 10.", 
		false,
		true,
		function(actor, level){			
			return [{
				type: "barrier_cost_reduction", modType: "addFlat", value: 10
			}];			
		},
		function(actor, level){
			return $statCalc.isFUB(actor);
		}
	);
	this.addDefinition(
		79, 
		"Attack Power Down", 
		"all weapons Attack Power reduced by 500 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_attack_down", modType: "addFlat", value: 500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		80, 
		"Regenerative XL", 
		"1000 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "HP_regen_flat", modType: "addFlat", value: 1000}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		81, 
		"Regenerative XXL", 
		"1250 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "HP_regen_flat", modType: "addFlat", value: 1250}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		82, 
		"Solar Panels XL", 
		"20 Energy recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "EN_regen_flat", modType: "addFlat", value: 20}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		83, 
		"Solar Panels XXL", 
		"25 Energy recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "EN_regen_flat", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		84, 
		"Barrier Piercing", 
		"Ignores barriers on the target.", 
		false,
		false,
		function(actor, level){
			return [{type: "pierce_barrier", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		85, 
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
	);	
	this.addDefinition(
		86, 
		"Accuracy Down", 
		"All Weapons Accuracy reduced by 50 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_accuracy_down", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		87,
		"Endure", 
		"Survive a lethal hit up to once per stage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "one_time_miracle", modType: "addFlat", value: 1},
			];
		},
		function(actor, level){
			return $statCalc.isFUB(actor) && !$statCalc.getUsedCount(actor, "one_time_miracle");
		},
	);
	this.addDefinition(
		88, 
		"SP Down", 
		"SP reduced by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_SP_down", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		89, 
		"Fury", 
		"Casts Fury at 130 will.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 36},
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 150 && $statCalc.isFUB(actor);
		},
	);
};