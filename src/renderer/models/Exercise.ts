import ExerciseType, { toExerciseType } from './ExerciseType';

export default class Exercise {
    public additional: string;
    public altitude_gain: string;
    public altitude_loss: string;
    public calorie: Number;
    public comment: string;
    public count_type: string;
    public count: string;
    public custom: string;
    public datauuid: string;
    public deviceuuid: string;

    public exercise_custom_type: string;
    public exercise_type: Number;
    public type: ExerciseType;

    public decline_distance: Number;
    public incline_distance: Number;
    public live_data: string;
    public location_data: string;

    public max_altitude: number;
    public max_cadence: number;
    public max_caloricburn_rate: number;
    public max_heart_rate: number;
    public max_power: number;
    public max_rpm: number;
    public max_speed: number;
    public mean_cadence: number;
    public mean_caloricburn_rate: number;
    public mean_heart_rate: number;
    public mean_power: number;
    public mean_rpm: number;
    public mean_speed: number;
    public min_altitude: number;
    public min_heart_rate: number;
    public pkg_name: string;

    public start_time: Date;
    public create_time: Date;
    public end_time: Date;
    public time_offset: string;
    public update_time: Date;

    public distance: number;
    public duration: number;

    constructor(data: any) {
        this.additional = data['additional'];
        this.altitude_gain = data['altitude_gain'];
        this.altitude_loss = data['altitude_loss'];
        this.calorie = Number(data['calorie']);
        this.comment = data['comment'];
        this.count = data['count'];
        this.count_type = data['count_type'];
        this.custom = data['custom'];
        this.datauuid = data['datauuid'];
        this.decline_distance = Number(data['decline_distance']);
        this.deviceuuid = data['deviceuuid'];

        this.incline_distance = data['incline_distance'];
        this.live_data = data['live_data'];
        this.location_data = data['location_data'];

        this.max_altitude = Number(data['max_altitude']);
        this.max_cadence = Number(data['max_cadence']);
        this.max_caloricburn_rate = Number(data['max_caloricburn_rate']);
        this.max_heart_rate = Number(data['max_heart_rate']);
        this.max_power = Number(data['max_power']);
        this.max_rpm = Number(data['max_rpm']);
        this.max_speed = Number(data['max_speed']);
        this.mean_cadence = Number(data['mean_cadence']);
        this.mean_caloricburn_rate = Number(data['mean_caloricburn_rate']);
        this.mean_heart_rate = Number(data['mean_heart_rate']);
        this.mean_power = Number(data['mean_power']);
        this.mean_rpm = Number(data['mean_rpm']);
        this.mean_speed = Number(data['mean_speed']);
        this.min_altitude = Number(data['min_altitude']);
        this.min_heart_rate = Number(data['min_heart_rate']);
        this.pkg_name = data['pkg_name'];

        this.exercise_custom_type = data['exercise_custom_type'];
        this.exercise_type = Number(data['exercise_type']);
        this.type = toExerciseType(this.exercise_type);

        this.distance = Number(data['distance']);
        this.duration = Number(data['duration']);

        this.create_time = new Date(data['create_time']);
        this.end_time = new Date(data['end_time']);
        this.start_time = new Date(data['start_time']);
        this.update_time = new Date(data['update_time']);
        this.time_offset = data['time_offset'];
    }

    public getDuration(): string {
        const seconds = ((this.duration / 1000) % 60).toFixed(0);
        const minutes = ((this.duration / 1000 / 60) % 60).toFixed(0);
        return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
}
