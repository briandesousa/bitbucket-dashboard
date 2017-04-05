
/**
 * A source code repository within a BitBucket project.
 */
export class Repository {

    private _name: string;
    private _url: string;
    private _branchCount: number;
    private _openPullRequestCount: number;

    constructor(name: string, url: string) {
        this.setName(name);
        this.setUrl(url);
        this.setBranchCount(0);
        this.setOpenPullRequestCount(0);
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): void {
        this._name = name;
    }

    getUrl(): string {
        return this._url;
    }

    setUrl(url: string): void {
        this._url = url;
    }

    getBranchCount(): number {
        return this._branchCount;
    }

    setBranchCount(branchCount: number): void {
        this._branchCount = branchCount;
    }

    getOpenPullRequestCount(): number {
        return this._openPullRequestCount;
    }

    setOpenPullRequestCount(openPullRequestCount: number): void {
        this._openPullRequestCount = openPullRequestCount;
    }

}