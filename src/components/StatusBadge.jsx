import React from 'react';
import { statusClass } from '../data/mockData.js';
export default function StatusBadge({ status }) { return <span className={`status-badge ${statusClass(status)}`}><i />{status}</span>; }
