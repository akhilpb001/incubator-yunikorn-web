import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QueueInfo, ToggleQueueChildrenEvent } from '@app/models/queue-info.model';

@Component({
  selector: 'app-queue-rack',
  templateUrl: './queue-rack.component.html',
  styleUrls: ['./queue-rack.component.scss']
})
export class QueueRackComponent implements OnInit {
  @Input() queueList: QueueInfo[] = [];
  @Input() nextLevel = '';

  @Output() toggleChildren = new EventEmitter<ToggleQueueChildrenEvent>();
  @Output() queueSelected = new EventEmitter<QueueInfo>();

  constructor() {}

  ngOnInit() {}

  toggleQueueChildren(event: Event, item: QueueInfo) {
    event.preventDefault();
    event.stopPropagation();
    this.collapseQueueList(item);
    item.isExpanded = !item.isExpanded;
    this.toggleChildren.emit({
      queueItem: item,
      nextLevel: this.nextLevel
    });
  }

  collapseQueueList(item: QueueInfo) {
    this.queueList.forEach(queue => {
      if (queue !== item) {
        queue.isExpanded = false;
      }
    });
  }

  onQueueSelected(queue: QueueInfo) {
    queue.isSelected = !queue.isSelected;
    this.queueSelected.emit(queue);
  }

  getQueueCapacityColor(queue: QueueInfo) {
    const capacity = +queue.absoluteUsedCapacity;
    if (capacity > 60 && capacity <= 80) {
      return '#60cea5';
    } else if (capacity > 80 && capacity < 95) {
      return '#ffbc0b';
    } else if (capacity >= 95) {
      return '#ef6162';
    }
    return '';
  }
}
