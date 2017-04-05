
/**
 * A source code repository within a BitBucket project.
 */
export class Repository {

    private _name: string;
    private _browseUrl: string;
    private _branchCount: number;
    private _openPullRequestCount: number;

    constructor(name: string, browseUrl: string) {
        this.setName(name);
        this.setBrowseUrl(browseUrl);
        this.setBranchCount(0);
        this.setOpenPullRequestCount(0);
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): void {
        this._name = name;
    }

    getBrowseUrl(): string {
        return this._browseUrl;
    }

    setBrowseUrl(browseUrl: string): void {
        this._browseUrl = browseUrl;
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