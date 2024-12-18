$SRWConfig.weaponEffects = function(){
	this.addDefinition(
		0, 
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
		1, 
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
		2, 
		"Ignore Armor", 
		"Ignores the target's Armor stat.", 
		false,
		false,
		function(actor, level){
			return [{type: "ignore_armor", modType: "addFlat", value: 9999}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		3, 
		"Recoil", 
		"Does 25% of the Damage back to the user.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "hp_drain", modType: "addFlat", value: -0.25}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		4, 
		"Accel Boost", 
		"+200 Attack Power while under the effects of Accel.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 200},
			{type: "weapon_melee", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			return $statCalc.getActiveSpirits(actor).accel;
		},
	);
	this.addDefinition(
		5, 
		"Snipe Boost", 
		"+200 Attack Power while under the effects of Snipe.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 200},
			{type: "weapon_melee", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			return $statCalc.isAce(actor) && $statCalc.getActiveSpirits(actor).snipe;
		},
	);
	this.addDefinition(
		6, 
		"Wall Boost", 
		"+300 Attack Power while under the effects of Wall.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 300},
			{type: "weapon_melee", modType: "addFlat", value: 300}
			];
		},
		function(actor, level){
			return $statCalc.getActiveSpirits(actor).wall;
		},
	);
	this.addDefinition(
		7, 
		"Anti-Drone", 
		"+400 Attack Power against AI drones.", 
		false,
		true,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 400},
			{type: "weapon_melee", modType: "addFlat", value: 400}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["drone"];
			} else {
				return false;
			}
		}
	);
	this.addDefinition(
		8, 
		"Anti-Kaiju", 
		"+300 Attack Power against mechabeast kaijus.", 
		false,
		true,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 300},
			{type: "weapon_melee", modType: "addFlat", value: 300}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["drone"];
			} else {
				return false;
			}
		}
	);
	this.addDefinition(
		9, 
		"Anti-Small", 
		"+200 Attack Power against enemies of size S or XS.", 
		false,
		true,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 200},
			{type: "weapon_melee", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["smol"];
			} else {
				return false;
			}
		}
	);
		this.addDefinition(
		10, 
		"Anti-Large", 
		"+200 Attack Power against enemies of size L or XL.", 
		false,
		true,
		function(actor, level){
			return [
			{type: "weapon_ranged", modType: "addFlat", value: 200},
			{type: "weapon_melee", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			var combatInfo = $statCalc.getActiveCombatInfo(actor);
			if(combatInfo){
				var tags = $statCalc.getMechTags(combatInfo.other);
				return !!tags["beeg"];
			} else {
				return false;
			}
		}
	);
	this.addDefinition(
		11, 
		"+DEF +EVA", 
		"Increases Pilot Def and Eva stats by 50% for the duration of combat.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "stat_defense_init", modType: "addFlat", value: 50},
				{type: "stat_evade_init", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		12, 
		"-DEF", 
		"Halves Pilot Def stat for the duration of combat.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "stat_defense_init", modType: "addFlat", value: -100},
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		13, 
		"-EVA", 
		"Halves Pilot Eva stat for the duration of combat.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "stat_evade_init", modType: "addFlat", value: -100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		14, 
		"Accuracy Down", 
		"Accuracy reduced by 50 for 1 turn.", 
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
		15, 
		"Mobility Down", 
		"Mobility reduced by 50 for 1 turn.", 
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
		16, 
		"Armor Down", 
		"Armor reduced by 500 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_armor_down", modType: "addFlat", value: 500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		17, 
		"Attack Power Down", 
		"Attack Power reduced by 500 for 1 turn.", 
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
		18, 
		"Movement Down", 
		"Movement reduced by 4 for 1 turn.", 
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
		19, 
		"Range Down", 
		"Attack Range reduced by 2 for 1 turn.", 
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
		20, 
		"Will Down", 
		"Will reduced by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_will_down", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		21, 
		"Disable", 
		"The target will be unable to act for a turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_disable", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		22, 
		"HP Leech", 
		"Heals 25% of the Damage dealt to the user.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "hp_drain", modType: "addFlat", value: 0.25}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		23, 
		"Accuracy Up", 
		"Accuracy increased by 50 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_accuracy_down", modType: "addFlat", value: -50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		24, 
		"Mobility Up", 
		"Mobility increased by 50 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_mobility_down", modType: "addFlat", value: -50}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		25, 
		"Armor Up", 
		"Armor increased by 500 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_armor_down", modType: "addFlat", value: -500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		26, 
		"Attack Power Up", 
		"Attack Power increased by 500 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_attack_down", modType: "addFlat", value: -500}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		27, 
		"Movement Up", 
		"Movement increased by 2 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_move_down", modType: "addFlat", value: -2}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		28, 
		"Range Up", 
		"Attack Range up by 1 for 1 turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_range_down", modType: "addFlat", value: -1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		29, 
		"SP Up", 
		"SP increased by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_SP_down", modType: "addFlat", value: -10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		30, 
		"Will Up", 
		"Will increased by 10.", 
		false,
		false,
		function(actor, level){
			return [{type: "inflict_will_down", modType: "addFlat", value: -10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		31, 
		"Self-Destruct", 
		"The unit will be destroyed after using this attack.", 
		false,
		false,
		function(actor, level){
			return [{type: "self_destruct", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		32, 
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
		33, 
		"Seal Spirits", 
		"The target will be unable to use spirit commands for a turn.", 
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
		34, 
		"Homing", 
		"Hit rate can exceed 100%. Excess hit rate increases damage. Ignore Support Defense.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "disable_support", modType: "addFlat", value: 1},
				{type: "hit_cap_break", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
	);
	this.addDefinition(
		35, 
		"Tension Loss", 
		"Lowers the user's Tension by 50.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "hit_will", modType: "addFlat", value: -50},
			{type: "miss_will", modType: "addFlat", value: -50}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		36, 
		"Vengeance", 
		"Increases Damage dealt by 10% of missing HP.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "vengeance", modType: "addFlat", value: 0.1}
			];
		},
		function(actor, level){
			return true;
		},
	);
}

