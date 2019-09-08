import ExerciseType, { toExerciseType } from './ExerciseType';

export default class Exercise {
    public additional: String;
    public altitude_gain: String;
    public altitude_loss: String;
    public calorie: Number;
    public comment: String;
    public count_type: String;
    public count: String;
    public custom: String;
    public datauuid: String;
    public deviceuuid: String;

    public exercise_custom_type: String;
    public exercise_type: Number;
    public type: ExerciseType;

    public decline_distance: Number;
    public incline_distance: Number;
    public live_data: String;
    public location_data: String;

    public max_altitude: Number;
    public max_cadence: Number;
    public max_caloricburn_rate: Number;
    public max_heart_rate: Number;
    public max_power: Number;
    public max_rpm: Number;
    public max_speed: Number;
    public mean_cadence: Number;
    public mean_caloricburn_rate: Number;
    public mean_heart_rate: Number;
    public mean_power: Number;
    public mean_rpm: Number;
    public mean_speed: Number;
    public min_altitude: Number;
    public min_heart_rate: Number;
    public pkg_name: String;

    public start_time: Date;
    public create_time: Date;
    public end_time: Date;
    public time_offset: String;
    public update_time: Date;

    public distance: Number;
    public duration: Number;

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
}
