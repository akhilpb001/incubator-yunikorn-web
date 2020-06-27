/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class QueueInfo {
  queueName: string;
  state: 'RUNNING' | 'STOPPED';
  capacity: string;
  maxCapacity: string;
  usedCapacity: string;
  absoluteCapacity: string;
  absoluteMaxCapacity: string;
  absoluteUsedCapacity: string;
  queuePath: string;
  parentQueue: null | QueueInfo;
  children: null | QueueInfo[];
  isLeafQueue: boolean;
  isExpanded = false;
  isSelected = false;
  queueProperties: QueuePropertyItem[];
}

export interface QueuePropertyItem {
  name: string;
  value: string;
}

export interface SchedulerInfo {
  rootQueue: QueueInfo;
}

export interface ToggleQueueChildrenEvent {
  queueItem: QueueInfo;
  nextLevel: string;
}
