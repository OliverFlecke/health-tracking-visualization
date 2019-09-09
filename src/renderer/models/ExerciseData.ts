import ExerciseType, { toExerciseType } from './ExerciseType';

export default class ExerciseData {
  public additional: string;
  public altitudeGain: string;
  public altitudeLoss: string;
  public calorie: number;
  public comment: string;
  public countType: string;
  public count: string;
  public custom: string;
  public datauuid: string;
  public deviceuuid: string;

  public exerciseCustomType: string;
  public exerciseType: number;
  public type: ExerciseType;

  public declineDistance: number;
  public inclineDistance: number;
  public liveData: string;
  public locationData: string;

  public maxAltitude: number;
  public maxCadence: number;
  public maxCaloricburnRate: number;
  public maxHeartRate: number;
  public maxPower: number;
  public maxRpm: number;
  public maxSpeed: number;
  public meanCadence: number;
  public meanCaloricburnRate: number;
  public meanHeartRate: number;
  public meanPower: number;
  public meanRpm: number;
  public meanSpeed: number;
  public minAltitude: number;
  public minHeartRate: number;
  public pkgName: string;

  public startTime: Date;
  public createTime: Date;
  public endTime: Date;
  public timeOffset: string;
  public updateTime: Date;

  public distance: number;
  public duration: number;

  constructor(data: any) {
    this.additional = data['additional'];
    this.altitudeGain = data['altitude_gain'];
    this.altitudeLoss = data['altitude_loss'];
    this.calorie = Number(data['calorie']);
    this.comment = data['comment'];
    this.count = data['count'];
    this.countType = data['count_type'];
    this.custom = data['custom'];
    this.datauuid = data['datauuid'];
    this.declineDistance = Number(data['decline_distance']);
    this.deviceuuid = data['deviceuuid'];

    this.inclineDistance = data['incline_distance'];
    this.liveData = data['live_data'];
    this.locationData = data['location_data'];

    this.maxAltitude = Number(data['max_altitude']);
    this.maxCadence = Number(data['max_cadence']);
    this.maxCaloricburnRate = Number(data['max_caloricburn_rate']);
    this.maxHeartRate = Number(data['max_heart_rate']);
    this.maxPower = Number(data['max_power']);
    this.maxRpm = Number(data['max_rpm']);
    this.maxSpeed = Number(data['max_speed']);
    this.meanCadence = Number(data['mean_cadence']);
    this.meanCaloricburnRate = Number(data['mean_caloricburn_rate']);
    this.meanHeartRate = Number(data['mean_heart_rate']);
    this.meanPower = Number(data['mean_power']);
    this.meanRpm = Number(data['mean_rpm']);
    this.meanSpeed = Number(data['mean_speed']);
    this.minAltitude = Number(data['min_altitude']);
    this.minHeartRate = Number(data['min_heart_rate']);
    this.pkgName = data['pkg_name'];

    this.exerciseCustomType = data['exercise_custom_type'];
    this.exerciseType = Number(data['exercise_type']);
    this.type = toExerciseType(this.exerciseType);

    this.distance = Number(data['distance']);
    this.duration = Number(data['duration']);

    this.createTime = new Date(data['create_time']);
    this.endTime = new Date(data['end_time']);
    this.startTime = new Date(data['start_time']);
    this.updateTime = new Date(data['update_time']);
    this.timeOffset = data['time_offset'];
  }

  public getDuration(): string {
    const seconds = ((this.duration / 1000) % 60).toFixed(0);
    const minutes = ((this.duration / 1000 / 60) % 60).toFixed(0);
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }

  public meanSpeedKmps(): number {
    return this.meanSpeed * 3.6;
  }
}
