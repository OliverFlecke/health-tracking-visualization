export default class SleepData {
  public pkgName: string;

  public startTime: Date;
  public updateTime: Date;
  public createTime: Date;
  public timeOffset: string;

  public sleepStatus: string;
  public sleepUuid: string;

  public comment: string;
  public jsonVersion: string;
  public datauuid: string;
  public deviceuuid: string;

  constructor(data: any) {
    this.pkgName = data['pkg_name'];

    this.startTime = new Date(data['start_time']);
    this.updateTime = new Date(data['update_time']);
    this.createTime = new Date(data['create_time']);
    this.timeOffset = data['time_offset'];

    this.sleepStatus = data['sleep_status'];
    this.sleepUuid = data['sleep_uuid'];

    this.comment = data['comment'];
    this.jsonVersion = data['json_version'];
    this.datauuid = data['datauuid'];
    this.deviceuuid = data['deviceuuid'];
  }
}
