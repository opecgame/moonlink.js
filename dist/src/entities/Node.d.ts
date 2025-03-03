/// <reference types="node" />
/// <reference types="node" />
import WebSocket from "ws";
import { INodeStats, INode } from "../typings/Interfaces";
import { Manager, Rest } from "../../index";
export declare class Node {
    readonly manager: Manager;
    host: string;
    port: number;
    identifier: string;
    password: string;
    connected: boolean;
    destroyed: boolean;
    reconnectTimeout?: NodeJS.Timeout;
    reconnectAttempts: number;
    retryAmount: number;
    retryDelay: number;
    regions: String[];
    secure: boolean;
    sessionId: string;
    socket: WebSocket;
    stats?: INodeStats;
    info?: any;
    version?: string;
    url: string;
    rest: Rest;
    constructor(manager: Manager, config: INode);
    get address(): string;
    connect(): void;
    reconnect(): void;
    protected open(): void;
    protected close(code: number, reason: string): void;
    protected message(data: Buffer): Promise<void>;
    protected error(error: Error): void;
    destroy(): void;
}
