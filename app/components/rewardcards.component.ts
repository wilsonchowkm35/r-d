import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { ListComponent } from './list.component';

@Component({
	selector: 'rewardcards-list',
	template: `
 		<list [type]="type"></list>
	`
})

export class RewardCardsComponent implements OnInit {
	type = 'reward_cards'

    ngOnInit(): void {
    }
}
