/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["_text"]:unknown;
	/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
["_text_comparison_exp"]: {
	_eq?: ValueTypes["_text"] | undefined | null,
	_gt?: ValueTypes["_text"] | undefined | null,
	_gte?: ValueTypes["_text"] | undefined | null,
	_in?: (ValueTypes["_text"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["_text"] | undefined | null,
	_lte?: ValueTypes["_text"] | undefined | null,
	_neq?: ValueTypes["_text"] | undefined | null,
	_nin?: (ValueTypes["_text"])[]
};
	/** columns and relationships of "booking" */
["booking"]: AliasType<{
	bookedAt?:boolean,
	bookerName?:boolean,
	bookingChannel?:boolean,
	checkIn?:boolean,
	checkOut?:boolean,
	confirmationCode?:boolean,
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	currency?:boolean,
	/** An object relationship */
	entity?:ValueTypes["entity"],
	entityId?:boolean,
	guestName?:boolean,
	guests?:boolean,
	id?:boolean,
	isOTA?:boolean,
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
lines_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
metadata?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	nights?:boolean,
	/** An object relationship */
	otaBooking?:ValueTypes["booking"],
	otaBookingId?:boolean,
relatedBookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
relatedBookings_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
	status?:boolean,
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
tags_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	uniqueRef?:boolean,
	/** An object relationship */
	unit?:ValueTypes["unit"],
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "booking" */
["booking_aggregate"]: AliasType<{
	aggregate?:ValueTypes["booking_aggregate_fields"],
	nodes?:ValueTypes["booking"],
		__typename?: boolean
}>;
	/** aggregate fields of "booking" */
["booking_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["booking_avg_fields"],
count?: [{	columns?: (ValueTypes["booking_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["booking_max_fields"],
	min?:ValueTypes["booking_min_fields"],
	stddev?:ValueTypes["booking_stddev_fields"],
	stddev_pop?:ValueTypes["booking_stddev_pop_fields"],
	stddev_samp?:ValueTypes["booking_stddev_samp_fields"],
	sum?:ValueTypes["booking_sum_fields"],
	var_pop?:ValueTypes["booking_var_pop_fields"],
	var_samp?:ValueTypes["booking_var_samp_fields"],
	variance?:ValueTypes["booking_variance_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "booking" */
["booking_aggregate_order_by"]: {
	avg?: ValueTypes["booking_avg_order_by"] | undefined | null,
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["booking_max_order_by"] | undefined | null,
	min?: ValueTypes["booking_min_order_by"] | undefined | null,
	stddev?: ValueTypes["booking_stddev_order_by"] | undefined | null,
	stddev_pop?: ValueTypes["booking_stddev_pop_order_by"] | undefined | null,
	stddev_samp?: ValueTypes["booking_stddev_samp_order_by"] | undefined | null,
	sum?: ValueTypes["booking_sum_order_by"] | undefined | null,
	var_pop?: ValueTypes["booking_var_pop_order_by"] | undefined | null,
	var_samp?: ValueTypes["booking_var_samp_order_by"] | undefined | null,
	variance?: ValueTypes["booking_variance_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["booking_append_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "booking" */
["booking_arr_rel_insert_input"]: {
	data: (ValueTypes["booking_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["booking_on_conflict"] | undefined | null
};
	/** aggregate avg on columns */
["booking_avg_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by avg() on columns of table "booking" */
["booking_avg_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
["booking_bool_exp"]: {
	_and?: (ValueTypes["booking_bool_exp"])[],
	_not?: ValueTypes["booking_bool_exp"] | undefined | null,
	_or?: (ValueTypes["booking_bool_exp"])[],
	bookedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	bookerName?: ValueTypes["String_comparison_exp"] | undefined | null,
	bookingChannel?: ValueTypes["booking_channel_enum_comparison_exp"] | undefined | null,
	checkIn?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	checkOut?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	confirmationCode?: ValueTypes["String_comparison_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	currency?: ValueTypes["currency_enum_comparison_exp"] | undefined | null,
	entity?: ValueTypes["entity_bool_exp"] | undefined | null,
	entityId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	guestName?: ValueTypes["String_comparison_exp"] | undefined | null,
	guests?: ValueTypes["Int_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	isOTA?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	lines?: ValueTypes["line_bool_exp"] | undefined | null,
	metadata?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	nights?: ValueTypes["Int_comparison_exp"] | undefined | null,
	otaBooking?: ValueTypes["booking_bool_exp"] | undefined | null,
	otaBookingId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	relatedBookings?: ValueTypes["booking_bool_exp"] | undefined | null,
	status?: ValueTypes["booking_status_enum_comparison_exp"] | undefined | null,
	tags?: ValueTypes["tag_bool_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	unit?: ValueTypes["unit_bool_exp"] | undefined | null,
	unitId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** columns and relationships of "booking_channel" */
["booking_channel"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "booking_channel" */
["booking_channel_aggregate"]: AliasType<{
	aggregate?:ValueTypes["booking_channel_aggregate_fields"],
	nodes?:ValueTypes["booking_channel"],
		__typename?: boolean
}>;
	/** aggregate fields of "booking_channel" */
["booking_channel_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["booking_channel_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["booking_channel_max_fields"],
	min?:ValueTypes["booking_channel_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "booking_channel". All fields are combined with a logical 'AND'. */
["booking_channel_bool_exp"]: {
	_and?: (ValueTypes["booking_channel_bool_exp"])[],
	_not?: ValueTypes["booking_channel_bool_exp"] | undefined | null,
	_or?: (ValueTypes["booking_channel_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "booking_channel" */
["booking_channel_constraint"]:booking_channel_constraint;
	["booking_channel_enum"]:booking_channel_enum;
	/** Boolean expression to compare columns of type "booking_channel_enum". All fields are combined with logical 'AND'. */
["booking_channel_enum_comparison_exp"]: {
	_eq?: ValueTypes["booking_channel_enum"] | undefined | null,
	_in?: (ValueTypes["booking_channel_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["booking_channel_enum"] | undefined | null,
	_nin?: (ValueTypes["booking_channel_enum"])[]
};
	/** input type for inserting data into table "booking_channel" */
["booking_channel_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["booking_channel_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["booking_channel_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "booking_channel" */
["booking_channel_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["booking_channel"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "booking_channel" */
["booking_channel_on_conflict"]: {
	constraint: ValueTypes["booking_channel_constraint"],
	update_columns: (ValueTypes["booking_channel_update_column"])[] | undefined | null,
	where?: ValueTypes["booking_channel_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "booking_channel". */
["booking_channel_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: booking_channel */
["booking_channel_pk_columns_input"]: {
	name: string
};
	/** select columns of table "booking_channel" */
["booking_channel_select_column"]:booking_channel_select_column;
	/** input type for updating data in table "booking_channel" */
["booking_channel_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "booking_channel" */
["booking_channel_update_column"]:booking_channel_update_column;
	/** unique or primary key constraints on table "booking" */
["booking_constraint"]:booking_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["booking_delete_at_path_input"]: {
	metadata?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["booking_delete_elem_input"]: {
	metadata?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["booking_delete_key_input"]: {
	metadata?: string | undefined | null
};
	/** input type for incrementing numeric columns in table "booking" */
["booking_inc_input"]: {
	guests?: number | undefined | null,
	nights?: number | undefined | null
};
	/** input type for inserting data into table "booking" */
["booking_insert_input"]: {
	bookedAt?: ValueTypes["timestamptz"] | undefined | null,
	bookerName?: string | undefined | null,
	bookingChannel?: ValueTypes["booking_channel_enum"] | undefined | null,
	checkIn?: ValueTypes["timestamptz"] | undefined | null,
	checkOut?: ValueTypes["timestamptz"] | undefined | null,
	confirmationCode?: string | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	currency?: ValueTypes["currency_enum"] | undefined | null,
	entity?: ValueTypes["entity_obj_rel_insert_input"] | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	guestName?: string | undefined | null,
	guests?: number | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isOTA?: boolean | undefined | null,
	lines?: ValueTypes["line_arr_rel_insert_input"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	nights?: number | undefined | null,
	otaBooking?: ValueTypes["booking_obj_rel_insert_input"] | undefined | null,
	otaBookingId?: ValueTypes["uuid"] | undefined | null,
	relatedBookings?: ValueTypes["booking_arr_rel_insert_input"] | undefined | null,
	status?: ValueTypes["booking_status_enum"] | undefined | null,
	tags?: ValueTypes["tag_arr_rel_insert_input"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	uniqueRef?: string | undefined | null,
	unit?: ValueTypes["unit_obj_rel_insert_input"] | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["booking_max_fields"]: AliasType<{
	bookedAt?:boolean,
	bookerName?:boolean,
	checkIn?:boolean,
	checkOut?:boolean,
	confirmationCode?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	entityId?:boolean,
	guestName?:boolean,
	guests?:boolean,
	id?:boolean,
	nights?:boolean,
	otaBookingId?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "booking" */
["booking_max_order_by"]: {
	bookedAt?: ValueTypes["order_by"] | undefined | null,
	bookerName?: ValueTypes["order_by"] | undefined | null,
	checkIn?: ValueTypes["order_by"] | undefined | null,
	checkOut?: ValueTypes["order_by"] | undefined | null,
	confirmationCode?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	guestName?: ValueTypes["order_by"] | undefined | null,
	guests?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null,
	otaBookingId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["booking_min_fields"]: AliasType<{
	bookedAt?:boolean,
	bookerName?:boolean,
	checkIn?:boolean,
	checkOut?:boolean,
	confirmationCode?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	entityId?:boolean,
	guestName?:boolean,
	guests?:boolean,
	id?:boolean,
	nights?:boolean,
	otaBookingId?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "booking" */
["booking_min_order_by"]: {
	bookedAt?: ValueTypes["order_by"] | undefined | null,
	bookerName?: ValueTypes["order_by"] | undefined | null,
	checkIn?: ValueTypes["order_by"] | undefined | null,
	checkOut?: ValueTypes["order_by"] | undefined | null,
	confirmationCode?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	guestName?: ValueTypes["order_by"] | undefined | null,
	guests?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null,
	otaBookingId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "booking" */
["booking_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["booking"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "booking" */
["booking_obj_rel_insert_input"]: {
	data: ValueTypes["booking_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["booking_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "booking" */
["booking_on_conflict"]: {
	constraint: ValueTypes["booking_constraint"],
	update_columns: (ValueTypes["booking_update_column"])[] | undefined | null,
	where?: ValueTypes["booking_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "booking". */
["booking_order_by"]: {
	bookedAt?: ValueTypes["order_by"] | undefined | null,
	bookerName?: ValueTypes["order_by"] | undefined | null,
	bookingChannel?: ValueTypes["order_by"] | undefined | null,
	checkIn?: ValueTypes["order_by"] | undefined | null,
	checkOut?: ValueTypes["order_by"] | undefined | null,
	confirmationCode?: ValueTypes["order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	currency?: ValueTypes["order_by"] | undefined | null,
	entity?: ValueTypes["entity_order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	guestName?: ValueTypes["order_by"] | undefined | null,
	guests?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	isOTA?: ValueTypes["order_by"] | undefined | null,
	lines_aggregate?: ValueTypes["line_aggregate_order_by"] | undefined | null,
	metadata?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null,
	otaBooking?: ValueTypes["booking_order_by"] | undefined | null,
	otaBookingId?: ValueTypes["order_by"] | undefined | null,
	relatedBookings_aggregate?: ValueTypes["booking_aggregate_order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	tags_aggregate?: ValueTypes["tag_aggregate_order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unit?: ValueTypes["unit_order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: booking */
["booking_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["booking_prepend_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "booking" */
["booking_select_column"]:booking_select_column;
	/** input type for updating data in table "booking" */
["booking_set_input"]: {
	bookedAt?: ValueTypes["timestamptz"] | undefined | null,
	bookerName?: string | undefined | null,
	bookingChannel?: ValueTypes["booking_channel_enum"] | undefined | null,
	checkIn?: ValueTypes["timestamptz"] | undefined | null,
	checkOut?: ValueTypes["timestamptz"] | undefined | null,
	confirmationCode?: string | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	currency?: ValueTypes["currency_enum"] | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	guestName?: string | undefined | null,
	guests?: number | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isOTA?: boolean | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	nights?: number | undefined | null,
	otaBookingId?: ValueTypes["uuid"] | undefined | null,
	status?: ValueTypes["booking_status_enum"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	["booking_status_enum"]:booking_status_enum;
	/** Boolean expression to compare columns of type "booking_status_enum". All fields are combined with logical 'AND'. */
["booking_status_enum_comparison_exp"]: {
	_eq?: ValueTypes["booking_status_enum"] | undefined | null,
	_in?: (ValueTypes["booking_status_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["booking_status_enum"] | undefined | null,
	_nin?: (ValueTypes["booking_status_enum"])[]
};
	/** aggregate stddev on columns */
["booking_stddev_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by stddev() on columns of table "booking" */
["booking_stddev_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_pop on columns */
["booking_stddev_pop_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_pop() on columns of table "booking" */
["booking_stddev_pop_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_samp on columns */
["booking_stddev_samp_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_samp() on columns of table "booking" */
["booking_stddev_samp_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate sum on columns */
["booking_sum_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by sum() on columns of table "booking" */
["booking_sum_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** update columns of table "booking" */
["booking_update_column"]:booking_update_column;
	/** aggregate var_pop on columns */
["booking_var_pop_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by var_pop() on columns of table "booking" */
["booking_var_pop_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate var_samp on columns */
["booking_var_samp_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by var_samp() on columns of table "booking" */
["booking_var_samp_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate variance on columns */
["booking_variance_fields"]: AliasType<{
	guests?:boolean,
	nights?:boolean,
		__typename?: boolean
}>;
	/** order by variance() on columns of table "booking" */
["booking_variance_order_by"]: {
	guests?: ValueTypes["order_by"] | undefined | null,
	nights?: ValueTypes["order_by"] | undefined | null
};
	/** columns and relationships of "booking_status" */
["bookingStatus"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "booking_status" */
["bookingStatus_aggregate"]: AliasType<{
	aggregate?:ValueTypes["bookingStatus_aggregate_fields"],
	nodes?:ValueTypes["bookingStatus"],
		__typename?: boolean
}>;
	/** aggregate fields of "booking_status" */
["bookingStatus_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["bookingStatus_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["bookingStatus_max_fields"],
	min?:ValueTypes["bookingStatus_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "booking_status". All fields are combined with a logical 'AND'. */
["bookingStatus_bool_exp"]: {
	_and?: (ValueTypes["bookingStatus_bool_exp"])[],
	_not?: ValueTypes["bookingStatus_bool_exp"] | undefined | null,
	_or?: (ValueTypes["bookingStatus_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "booking_status" */
["bookingStatus_constraint"]:bookingStatus_constraint;
	/** input type for inserting data into table "booking_status" */
["bookingStatus_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["bookingStatus_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["bookingStatus_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "booking_status" */
["bookingStatus_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["bookingStatus"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "booking_status" */
["bookingStatus_on_conflict"]: {
	constraint: ValueTypes["bookingStatus_constraint"],
	update_columns: (ValueTypes["bookingStatus_update_column"])[] | undefined | null,
	where?: ValueTypes["bookingStatus_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "booking_status". */
["bookingStatus_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: bookingStatus */
["bookingStatus_pk_columns_input"]: {
	name: string
};
	/** select columns of table "booking_status" */
["bookingStatus_select_column"]:bookingStatus_select_column;
	/** input type for updating data in table "booking_status" */
["bookingStatus_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "booking_status" */
["bookingStatus_update_column"]:bookingStatus_update_column;
	/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?: boolean | undefined | null,
	_gt?: boolean | undefined | null,
	_gte?: boolean | undefined | null,
	_in?: (boolean)[],
	_is_null?: boolean | undefined | null,
	_lt?: boolean | undefined | null,
	_lte?: boolean | undefined | null,
	_neq?: boolean | undefined | null,
	_nin?: (boolean)[]
};
	/** columns and relationships of "classification" */
["classification"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "classification" */
["classification_aggregate"]: AliasType<{
	aggregate?:ValueTypes["classification_aggregate_fields"],
	nodes?:ValueTypes["classification"],
		__typename?: boolean
}>;
	/** aggregate fields of "classification" */
["classification_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["classification_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["classification_max_fields"],
	min?:ValueTypes["classification_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "classification". All fields are combined with a logical 'AND'. */
["classification_bool_exp"]: {
	_and?: (ValueTypes["classification_bool_exp"])[],
	_not?: ValueTypes["classification_bool_exp"] | undefined | null,
	_or?: (ValueTypes["classification_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "classification" */
["classification_constraint"]:classification_constraint;
	["classification_enum"]:classification_enum;
	/** Boolean expression to compare columns of type "classification_enum". All fields are combined with logical 'AND'. */
["classification_enum_comparison_exp"]: {
	_eq?: ValueTypes["classification_enum"] | undefined | null,
	_in?: (ValueTypes["classification_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["classification_enum"] | undefined | null,
	_nin?: (ValueTypes["classification_enum"])[]
};
	/** input type for inserting data into table "classification" */
["classification_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["classification_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["classification_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "classification" */
["classification_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["classification"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "classification" */
["classification_on_conflict"]: {
	constraint: ValueTypes["classification_constraint"],
	update_columns: (ValueTypes["classification_update_column"])[] | undefined | null,
	where?: ValueTypes["classification_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "classification". */
["classification_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: classification */
["classification_pk_columns_input"]: {
	name: string
};
	/** select columns of table "classification" */
["classification_select_column"]:classification_select_column;
	/** input type for updating data in table "classification" */
["classification_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "classification" */
["classification_update_column"]:classification_update_column;
	/** columns and relationships of "connection" */
["connection"]: AliasType<{
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
bookings_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
	createdAt?:boolean,
credentials?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
entities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
entities_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
	id?:boolean,
	/** An object relationship */
	integration?:ValueTypes["integration"],
	integrationId?:boolean,
jobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job"]],
jobs_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job_aggregate"]],
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
lines_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
metrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric"]],
metrics_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric_aggregate"]],
	name?:boolean,
payments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment"]],
payments_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment_aggregate"]],
persistentState?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	status?:boolean,
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
tags_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
units?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit"]],
units_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit_aggregate"]],
	webhookKey?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "connection" */
["connection_aggregate"]: AliasType<{
	aggregate?:ValueTypes["connection_aggregate_fields"],
	nodes?:ValueTypes["connection"],
		__typename?: boolean
}>;
	/** aggregate fields of "connection" */
["connection_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["connection_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["connection_max_fields"],
	min?:ValueTypes["connection_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "connection" */
["connection_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["connection_max_order_by"] | undefined | null,
	min?: ValueTypes["connection_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["connection_append_input"]: {
	credentials?: ValueTypes["jsonb"] | undefined | null,
	persistentState?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "connection" */
["connection_arr_rel_insert_input"]: {
	data: (ValueTypes["connection_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["connection_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "connection". All fields are combined with a logical 'AND'. */
["connection_bool_exp"]: {
	_and?: (ValueTypes["connection_bool_exp"])[],
	_not?: ValueTypes["connection_bool_exp"] | undefined | null,
	_or?: (ValueTypes["connection_bool_exp"])[],
	bookings?: ValueTypes["booking_bool_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	credentials?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	entities?: ValueTypes["entity_bool_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	integration?: ValueTypes["integration_bool_exp"] | undefined | null,
	integrationId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	jobs?: ValueTypes["job_bool_exp"] | undefined | null,
	lines?: ValueTypes["line_bool_exp"] | undefined | null,
	metrics?: ValueTypes["metric_bool_exp"] | undefined | null,
	name?: ValueTypes["String_comparison_exp"] | undefined | null,
	payments?: ValueTypes["payment_bool_exp"] | undefined | null,
	persistentState?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	status?: ValueTypes["String_comparison_exp"] | undefined | null,
	tags?: ValueTypes["tag_bool_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	units?: ValueTypes["unit_bool_exp"] | undefined | null,
	webhookKey?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "connection" */
["connection_constraint"]:connection_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["connection_delete_at_path_input"]: {
	credentials?: (string)[],
	persistentState?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["connection_delete_elem_input"]: {
	credentials?: number | undefined | null,
	persistentState?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["connection_delete_key_input"]: {
	credentials?: string | undefined | null,
	persistentState?: string | undefined | null
};
	/** input type for inserting data into table "connection" */
["connection_insert_input"]: {
	bookings?: ValueTypes["booking_arr_rel_insert_input"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	credentials?: ValueTypes["jsonb"] | undefined | null,
	entities?: ValueTypes["entity_arr_rel_insert_input"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	integration?: ValueTypes["integration_obj_rel_insert_input"] | undefined | null,
	integrationId?: ValueTypes["uuid"] | undefined | null,
	jobs?: ValueTypes["job_arr_rel_insert_input"] | undefined | null,
	lines?: ValueTypes["line_arr_rel_insert_input"] | undefined | null,
	metrics?: ValueTypes["metric_arr_rel_insert_input"] | undefined | null,
	name?: string | undefined | null,
	payments?: ValueTypes["payment_arr_rel_insert_input"] | undefined | null,
	persistentState?: ValueTypes["jsonb"] | undefined | null,
	status?: string | undefined | null,
	tags?: ValueTypes["tag_arr_rel_insert_input"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	units?: ValueTypes["unit_arr_rel_insert_input"] | undefined | null,
	webhookKey?: string | undefined | null
};
	/** aggregate max on columns */
["connection_max_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	integrationId?:boolean,
	name?:boolean,
	status?:boolean,
	teamId?:boolean,
	webhookKey?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "connection" */
["connection_max_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	webhookKey?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["connection_min_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	integrationId?:boolean,
	name?:boolean,
	status?:boolean,
	teamId?:boolean,
	webhookKey?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "connection" */
["connection_min_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	webhookKey?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "connection" */
["connection_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["connection"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "connection" */
["connection_obj_rel_insert_input"]: {
	data: ValueTypes["connection_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["connection_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "connection" */
["connection_on_conflict"]: {
	constraint: ValueTypes["connection_constraint"],
	update_columns: (ValueTypes["connection_update_column"])[] | undefined | null,
	where?: ValueTypes["connection_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "connection". */
["connection_order_by"]: {
	bookings_aggregate?: ValueTypes["booking_aggregate_order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	credentials?: ValueTypes["order_by"] | undefined | null,
	entities_aggregate?: ValueTypes["entity_aggregate_order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integration?: ValueTypes["integration_order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	jobs_aggregate?: ValueTypes["job_aggregate_order_by"] | undefined | null,
	lines_aggregate?: ValueTypes["line_aggregate_order_by"] | undefined | null,
	metrics_aggregate?: ValueTypes["metric_aggregate_order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	payments_aggregate?: ValueTypes["payment_aggregate_order_by"] | undefined | null,
	persistentState?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	tags_aggregate?: ValueTypes["tag_aggregate_order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	units_aggregate?: ValueTypes["unit_aggregate_order_by"] | undefined | null,
	webhookKey?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: connection */
["connection_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["connection_prepend_input"]: {
	credentials?: ValueTypes["jsonb"] | undefined | null,
	persistentState?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "connection" */
["connection_select_column"]:connection_select_column;
	/** input type for updating data in table "connection" */
["connection_set_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	credentials?: ValueTypes["jsonb"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	integrationId?: ValueTypes["uuid"] | undefined | null,
	name?: string | undefined | null,
	persistentState?: ValueTypes["jsonb"] | undefined | null,
	status?: string | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	webhookKey?: string | undefined | null
};
	/** update columns of table "connection" */
["connection_update_column"]:connection_update_column;
	/** columns and relationships of "currency" */
["currency"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "currency" */
["currency_aggregate"]: AliasType<{
	aggregate?:ValueTypes["currency_aggregate_fields"],
	nodes?:ValueTypes["currency"],
		__typename?: boolean
}>;
	/** aggregate fields of "currency" */
["currency_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["currency_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["currency_max_fields"],
	min?:ValueTypes["currency_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
["currency_bool_exp"]: {
	_and?: (ValueTypes["currency_bool_exp"])[],
	_not?: ValueTypes["currency_bool_exp"] | undefined | null,
	_or?: (ValueTypes["currency_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "currency" */
["currency_constraint"]:currency_constraint;
	["currency_enum"]:currency_enum;
	/** Boolean expression to compare columns of type "currency_enum". All fields are combined with logical 'AND'. */
["currency_enum_comparison_exp"]: {
	_eq?: ValueTypes["currency_enum"] | undefined | null,
	_in?: (ValueTypes["currency_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["currency_enum"] | undefined | null,
	_nin?: (ValueTypes["currency_enum"])[]
};
	/** input type for inserting data into table "currency" */
["currency_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["currency_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["currency_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "currency" */
["currency_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["currency"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "currency" */
["currency_on_conflict"]: {
	constraint: ValueTypes["currency_constraint"],
	update_columns: (ValueTypes["currency_update_column"])[] | undefined | null,
	where?: ValueTypes["currency_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "currency". */
["currency_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: currency */
["currency_pk_columns_input"]: {
	name: string
};
	/** select columns of table "currency" */
["currency_select_column"]:currency_select_column;
	/** input type for updating data in table "currency" */
["currency_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "currency" */
["currency_update_column"]:currency_update_column;
	/** columns and relationships of "entity" */
["entity"]: AliasType<{
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
bookings_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
diffJson?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	hash?:boolean,
	id?:boolean,
	/** An object relationship */
	job?:ValueTypes["job"],
	jobId?:boolean,
json?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
normalizedJson?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	normalizedType?:boolean,
	parsedAt?:boolean,
payments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment"]],
payments_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment_aggregate"]],
	/** An object relationship */
	predecessorEntity?:ValueTypes["entity"],
	predecessorEntityId?:boolean,
	status?:boolean,
	statusText?:boolean,
successorEntities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
successorEntities_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
units?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit"]],
units_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit_aggregate"]],
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "entity" */
["entity_aggregate"]: AliasType<{
	aggregate?:ValueTypes["entity_aggregate_fields"],
	nodes?:ValueTypes["entity"],
		__typename?: boolean
}>;
	/** aggregate fields of "entity" */
["entity_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["entity_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["entity_max_fields"],
	min?:ValueTypes["entity_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "entity" */
["entity_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["entity_max_order_by"] | undefined | null,
	min?: ValueTypes["entity_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["entity_append_input"]: {
	diffJson?: ValueTypes["jsonb"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	normalizedJson?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "entity" */
["entity_arr_rel_insert_input"]: {
	data: (ValueTypes["entity_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["entity_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
["entity_bool_exp"]: {
	_and?: (ValueTypes["entity_bool_exp"])[],
	_not?: ValueTypes["entity_bool_exp"] | undefined | null,
	_or?: (ValueTypes["entity_bool_exp"])[],
	bookings?: ValueTypes["booking_bool_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	description?: ValueTypes["String_comparison_exp"] | undefined | null,
	diffJson?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	hash?: ValueTypes["String_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	job?: ValueTypes["job_bool_exp"] | undefined | null,
	jobId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	json?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	normalizedJson?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	normalizedType?: ValueTypes["normalized_type_enum_comparison_exp"] | undefined | null,
	parsedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	payments?: ValueTypes["payment_bool_exp"] | undefined | null,
	predecessorEntity?: ValueTypes["entity_bool_exp"] | undefined | null,
	predecessorEntityId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	status?: ValueTypes["entity_status_enum_comparison_exp"] | undefined | null,
	statusText?: ValueTypes["String_comparison_exp"] | undefined | null,
	successorEntities?: ValueTypes["entity_bool_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	units?: ValueTypes["unit_bool_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "entity" */
["entity_constraint"]:entity_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["entity_delete_at_path_input"]: {
	diffJson?: (string)[],
	json?: (string)[],
	normalizedJson?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["entity_delete_elem_input"]: {
	diffJson?: number | undefined | null,
	json?: number | undefined | null,
	normalizedJson?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["entity_delete_key_input"]: {
	diffJson?: string | undefined | null,
	json?: string | undefined | null,
	normalizedJson?: string | undefined | null
};
	/** input type for inserting data into table "entity" */
["entity_insert_input"]: {
	bookings?: ValueTypes["booking_arr_rel_insert_input"] | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	description?: string | undefined | null,
	diffJson?: ValueTypes["jsonb"] | undefined | null,
	hash?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	job?: ValueTypes["job_obj_rel_insert_input"] | undefined | null,
	jobId?: ValueTypes["uuid"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	normalizedJson?: ValueTypes["jsonb"] | undefined | null,
	normalizedType?: ValueTypes["normalized_type_enum"] | undefined | null,
	parsedAt?: ValueTypes["timestamptz"] | undefined | null,
	payments?: ValueTypes["payment_arr_rel_insert_input"] | undefined | null,
	predecessorEntity?: ValueTypes["entity_obj_rel_insert_input"] | undefined | null,
	predecessorEntityId?: ValueTypes["uuid"] | undefined | null,
	status?: ValueTypes["entity_status_enum"] | undefined | null,
	statusText?: string | undefined | null,
	successorEntities?: ValueTypes["entity_arr_rel_insert_input"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	units?: ValueTypes["unit_arr_rel_insert_input"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["entity_max_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	hash?:boolean,
	id?:boolean,
	jobId?:boolean,
	parsedAt?:boolean,
	predecessorEntityId?:boolean,
	statusText?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "entity" */
["entity_max_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	hash?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	parsedAt?: ValueTypes["order_by"] | undefined | null,
	predecessorEntityId?: ValueTypes["order_by"] | undefined | null,
	statusText?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["entity_min_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	hash?:boolean,
	id?:boolean,
	jobId?:boolean,
	parsedAt?:boolean,
	predecessorEntityId?:boolean,
	statusText?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "entity" */
["entity_min_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	hash?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	parsedAt?: ValueTypes["order_by"] | undefined | null,
	predecessorEntityId?: ValueTypes["order_by"] | undefined | null,
	statusText?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "entity" */
["entity_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["entity"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "entity" */
["entity_obj_rel_insert_input"]: {
	data: ValueTypes["entity_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["entity_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "entity" */
["entity_on_conflict"]: {
	constraint: ValueTypes["entity_constraint"],
	update_columns: (ValueTypes["entity_update_column"])[] | undefined | null,
	where?: ValueTypes["entity_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "entity". */
["entity_order_by"]: {
	bookings_aggregate?: ValueTypes["booking_aggregate_order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	diffJson?: ValueTypes["order_by"] | undefined | null,
	hash?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	job?: ValueTypes["job_order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	json?: ValueTypes["order_by"] | undefined | null,
	normalizedJson?: ValueTypes["order_by"] | undefined | null,
	normalizedType?: ValueTypes["order_by"] | undefined | null,
	parsedAt?: ValueTypes["order_by"] | undefined | null,
	payments_aggregate?: ValueTypes["payment_aggregate_order_by"] | undefined | null,
	predecessorEntity?: ValueTypes["entity_order_by"] | undefined | null,
	predecessorEntityId?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	statusText?: ValueTypes["order_by"] | undefined | null,
	successorEntities_aggregate?: ValueTypes["entity_aggregate_order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	units_aggregate?: ValueTypes["unit_aggregate_order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: entity */
["entity_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["entity_prepend_input"]: {
	diffJson?: ValueTypes["jsonb"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	normalizedJson?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "entity" */
["entity_select_column"]:entity_select_column;
	/** input type for updating data in table "entity" */
["entity_set_input"]: {
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	description?: string | undefined | null,
	diffJson?: ValueTypes["jsonb"] | undefined | null,
	hash?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	jobId?: ValueTypes["uuid"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	normalizedJson?: ValueTypes["jsonb"] | undefined | null,
	normalizedType?: ValueTypes["normalized_type_enum"] | undefined | null,
	parsedAt?: ValueTypes["timestamptz"] | undefined | null,
	predecessorEntityId?: ValueTypes["uuid"] | undefined | null,
	status?: ValueTypes["entity_status_enum"] | undefined | null,
	statusText?: string | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	["entity_status_enum"]:entity_status_enum;
	/** Boolean expression to compare columns of type "entity_status_enum". All fields are combined with logical 'AND'. */
["entity_status_enum_comparison_exp"]: {
	_eq?: ValueTypes["entity_status_enum"] | undefined | null,
	_in?: (ValueTypes["entity_status_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["entity_status_enum"] | undefined | null,
	_nin?: (ValueTypes["entity_status_enum"])[]
};
	/** update columns of table "entity" */
["entity_update_column"]:entity_update_column;
	/** columns and relationships of "entity_status" */
["entityStatus"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "entity_status" */
["entityStatus_aggregate"]: AliasType<{
	aggregate?:ValueTypes["entityStatus_aggregate_fields"],
	nodes?:ValueTypes["entityStatus"],
		__typename?: boolean
}>;
	/** aggregate fields of "entity_status" */
["entityStatus_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["entityStatus_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["entityStatus_max_fields"],
	min?:ValueTypes["entityStatus_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "entity_status". All fields are combined with a logical 'AND'. */
["entityStatus_bool_exp"]: {
	_and?: (ValueTypes["entityStatus_bool_exp"])[],
	_not?: ValueTypes["entityStatus_bool_exp"] | undefined | null,
	_or?: (ValueTypes["entityStatus_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "entity_status" */
["entityStatus_constraint"]:entityStatus_constraint;
	/** input type for inserting data into table "entity_status" */
["entityStatus_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["entityStatus_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["entityStatus_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "entity_status" */
["entityStatus_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["entityStatus"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "entity_status" */
["entityStatus_on_conflict"]: {
	constraint: ValueTypes["entityStatus_constraint"],
	update_columns: (ValueTypes["entityStatus_update_column"])[] | undefined | null,
	where?: ValueTypes["entityStatus_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "entity_status". */
["entityStatus_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: entityStatus */
["entityStatus_pk_columns_input"]: {
	name: string
};
	/** select columns of table "entity_status" */
["entityStatus_select_column"]:entityStatus_select_column;
	/** input type for updating data in table "entity_status" */
["entityStatus_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "entity_status" */
["entityStatus_update_column"]:entityStatus_update_column;
	["float8"]:unknown;
	/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
["float8_comparison_exp"]: {
	_eq?: ValueTypes["float8"] | undefined | null,
	_gt?: ValueTypes["float8"] | undefined | null,
	_gte?: ValueTypes["float8"] | undefined | null,
	_in?: (ValueTypes["float8"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["float8"] | undefined | null,
	_lte?: ValueTypes["float8"] | undefined | null,
	_neq?: ValueTypes["float8"] | undefined | null,
	_nin?: (ValueTypes["float8"])[]
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?: number | undefined | null,
	_gt?: number | undefined | null,
	_gte?: number | undefined | null,
	_in?: (number)[],
	_is_null?: boolean | undefined | null,
	_lt?: number | undefined | null,
	_lte?: number | undefined | null,
	_neq?: number | undefined | null,
	_nin?: (number)[]
};
	/** columns and relationships of "integration" */
["integration"]: AliasType<{
	apiDevUrl?:boolean,
	apiUrl?:boolean,
connections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection"]],
connections_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection_aggregate"]],
	icon?:boolean,
	id?:boolean,
	isApproved?:boolean,
	isPrivate?:boolean,
jobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job"]],
jobs_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job_aggregate"]],
	name?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "integration" */
["integration_aggregate"]: AliasType<{
	aggregate?:ValueTypes["integration_aggregate_fields"],
	nodes?:ValueTypes["integration"],
		__typename?: boolean
}>;
	/** aggregate fields of "integration" */
["integration_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["integration_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["integration_max_fields"],
	min?:ValueTypes["integration_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "integration" */
["integration_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["integration_max_order_by"] | undefined | null,
	min?: ValueTypes["integration_min_order_by"] | undefined | null
};
	/** input type for inserting array relation for remote table "integration" */
["integration_arr_rel_insert_input"]: {
	data: (ValueTypes["integration_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["integration_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "integration". All fields are combined with a logical 'AND'. */
["integration_bool_exp"]: {
	_and?: (ValueTypes["integration_bool_exp"])[],
	_not?: ValueTypes["integration_bool_exp"] | undefined | null,
	_or?: (ValueTypes["integration_bool_exp"])[],
	apiDevUrl?: ValueTypes["String_comparison_exp"] | undefined | null,
	apiUrl?: ValueTypes["String_comparison_exp"] | undefined | null,
	connections?: ValueTypes["connection_bool_exp"] | undefined | null,
	icon?: ValueTypes["String_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	isApproved?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	isPrivate?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	jobs?: ValueTypes["job_bool_exp"] | undefined | null,
	name?: ValueTypes["String_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["integration_type_enum_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "integration" */
["integration_constraint"]:integration_constraint;
	/** input type for inserting data into table "integration" */
["integration_insert_input"]: {
	apiDevUrl?: string | undefined | null,
	apiUrl?: string | undefined | null,
	connections?: ValueTypes["connection_arr_rel_insert_input"] | undefined | null,
	icon?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isApproved?: boolean | undefined | null,
	isPrivate?: boolean | undefined | null,
	jobs?: ValueTypes["job_arr_rel_insert_input"] | undefined | null,
	name?: string | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: ValueTypes["integration_type_enum"] | undefined | null,
	uniqueRef?: string | undefined | null
};
	/** aggregate max on columns */
["integration_max_fields"]: AliasType<{
	apiDevUrl?:boolean,
	apiUrl?:boolean,
	icon?:boolean,
	id?:boolean,
	name?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "integration" */
["integration_max_order_by"]: {
	apiDevUrl?: ValueTypes["order_by"] | undefined | null,
	apiUrl?: ValueTypes["order_by"] | undefined | null,
	icon?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["integration_min_fields"]: AliasType<{
	apiDevUrl?:boolean,
	apiUrl?:boolean,
	icon?:boolean,
	id?:boolean,
	name?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "integration" */
["integration_min_order_by"]: {
	apiDevUrl?: ValueTypes["order_by"] | undefined | null,
	apiUrl?: ValueTypes["order_by"] | undefined | null,
	icon?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "integration" */
["integration_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["integration"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "integration" */
["integration_obj_rel_insert_input"]: {
	data: ValueTypes["integration_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["integration_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "integration" */
["integration_on_conflict"]: {
	constraint: ValueTypes["integration_constraint"],
	update_columns: (ValueTypes["integration_update_column"])[] | undefined | null,
	where?: ValueTypes["integration_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "integration". */
["integration_order_by"]: {
	apiDevUrl?: ValueTypes["order_by"] | undefined | null,
	apiUrl?: ValueTypes["order_by"] | undefined | null,
	connections_aggregate?: ValueTypes["connection_aggregate_order_by"] | undefined | null,
	icon?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	isApproved?: ValueTypes["order_by"] | undefined | null,
	isPrivate?: ValueTypes["order_by"] | undefined | null,
	jobs_aggregate?: ValueTypes["job_aggregate_order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: integration */
["integration_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** select columns of table "integration" */
["integration_select_column"]:integration_select_column;
	/** input type for updating data in table "integration" */
["integration_set_input"]: {
	apiDevUrl?: string | undefined | null,
	apiUrl?: string | undefined | null,
	icon?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isApproved?: boolean | undefined | null,
	isPrivate?: boolean | undefined | null,
	name?: string | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: ValueTypes["integration_type_enum"] | undefined | null,
	uniqueRef?: string | undefined | null
};
	["integration_type_enum"]:integration_type_enum;
	/** Boolean expression to compare columns of type "integration_type_enum". All fields are combined with logical 'AND'. */
["integration_type_enum_comparison_exp"]: {
	_eq?: ValueTypes["integration_type_enum"] | undefined | null,
	_in?: (ValueTypes["integration_type_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["integration_type_enum"] | undefined | null,
	_nin?: (ValueTypes["integration_type_enum"])[]
};
	/** update columns of table "integration" */
["integration_update_column"]:integration_update_column;
	/** columns and relationships of "integration_type" */
["integrationType"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "integration_type" */
["integrationType_aggregate"]: AliasType<{
	aggregate?:ValueTypes["integrationType_aggregate_fields"],
	nodes?:ValueTypes["integrationType"],
		__typename?: boolean
}>;
	/** aggregate fields of "integration_type" */
["integrationType_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["integrationType_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["integrationType_max_fields"],
	min?:ValueTypes["integrationType_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "integration_type". All fields are combined with a logical 'AND'. */
["integrationType_bool_exp"]: {
	_and?: (ValueTypes["integrationType_bool_exp"])[],
	_not?: ValueTypes["integrationType_bool_exp"] | undefined | null,
	_or?: (ValueTypes["integrationType_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "integration_type" */
["integrationType_constraint"]:integrationType_constraint;
	/** input type for inserting data into table "integration_type" */
["integrationType_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["integrationType_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["integrationType_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "integration_type" */
["integrationType_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["integrationType"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "integration_type" */
["integrationType_on_conflict"]: {
	constraint: ValueTypes["integrationType_constraint"],
	update_columns: (ValueTypes["integrationType_update_column"])[] | undefined | null,
	where?: ValueTypes["integrationType_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "integration_type". */
["integrationType_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: integrationType */
["integrationType_pk_columns_input"]: {
	name: string
};
	/** select columns of table "integration_type" */
["integrationType_select_column"]:integrationType_select_column;
	/** input type for updating data in table "integration_type" */
["integrationType_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "integration_type" */
["integrationType_update_column"]:integrationType_update_column;
	/** columns and relationships of "issue" */
["issue"]: AliasType<{
	code?:boolean,
	createdAt?:boolean,
	id?:boolean,
	isPublic?:boolean,
	isResolved?:boolean,
	/** An object relationship */
	job?:ValueTypes["job"],
	jobId?:boolean,
	message?:boolean,
requestParams?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
resolveParams?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "issue" */
["issue_aggregate"]: AliasType<{
	aggregate?:ValueTypes["issue_aggregate_fields"],
	nodes?:ValueTypes["issue"],
		__typename?: boolean
}>;
	/** aggregate fields of "issue" */
["issue_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["issue_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["issue_max_fields"],
	min?:ValueTypes["issue_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "issue" */
["issue_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["issue_max_order_by"] | undefined | null,
	min?: ValueTypes["issue_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["issue_append_input"]: {
	requestParams?: ValueTypes["jsonb"] | undefined | null,
	resolveParams?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "issue" */
["issue_arr_rel_insert_input"]: {
	data: (ValueTypes["issue_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["issue_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "issue". All fields are combined with a logical 'AND'. */
["issue_bool_exp"]: {
	_and?: (ValueTypes["issue_bool_exp"])[],
	_not?: ValueTypes["issue_bool_exp"] | undefined | null,
	_or?: (ValueTypes["issue_bool_exp"])[],
	code?: ValueTypes["String_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	isPublic?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	isResolved?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	job?: ValueTypes["job_bool_exp"] | undefined | null,
	jobId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	message?: ValueTypes["String_comparison_exp"] | undefined | null,
	requestParams?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	resolveParams?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "issue" */
["issue_constraint"]:issue_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["issue_delete_at_path_input"]: {
	requestParams?: (string)[],
	resolveParams?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["issue_delete_elem_input"]: {
	requestParams?: number | undefined | null,
	resolveParams?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["issue_delete_key_input"]: {
	requestParams?: string | undefined | null,
	resolveParams?: string | undefined | null
};
	/** input type for inserting data into table "issue" */
["issue_insert_input"]: {
	code?: string | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isPublic?: boolean | undefined | null,
	isResolved?: boolean | undefined | null,
	job?: ValueTypes["job_obj_rel_insert_input"] | undefined | null,
	jobId?: ValueTypes["uuid"] | undefined | null,
	message?: string | undefined | null,
	requestParams?: ValueTypes["jsonb"] | undefined | null,
	resolveParams?: ValueTypes["jsonb"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["issue_max_fields"]: AliasType<{
	code?:boolean,
	createdAt?:boolean,
	id?:boolean,
	jobId?:boolean,
	message?:boolean,
	teamId?:boolean,
	type?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "issue" */
["issue_max_order_by"]: {
	code?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	message?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["issue_min_fields"]: AliasType<{
	code?:boolean,
	createdAt?:boolean,
	id?:boolean,
	jobId?:boolean,
	message?:boolean,
	teamId?:boolean,
	type?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "issue" */
["issue_min_order_by"]: {
	code?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	message?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "issue" */
["issue_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["issue"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "issue" */
["issue_on_conflict"]: {
	constraint: ValueTypes["issue_constraint"],
	update_columns: (ValueTypes["issue_update_column"])[] | undefined | null,
	where?: ValueTypes["issue_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "issue". */
["issue_order_by"]: {
	code?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	isPublic?: ValueTypes["order_by"] | undefined | null,
	isResolved?: ValueTypes["order_by"] | undefined | null,
	job?: ValueTypes["job_order_by"] | undefined | null,
	jobId?: ValueTypes["order_by"] | undefined | null,
	message?: ValueTypes["order_by"] | undefined | null,
	requestParams?: ValueTypes["order_by"] | undefined | null,
	resolveParams?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: issue */
["issue_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["issue_prepend_input"]: {
	requestParams?: ValueTypes["jsonb"] | undefined | null,
	resolveParams?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "issue" */
["issue_select_column"]:issue_select_column;
	/** input type for updating data in table "issue" */
["issue_set_input"]: {
	code?: string | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isPublic?: boolean | undefined | null,
	isResolved?: boolean | undefined | null,
	jobId?: ValueTypes["uuid"] | undefined | null,
	message?: string | undefined | null,
	requestParams?: ValueTypes["jsonb"] | undefined | null,
	resolveParams?: ValueTypes["jsonb"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** update columns of table "issue" */
["issue_update_column"]:issue_update_column;
	/** columns and relationships of "job" */
["job"]: AliasType<{
	apiVersion?:boolean,
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	endedAt?:boolean,
entities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
entities_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
	id?:boolean,
	/** An object relationship */
	integration?:ValueTypes["integration"],
	integrationId?:boolean,
	integrationSdkVersion?:boolean,
	integrationVersion?:boolean,
issues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue"]],
issues_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue_aggregate"]],
	logFile?:boolean,
	logLink?:boolean,
logs?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	method?:boolean,
params?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	requestId?:boolean,
response?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	sdkVersion?:boolean,
	startedAt?:boolean,
	status?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "job" */
["job_aggregate"]: AliasType<{
	aggregate?:ValueTypes["job_aggregate_fields"],
	nodes?:ValueTypes["job"],
		__typename?: boolean
}>;
	/** aggregate fields of "job" */
["job_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["job_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["job_max_fields"],
	min?:ValueTypes["job_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "job" */
["job_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["job_max_order_by"] | undefined | null,
	min?: ValueTypes["job_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["job_append_input"]: {
	logs?: ValueTypes["jsonb"] | undefined | null,
	params?: ValueTypes["jsonb"] | undefined | null,
	response?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "job" */
["job_arr_rel_insert_input"]: {
	data: (ValueTypes["job_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["job_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "job". All fields are combined with a logical 'AND'. */
["job_bool_exp"]: {
	_and?: (ValueTypes["job_bool_exp"])[],
	_not?: ValueTypes["job_bool_exp"] | undefined | null,
	_or?: (ValueTypes["job_bool_exp"])[],
	apiVersion?: ValueTypes["String_comparison_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	endedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	entities?: ValueTypes["entity_bool_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	integration?: ValueTypes["integration_bool_exp"] | undefined | null,
	integrationId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	integrationSdkVersion?: ValueTypes["String_comparison_exp"] | undefined | null,
	integrationVersion?: ValueTypes["String_comparison_exp"] | undefined | null,
	issues?: ValueTypes["issue_bool_exp"] | undefined | null,
	logFile?: ValueTypes["String_comparison_exp"] | undefined | null,
	logLink?: ValueTypes["String_comparison_exp"] | undefined | null,
	logs?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	method?: ValueTypes["job_method_enum_comparison_exp"] | undefined | null,
	params?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	requestId?: ValueTypes["String_comparison_exp"] | undefined | null,
	response?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	sdkVersion?: ValueTypes["String_comparison_exp"] | undefined | null,
	startedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	status?: ValueTypes["job_status_enum_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "job" */
["job_constraint"]:job_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["job_delete_at_path_input"]: {
	logs?: (string)[],
	params?: (string)[],
	response?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["job_delete_elem_input"]: {
	logs?: number | undefined | null,
	params?: number | undefined | null,
	response?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["job_delete_key_input"]: {
	logs?: string | undefined | null,
	params?: string | undefined | null,
	response?: string | undefined | null
};
	/** input type for inserting data into table "job" */
["job_insert_input"]: {
	apiVersion?: string | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	endedAt?: ValueTypes["timestamptz"] | undefined | null,
	entities?: ValueTypes["entity_arr_rel_insert_input"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	integration?: ValueTypes["integration_obj_rel_insert_input"] | undefined | null,
	integrationId?: ValueTypes["uuid"] | undefined | null,
	integrationSdkVersion?: string | undefined | null,
	integrationVersion?: string | undefined | null,
	issues?: ValueTypes["issue_arr_rel_insert_input"] | undefined | null,
	logFile?: string | undefined | null,
	logLink?: string | undefined | null,
	logs?: ValueTypes["jsonb"] | undefined | null,
	method?: ValueTypes["job_method_enum"] | undefined | null,
	params?: ValueTypes["jsonb"] | undefined | null,
	requestId?: string | undefined | null,
	response?: ValueTypes["jsonb"] | undefined | null,
	sdkVersion?: string | undefined | null,
	startedAt?: ValueTypes["timestamptz"] | undefined | null,
	status?: ValueTypes["job_status_enum"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["job_max_fields"]: AliasType<{
	apiVersion?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	endedAt?:boolean,
	id?:boolean,
	integrationId?:boolean,
	integrationSdkVersion?:boolean,
	integrationVersion?:boolean,
	logFile?:boolean,
	logLink?:boolean,
	requestId?:boolean,
	sdkVersion?:boolean,
	startedAt?:boolean,
	teamId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "job" */
["job_max_order_by"]: {
	apiVersion?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	endedAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	integrationSdkVersion?: ValueTypes["order_by"] | undefined | null,
	integrationVersion?: ValueTypes["order_by"] | undefined | null,
	logFile?: ValueTypes["order_by"] | undefined | null,
	logLink?: ValueTypes["order_by"] | undefined | null,
	requestId?: ValueTypes["order_by"] | undefined | null,
	sdkVersion?: ValueTypes["order_by"] | undefined | null,
	startedAt?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	["job_method_enum"]:job_method_enum;
	/** Boolean expression to compare columns of type "job_method_enum". All fields are combined with logical 'AND'. */
["job_method_enum_comparison_exp"]: {
	_eq?: ValueTypes["job_method_enum"] | undefined | null,
	_in?: (ValueTypes["job_method_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["job_method_enum"] | undefined | null,
	_nin?: (ValueTypes["job_method_enum"])[]
};
	/** aggregate min on columns */
["job_min_fields"]: AliasType<{
	apiVersion?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	endedAt?:boolean,
	id?:boolean,
	integrationId?:boolean,
	integrationSdkVersion?:boolean,
	integrationVersion?:boolean,
	logFile?:boolean,
	logLink?:boolean,
	requestId?:boolean,
	sdkVersion?:boolean,
	startedAt?:boolean,
	teamId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "job" */
["job_min_order_by"]: {
	apiVersion?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	endedAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	integrationSdkVersion?: ValueTypes["order_by"] | undefined | null,
	integrationVersion?: ValueTypes["order_by"] | undefined | null,
	logFile?: ValueTypes["order_by"] | undefined | null,
	logLink?: ValueTypes["order_by"] | undefined | null,
	requestId?: ValueTypes["order_by"] | undefined | null,
	sdkVersion?: ValueTypes["order_by"] | undefined | null,
	startedAt?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "job" */
["job_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["job"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "job" */
["job_obj_rel_insert_input"]: {
	data: ValueTypes["job_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["job_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "job" */
["job_on_conflict"]: {
	constraint: ValueTypes["job_constraint"],
	update_columns: (ValueTypes["job_update_column"])[] | undefined | null,
	where?: ValueTypes["job_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "job". */
["job_order_by"]: {
	apiVersion?: ValueTypes["order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	endedAt?: ValueTypes["order_by"] | undefined | null,
	entities_aggregate?: ValueTypes["entity_aggregate_order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integration?: ValueTypes["integration_order_by"] | undefined | null,
	integrationId?: ValueTypes["order_by"] | undefined | null,
	integrationSdkVersion?: ValueTypes["order_by"] | undefined | null,
	integrationVersion?: ValueTypes["order_by"] | undefined | null,
	issues_aggregate?: ValueTypes["issue_aggregate_order_by"] | undefined | null,
	logFile?: ValueTypes["order_by"] | undefined | null,
	logLink?: ValueTypes["order_by"] | undefined | null,
	logs?: ValueTypes["order_by"] | undefined | null,
	method?: ValueTypes["order_by"] | undefined | null,
	params?: ValueTypes["order_by"] | undefined | null,
	requestId?: ValueTypes["order_by"] | undefined | null,
	response?: ValueTypes["order_by"] | undefined | null,
	sdkVersion?: ValueTypes["order_by"] | undefined | null,
	startedAt?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: job */
["job_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["job_prepend_input"]: {
	logs?: ValueTypes["jsonb"] | undefined | null,
	params?: ValueTypes["jsonb"] | undefined | null,
	response?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "job" */
["job_select_column"]:job_select_column;
	/** input type for updating data in table "job" */
["job_set_input"]: {
	apiVersion?: string | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	endedAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	integrationId?: ValueTypes["uuid"] | undefined | null,
	integrationSdkVersion?: string | undefined | null,
	integrationVersion?: string | undefined | null,
	logFile?: string | undefined | null,
	logLink?: string | undefined | null,
	logs?: ValueTypes["jsonb"] | undefined | null,
	method?: ValueTypes["job_method_enum"] | undefined | null,
	params?: ValueTypes["jsonb"] | undefined | null,
	requestId?: string | undefined | null,
	response?: ValueTypes["jsonb"] | undefined | null,
	sdkVersion?: string | undefined | null,
	startedAt?: ValueTypes["timestamptz"] | undefined | null,
	status?: ValueTypes["job_status_enum"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	["job_status_enum"]:job_status_enum;
	/** Boolean expression to compare columns of type "job_status_enum". All fields are combined with logical 'AND'. */
["job_status_enum_comparison_exp"]: {
	_eq?: ValueTypes["job_status_enum"] | undefined | null,
	_in?: (ValueTypes["job_status_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["job_status_enum"] | undefined | null,
	_nin?: (ValueTypes["job_status_enum"])[]
};
	/** update columns of table "job" */
["job_update_column"]:job_update_column;
	/** columns and relationships of "job_method" */
["jobMethod"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "job_method" */
["jobMethod_aggregate"]: AliasType<{
	aggregate?:ValueTypes["jobMethod_aggregate_fields"],
	nodes?:ValueTypes["jobMethod"],
		__typename?: boolean
}>;
	/** aggregate fields of "job_method" */
["jobMethod_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["jobMethod_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["jobMethod_max_fields"],
	min?:ValueTypes["jobMethod_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "job_method". All fields are combined with a logical 'AND'. */
["jobMethod_bool_exp"]: {
	_and?: (ValueTypes["jobMethod_bool_exp"])[],
	_not?: ValueTypes["jobMethod_bool_exp"] | undefined | null,
	_or?: (ValueTypes["jobMethod_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "job_method" */
["jobMethod_constraint"]:jobMethod_constraint;
	/** input type for inserting data into table "job_method" */
["jobMethod_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["jobMethod_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["jobMethod_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "job_method" */
["jobMethod_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["jobMethod"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "job_method" */
["jobMethod_on_conflict"]: {
	constraint: ValueTypes["jobMethod_constraint"],
	update_columns: (ValueTypes["jobMethod_update_column"])[] | undefined | null,
	where?: ValueTypes["jobMethod_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "job_method". */
["jobMethod_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: jobMethod */
["jobMethod_pk_columns_input"]: {
	name: string
};
	/** select columns of table "job_method" */
["jobMethod_select_column"]:jobMethod_select_column;
	/** input type for updating data in table "job_method" */
["jobMethod_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "job_method" */
["jobMethod_update_column"]:jobMethod_update_column;
	/** columns and relationships of "job_status" */
["jobStatus"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "job_status" */
["jobStatus_aggregate"]: AliasType<{
	aggregate?:ValueTypes["jobStatus_aggregate_fields"],
	nodes?:ValueTypes["jobStatus"],
		__typename?: boolean
}>;
	/** aggregate fields of "job_status" */
["jobStatus_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["jobStatus_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["jobStatus_max_fields"],
	min?:ValueTypes["jobStatus_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "job_status". All fields are combined with a logical 'AND'. */
["jobStatus_bool_exp"]: {
	_and?: (ValueTypes["jobStatus_bool_exp"])[],
	_not?: ValueTypes["jobStatus_bool_exp"] | undefined | null,
	_or?: (ValueTypes["jobStatus_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "job_status" */
["jobStatus_constraint"]:jobStatus_constraint;
	/** input type for inserting data into table "job_status" */
["jobStatus_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["jobStatus_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["jobStatus_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "job_status" */
["jobStatus_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["jobStatus"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "job_status" */
["jobStatus_on_conflict"]: {
	constraint: ValueTypes["jobStatus_constraint"],
	update_columns: (ValueTypes["jobStatus_update_column"])[] | undefined | null,
	where?: ValueTypes["jobStatus_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "job_status". */
["jobStatus_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: jobStatus */
["jobStatus_pk_columns_input"]: {
	name: string
};
	/** select columns of table "job_status" */
["jobStatus_select_column"]:jobStatus_select_column;
	/** input type for updating data in table "job_status" */
["jobStatus_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "job_status" */
["jobStatus_update_column"]:jobStatus_update_column;
	["jsonb"]:unknown;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
	/** is the column contained in the given json value */
	_contained_in?: ValueTypes["jsonb"] | undefined | null,
	/** does the column contain the given json value at the top level */
	_contains?: ValueTypes["jsonb"] | undefined | null,
	_eq?: ValueTypes["jsonb"] | undefined | null,
	_gt?: ValueTypes["jsonb"] | undefined | null,
	_gte?: ValueTypes["jsonb"] | undefined | null,
	/** does the string exist as a top-level key in the column */
	_has_key?: string | undefined | null,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: (string)[],
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: (string)[],
	_in?: (ValueTypes["jsonb"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["jsonb"] | undefined | null,
	_lte?: ValueTypes["jsonb"] | undefined | null,
	_neq?: ValueTypes["jsonb"] | undefined | null,
	_nin?: (ValueTypes["jsonb"])[]
};
	/** columns and relationships of "line" */
["line"]: AliasType<{
	/** An object relationship */
	booking?:ValueTypes["booking"],
	bookingId?:boolean,
	centTotal?:boolean,
	classification?:boolean,
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
enhancementLines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
enhancementLines_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
	/** An object relationship */
	enhancingLine?:ValueTypes["line"],
	enhancingLineId?:boolean,
	id?:boolean,
	invoiceStatus?:boolean,
	isEnhanced?:boolean,
metadata?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	originCentTotal?:boolean,
	originCurrency?:boolean,
	originExchangeRate?:boolean,
	/** An object relationship */
	payment?:ValueTypes["payment"],
	paymentId?:boolean,
	subclassification?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "line" */
["line_aggregate"]: AliasType<{
	aggregate?:ValueTypes["line_aggregate_fields"],
	nodes?:ValueTypes["line"],
		__typename?: boolean
}>;
	/** aggregate fields of "line" */
["line_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["line_avg_fields"],
count?: [{	columns?: (ValueTypes["line_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["line_max_fields"],
	min?:ValueTypes["line_min_fields"],
	stddev?:ValueTypes["line_stddev_fields"],
	stddev_pop?:ValueTypes["line_stddev_pop_fields"],
	stddev_samp?:ValueTypes["line_stddev_samp_fields"],
	sum?:ValueTypes["line_sum_fields"],
	var_pop?:ValueTypes["line_var_pop_fields"],
	var_samp?:ValueTypes["line_var_samp_fields"],
	variance?:ValueTypes["line_variance_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "line" */
["line_aggregate_order_by"]: {
	avg?: ValueTypes["line_avg_order_by"] | undefined | null,
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["line_max_order_by"] | undefined | null,
	min?: ValueTypes["line_min_order_by"] | undefined | null,
	stddev?: ValueTypes["line_stddev_order_by"] | undefined | null,
	stddev_pop?: ValueTypes["line_stddev_pop_order_by"] | undefined | null,
	stddev_samp?: ValueTypes["line_stddev_samp_order_by"] | undefined | null,
	sum?: ValueTypes["line_sum_order_by"] | undefined | null,
	var_pop?: ValueTypes["line_var_pop_order_by"] | undefined | null,
	var_samp?: ValueTypes["line_var_samp_order_by"] | undefined | null,
	variance?: ValueTypes["line_variance_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["line_append_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "line" */
["line_arr_rel_insert_input"]: {
	data: (ValueTypes["line_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["line_on_conflict"] | undefined | null
};
	/** aggregate avg on columns */
["line_avg_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by avg() on columns of table "line" */
["line_avg_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** Boolean expression to filter rows from the table "line". All fields are combined with a logical 'AND'. */
["line_bool_exp"]: {
	_and?: (ValueTypes["line_bool_exp"])[],
	_not?: ValueTypes["line_bool_exp"] | undefined | null,
	_or?: (ValueTypes["line_bool_exp"])[],
	booking?: ValueTypes["booking_bool_exp"] | undefined | null,
	bookingId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	centTotal?: ValueTypes["Int_comparison_exp"] | undefined | null,
	classification?: ValueTypes["classification_enum_comparison_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	description?: ValueTypes["String_comparison_exp"] | undefined | null,
	enhancementLines?: ValueTypes["line_bool_exp"] | undefined | null,
	enhancingLine?: ValueTypes["line_bool_exp"] | undefined | null,
	enhancingLineId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	invoiceStatus?: ValueTypes["String_comparison_exp"] | undefined | null,
	isEnhanced?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	metadata?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	originCentTotal?: ValueTypes["Int_comparison_exp"] | undefined | null,
	originCurrency?: ValueTypes["String_comparison_exp"] | undefined | null,
	originExchangeRate?: ValueTypes["numeric_comparison_exp"] | undefined | null,
	payment?: ValueTypes["payment_bool_exp"] | undefined | null,
	paymentId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	subclassification?: ValueTypes["subclassification_enum_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	unitId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "line" */
["line_constraint"]:line_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["line_delete_at_path_input"]: {
	metadata?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["line_delete_elem_input"]: {
	metadata?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["line_delete_key_input"]: {
	metadata?: string | undefined | null
};
	/** input type for incrementing numeric columns in table "line" */
["line_inc_input"]: {
	centTotal?: number | undefined | null,
	originCentTotal?: number | undefined | null,
	originExchangeRate?: ValueTypes["numeric"] | undefined | null
};
	/** input type for inserting data into table "line" */
["line_insert_input"]: {
	booking?: ValueTypes["booking_obj_rel_insert_input"] | undefined | null,
	bookingId?: ValueTypes["uuid"] | undefined | null,
	centTotal?: number | undefined | null,
	classification?: ValueTypes["classification_enum"] | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	description?: string | undefined | null,
	enhancementLines?: ValueTypes["line_arr_rel_insert_input"] | undefined | null,
	enhancingLine?: ValueTypes["line_obj_rel_insert_input"] | undefined | null,
	enhancingLineId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	invoiceStatus?: string | undefined | null,
	isEnhanced?: boolean | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	originCentTotal?: number | undefined | null,
	originCurrency?: string | undefined | null,
	originExchangeRate?: ValueTypes["numeric"] | undefined | null,
	payment?: ValueTypes["payment_obj_rel_insert_input"] | undefined | null,
	paymentId?: ValueTypes["uuid"] | undefined | null,
	subclassification?: ValueTypes["subclassification_enum"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["line_max_fields"]: AliasType<{
	bookingId?:boolean,
	centTotal?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	enhancingLineId?:boolean,
	id?:boolean,
	invoiceStatus?:boolean,
	originCentTotal?:boolean,
	originCurrency?:boolean,
	originExchangeRate?:boolean,
	paymentId?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "line" */
["line_max_order_by"]: {
	bookingId?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	enhancingLineId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	invoiceStatus?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originCurrency?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["line_min_fields"]: AliasType<{
	bookingId?:boolean,
	centTotal?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	enhancingLineId?:boolean,
	id?:boolean,
	invoiceStatus?:boolean,
	originCentTotal?:boolean,
	originCurrency?:boolean,
	originExchangeRate?:boolean,
	paymentId?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "line" */
["line_min_order_by"]: {
	bookingId?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	enhancingLineId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	invoiceStatus?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originCurrency?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "line" */
["line_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["line"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "line" */
["line_obj_rel_insert_input"]: {
	data: ValueTypes["line_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["line_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "line" */
["line_on_conflict"]: {
	constraint: ValueTypes["line_constraint"],
	update_columns: (ValueTypes["line_update_column"])[] | undefined | null,
	where?: ValueTypes["line_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "line". */
["line_order_by"]: {
	booking?: ValueTypes["booking_order_by"] | undefined | null,
	bookingId?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	classification?: ValueTypes["order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	enhancementLines_aggregate?: ValueTypes["line_aggregate_order_by"] | undefined | null,
	enhancingLine?: ValueTypes["line_order_by"] | undefined | null,
	enhancingLineId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	invoiceStatus?: ValueTypes["order_by"] | undefined | null,
	isEnhanced?: ValueTypes["order_by"] | undefined | null,
	metadata?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originCurrency?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null,
	payment?: ValueTypes["payment_order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	subclassification?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: line */
["line_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["line_prepend_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "line" */
["line_select_column"]:line_select_column;
	/** input type for updating data in table "line" */
["line_set_input"]: {
	bookingId?: ValueTypes["uuid"] | undefined | null,
	centTotal?: number | undefined | null,
	classification?: ValueTypes["classification_enum"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	description?: string | undefined | null,
	enhancingLineId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	invoiceStatus?: string | undefined | null,
	isEnhanced?: boolean | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	originCentTotal?: number | undefined | null,
	originCurrency?: string | undefined | null,
	originExchangeRate?: ValueTypes["numeric"] | undefined | null,
	paymentId?: ValueTypes["uuid"] | undefined | null,
	subclassification?: ValueTypes["subclassification_enum"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate stddev on columns */
["line_stddev_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by stddev() on columns of table "line" */
["line_stddev_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_pop on columns */
["line_stddev_pop_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_pop() on columns of table "line" */
["line_stddev_pop_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_samp on columns */
["line_stddev_samp_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_samp() on columns of table "line" */
["line_stddev_samp_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate sum on columns */
["line_sum_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by sum() on columns of table "line" */
["line_sum_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** update columns of table "line" */
["line_update_column"]:line_update_column;
	/** aggregate var_pop on columns */
["line_var_pop_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by var_pop() on columns of table "line" */
["line_var_pop_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate var_samp on columns */
["line_var_samp_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by var_samp() on columns of table "line" */
["line_var_samp_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate variance on columns */
["line_variance_fields"]: AliasType<{
	centTotal?:boolean,
	originCentTotal?:boolean,
	originExchangeRate?:boolean,
		__typename?: boolean
}>;
	/** order by variance() on columns of table "line" */
["line_variance_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null,
	originCentTotal?: ValueTypes["order_by"] | undefined | null,
	originExchangeRate?: ValueTypes["order_by"] | undefined | null
};
	/** columns and relationships of "metric" */
["metric"]: AliasType<{
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	ensuedAt?:boolean,
	id?:boolean,
metadata?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	text?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
	value?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "metric" */
["metric_aggregate"]: AliasType<{
	aggregate?:ValueTypes["metric_aggregate_fields"],
	nodes?:ValueTypes["metric"],
		__typename?: boolean
}>;
	/** aggregate fields of "metric" */
["metric_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["metric_avg_fields"],
count?: [{	columns?: (ValueTypes["metric_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["metric_max_fields"],
	min?:ValueTypes["metric_min_fields"],
	stddev?:ValueTypes["metric_stddev_fields"],
	stddev_pop?:ValueTypes["metric_stddev_pop_fields"],
	stddev_samp?:ValueTypes["metric_stddev_samp_fields"],
	sum?:ValueTypes["metric_sum_fields"],
	var_pop?:ValueTypes["metric_var_pop_fields"],
	var_samp?:ValueTypes["metric_var_samp_fields"],
	variance?:ValueTypes["metric_variance_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "metric" */
["metric_aggregate_order_by"]: {
	avg?: ValueTypes["metric_avg_order_by"] | undefined | null,
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["metric_max_order_by"] | undefined | null,
	min?: ValueTypes["metric_min_order_by"] | undefined | null,
	stddev?: ValueTypes["metric_stddev_order_by"] | undefined | null,
	stddev_pop?: ValueTypes["metric_stddev_pop_order_by"] | undefined | null,
	stddev_samp?: ValueTypes["metric_stddev_samp_order_by"] | undefined | null,
	sum?: ValueTypes["metric_sum_order_by"] | undefined | null,
	var_pop?: ValueTypes["metric_var_pop_order_by"] | undefined | null,
	var_samp?: ValueTypes["metric_var_samp_order_by"] | undefined | null,
	variance?: ValueTypes["metric_variance_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["metric_append_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "metric" */
["metric_arr_rel_insert_input"]: {
	data: (ValueTypes["metric_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["metric_on_conflict"] | undefined | null
};
	/** aggregate avg on columns */
["metric_avg_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by avg() on columns of table "metric" */
["metric_avg_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** Boolean expression to filter rows from the table "metric". All fields are combined with a logical 'AND'. */
["metric_bool_exp"]: {
	_and?: (ValueTypes["metric_bool_exp"])[],
	_not?: ValueTypes["metric_bool_exp"] | undefined | null,
	_or?: (ValueTypes["metric_bool_exp"])[],
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	ensuedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	metadata?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	text?: ValueTypes["String_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	unitId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	value?: ValueTypes["float8_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "metric" */
["metric_constraint"]:metric_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["metric_delete_at_path_input"]: {
	metadata?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["metric_delete_elem_input"]: {
	metadata?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["metric_delete_key_input"]: {
	metadata?: string | undefined | null
};
	/** input type for incrementing numeric columns in table "metric" */
["metric_inc_input"]: {
	value?: ValueTypes["float8"] | undefined | null
};
	/** input type for inserting data into table "metric" */
["metric_insert_input"]: {
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	ensuedAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	text?: string | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null,
	value?: ValueTypes["float8"] | undefined | null
};
	/** aggregate max on columns */
["metric_max_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	ensuedAt?:boolean,
	id?:boolean,
	teamId?:boolean,
	text?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
	value?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "metric" */
["metric_max_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	ensuedAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	text?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["metric_min_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	ensuedAt?:boolean,
	id?:boolean,
	teamId?:boolean,
	text?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
	value?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "metric" */
["metric_min_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	ensuedAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	text?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	value?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "metric" */
["metric_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["metric"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "metric" */
["metric_on_conflict"]: {
	constraint: ValueTypes["metric_constraint"],
	update_columns: (ValueTypes["metric_update_column"])[] | undefined | null,
	where?: ValueTypes["metric_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "metric". */
["metric_order_by"]: {
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	ensuedAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	metadata?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	text?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	value?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: metric */
["metric_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["metric_prepend_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "metric" */
["metric_select_column"]:metric_select_column;
	/** input type for updating data in table "metric" */
["metric_set_input"]: {
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	ensuedAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	text?: string | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null,
	value?: ValueTypes["float8"] | undefined | null
};
	/** aggregate stddev on columns */
["metric_stddev_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by stddev() on columns of table "metric" */
["metric_stddev_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_pop on columns */
["metric_stddev_pop_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_pop() on columns of table "metric" */
["metric_stddev_pop_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_samp on columns */
["metric_stddev_samp_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_samp() on columns of table "metric" */
["metric_stddev_samp_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate sum on columns */
["metric_sum_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by sum() on columns of table "metric" */
["metric_sum_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** update columns of table "metric" */
["metric_update_column"]:metric_update_column;
	/** aggregate var_pop on columns */
["metric_var_pop_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by var_pop() on columns of table "metric" */
["metric_var_pop_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate var_samp on columns */
["metric_var_samp_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by var_samp() on columns of table "metric" */
["metric_var_samp_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate variance on columns */
["metric_variance_fields"]: AliasType<{
	value?:boolean,
		__typename?: boolean
}>;
	/** order by variance() on columns of table "metric" */
["metric_variance_order_by"]: {
	value?: ValueTypes["order_by"] | undefined | null
};
	/** mutation root */
["mutation_root"]: AliasType<{
deleteBooking?: [{	id: ValueTypes["uuid"]},ValueTypes["booking"]],
deleteBookingStatus?: [{	name: string},ValueTypes["bookingStatus"]],
deleteBookingStatuses?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["bookingStatus_bool_exp"]},ValueTypes["bookingStatus_mutation_response"]],
deleteBookings?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["booking_bool_exp"]},ValueTypes["booking_mutation_response"]],
deleteClassification?: [{	name: string},ValueTypes["classification"]],
deleteClassifications?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["classification_bool_exp"]},ValueTypes["classification_mutation_response"]],
deleteConnection?: [{	id: ValueTypes["uuid"]},ValueTypes["connection"]],
deleteConnections?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["connection_bool_exp"]},ValueTypes["connection_mutation_response"]],
deleteCurrencies?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["currency_bool_exp"]},ValueTypes["currency_mutation_response"]],
deleteCurrency?: [{	name: string},ValueTypes["currency"]],
deleteEntities?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["entity_bool_exp"]},ValueTypes["entity_mutation_response"]],
deleteEntity?: [{	id: ValueTypes["uuid"]},ValueTypes["entity"]],
deleteEntityStatus?: [{	name: string},ValueTypes["entityStatus"]],
deleteEntityStatuses?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["entityStatus_bool_exp"]},ValueTypes["entityStatus_mutation_response"]],
deleteIntegration?: [{	id: ValueTypes["uuid"]},ValueTypes["integration"]],
deleteIntegrationType?: [{	name: string},ValueTypes["integrationType"]],
deleteIntegrationTypes?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["integrationType_bool_exp"]},ValueTypes["integrationType_mutation_response"]],
deleteIntegrations?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["integration_bool_exp"]},ValueTypes["integration_mutation_response"]],
deleteIssue?: [{	id: ValueTypes["uuid"]},ValueTypes["issue"]],
deleteIssues?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["issue_bool_exp"]},ValueTypes["issue_mutation_response"]],
deleteJob?: [{	id: ValueTypes["uuid"]},ValueTypes["job"]],
deleteJobMethod?: [{	name: string},ValueTypes["jobMethod"]],
deleteJobMethods?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["jobMethod_bool_exp"]},ValueTypes["jobMethod_mutation_response"]],
deleteJobStatus?: [{	name: string},ValueTypes["jobStatus"]],
deleteJobStatuses?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["jobStatus_bool_exp"]},ValueTypes["jobStatus_mutation_response"]],
deleteJobs?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["job_bool_exp"]},ValueTypes["job_mutation_response"]],
deleteLine?: [{	id: ValueTypes["uuid"]},ValueTypes["line"]],
deleteLines?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["line_bool_exp"]},ValueTypes["line_mutation_response"]],
deleteMetric?: [{	id: ValueTypes["uuid"]},ValueTypes["metric"]],
deleteMetrics?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["metric_bool_exp"]},ValueTypes["metric_mutation_response"]],
deleteNormalizedType?: [{	name: string},ValueTypes["normalizedType"]],
deleteNormalizedTypes?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["normalizedType_bool_exp"]},ValueTypes["normalizedType_mutation_response"]],
deletePayment?: [{	id: ValueTypes["uuid"]},ValueTypes["payment"]],
deletePaymentStatus?: [{	name: string},ValueTypes["paymentStatus"]],
deletePaymentStatuses?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["paymentStatus_bool_exp"]},ValueTypes["paymentStatus_mutation_response"]],
deletePaymentType?: [{	name: string},ValueTypes["paymentType"]],
deletePaymentTypes?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["paymentType_bool_exp"]},ValueTypes["paymentType_mutation_response"]],
deletePayments?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["payment_bool_exp"]},ValueTypes["payment_mutation_response"]],
deleteSubclassification?: [{	name: string},ValueTypes["subclassification"]],
deleteSubclassifications?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["subclassification_bool_exp"]},ValueTypes["subclassification_mutation_response"]],
deleteTag?: [{	id: ValueTypes["uuid"]},ValueTypes["tag"]],
deleteTags?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["tag_bool_exp"]},ValueTypes["tag_mutation_response"]],
deleteTeam?: [{	id: ValueTypes["uuid"]},ValueTypes["team"]],
deleteTeamUser?: [{	id: ValueTypes["uuid"]},ValueTypes["teamUser"]],
deleteTeamUsers?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["teamUser_bool_exp"]},ValueTypes["teamUser_mutation_response"]],
deleteTeams?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["team_bool_exp"]},ValueTypes["team_mutation_response"]],
deleteUnit?: [{	id: ValueTypes["uuid"]},ValueTypes["unit"]],
deleteUnits?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["unit_bool_exp"]},ValueTypes["unit_mutation_response"]],
deleteUser?: [{	id: ValueTypes["uuid"]},ValueTypes["user"]],
deleteUserStatus?: [{	name: string},ValueTypes["userStatus"]],
deleteUserStatuses?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["userStatus_bool_exp"]},ValueTypes["userStatus_mutation_response"]],
deleteUsers?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
deleteWebhook?: [{	id: ValueTypes["uuid"]},ValueTypes["webhook"]],
deleteWebhooks?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["webhook_bool_exp"]},ValueTypes["webhook_mutation_response"]],
delete_booking_channel?: [{	/** filter the rows which have to be deleted */
	where: ValueTypes["booking_channel_bool_exp"]},ValueTypes["booking_channel_mutation_response"]],
delete_booking_channel_by_pk?: [{	name: string},ValueTypes["booking_channel"]],
insertBooking?: [{	/** the row to be inserted */
	object: ValueTypes["booking_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["booking_on_conflict"] | undefined | null},ValueTypes["booking"]],
insertBookingStatus?: [{	/** the row to be inserted */
	object: ValueTypes["bookingStatus_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["bookingStatus_on_conflict"] | undefined | null},ValueTypes["bookingStatus"]],
insertBookingStatuses?: [{	/** the rows to be inserted */
	objects: (ValueTypes["bookingStatus_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["bookingStatus_on_conflict"] | undefined | null},ValueTypes["bookingStatus_mutation_response"]],
insertBookings?: [{	/** the rows to be inserted */
	objects: (ValueTypes["booking_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["booking_on_conflict"] | undefined | null},ValueTypes["booking_mutation_response"]],
insertClassification?: [{	/** the row to be inserted */
	object: ValueTypes["classification_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["classification_on_conflict"] | undefined | null},ValueTypes["classification"]],
insertClassifications?: [{	/** the rows to be inserted */
	objects: (ValueTypes["classification_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["classification_on_conflict"] | undefined | null},ValueTypes["classification_mutation_response"]],
insertConnection?: [{	/** the row to be inserted */
	object: ValueTypes["connection_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["connection_on_conflict"] | undefined | null},ValueTypes["connection"]],
insertConnections?: [{	/** the rows to be inserted */
	objects: (ValueTypes["connection_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["connection_on_conflict"] | undefined | null},ValueTypes["connection_mutation_response"]],
insertCurrencies?: [{	/** the rows to be inserted */
	objects: (ValueTypes["currency_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["currency_on_conflict"] | undefined | null},ValueTypes["currency_mutation_response"]],
insertCurrency?: [{	/** the row to be inserted */
	object: ValueTypes["currency_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["currency_on_conflict"] | undefined | null},ValueTypes["currency"]],
insertEntities?: [{	/** the rows to be inserted */
	objects: (ValueTypes["entity_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["entity_on_conflict"] | undefined | null},ValueTypes["entity_mutation_response"]],
insertEntity?: [{	/** the row to be inserted */
	object: ValueTypes["entity_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["entity_on_conflict"] | undefined | null},ValueTypes["entity"]],
insertEntityStatus?: [{	/** the row to be inserted */
	object: ValueTypes["entityStatus_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["entityStatus_on_conflict"] | undefined | null},ValueTypes["entityStatus"]],
insertEntityStatuses?: [{	/** the rows to be inserted */
	objects: (ValueTypes["entityStatus_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["entityStatus_on_conflict"] | undefined | null},ValueTypes["entityStatus_mutation_response"]],
insertIntegration?: [{	/** the row to be inserted */
	object: ValueTypes["integration_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["integration_on_conflict"] | undefined | null},ValueTypes["integration"]],
insertIntegrationType?: [{	/** the row to be inserted */
	object: ValueTypes["integrationType_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["integrationType_on_conflict"] | undefined | null},ValueTypes["integrationType"]],
insertIntegrationTypes?: [{	/** the rows to be inserted */
	objects: (ValueTypes["integrationType_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["integrationType_on_conflict"] | undefined | null},ValueTypes["integrationType_mutation_response"]],
insertIntegrations?: [{	/** the rows to be inserted */
	objects: (ValueTypes["integration_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["integration_on_conflict"] | undefined | null},ValueTypes["integration_mutation_response"]],
insertIssue?: [{	/** the row to be inserted */
	object: ValueTypes["issue_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["issue_on_conflict"] | undefined | null},ValueTypes["issue"]],
insertIssues?: [{	/** the rows to be inserted */
	objects: (ValueTypes["issue_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["issue_on_conflict"] | undefined | null},ValueTypes["issue_mutation_response"]],
insertJob?: [{	/** the row to be inserted */
	object: ValueTypes["job_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["job_on_conflict"] | undefined | null},ValueTypes["job"]],
insertJobMethod?: [{	/** the row to be inserted */
	object: ValueTypes["jobMethod_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["jobMethod_on_conflict"] | undefined | null},ValueTypes["jobMethod"]],
insertJobMethods?: [{	/** the rows to be inserted */
	objects: (ValueTypes["jobMethod_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["jobMethod_on_conflict"] | undefined | null},ValueTypes["jobMethod_mutation_response"]],
insertJobStatus?: [{	/** the row to be inserted */
	object: ValueTypes["jobStatus_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["jobStatus_on_conflict"] | undefined | null},ValueTypes["jobStatus"]],
insertJobStatuses?: [{	/** the rows to be inserted */
	objects: (ValueTypes["jobStatus_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["jobStatus_on_conflict"] | undefined | null},ValueTypes["jobStatus_mutation_response"]],
insertJobs?: [{	/** the rows to be inserted */
	objects: (ValueTypes["job_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["job_on_conflict"] | undefined | null},ValueTypes["job_mutation_response"]],
insertLine?: [{	/** the row to be inserted */
	object: ValueTypes["line_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["line_on_conflict"] | undefined | null},ValueTypes["line"]],
insertLines?: [{	/** the rows to be inserted */
	objects: (ValueTypes["line_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["line_on_conflict"] | undefined | null},ValueTypes["line_mutation_response"]],
insertMetric?: [{	/** the row to be inserted */
	object: ValueTypes["metric_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["metric_on_conflict"] | undefined | null},ValueTypes["metric"]],
insertMetrics?: [{	/** the rows to be inserted */
	objects: (ValueTypes["metric_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["metric_on_conflict"] | undefined | null},ValueTypes["metric_mutation_response"]],
insertNormalizedType?: [{	/** the row to be inserted */
	object: ValueTypes["normalizedType_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["normalizedType_on_conflict"] | undefined | null},ValueTypes["normalizedType"]],
insertNormalizedTypes?: [{	/** the rows to be inserted */
	objects: (ValueTypes["normalizedType_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["normalizedType_on_conflict"] | undefined | null},ValueTypes["normalizedType_mutation_response"]],
insertPayment?: [{	/** the row to be inserted */
	object: ValueTypes["payment_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["payment_on_conflict"] | undefined | null},ValueTypes["payment"]],
insertPaymentStatus?: [{	/** the row to be inserted */
	object: ValueTypes["paymentStatus_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["paymentStatus_on_conflict"] | undefined | null},ValueTypes["paymentStatus"]],
insertPaymentStatuses?: [{	/** the rows to be inserted */
	objects: (ValueTypes["paymentStatus_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["paymentStatus_on_conflict"] | undefined | null},ValueTypes["paymentStatus_mutation_response"]],
insertPaymentType?: [{	/** the row to be inserted */
	object: ValueTypes["paymentType_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["paymentType_on_conflict"] | undefined | null},ValueTypes["paymentType"]],
insertPaymentTypes?: [{	/** the rows to be inserted */
	objects: (ValueTypes["paymentType_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["paymentType_on_conflict"] | undefined | null},ValueTypes["paymentType_mutation_response"]],
insertPayments?: [{	/** the rows to be inserted */
	objects: (ValueTypes["payment_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["payment_on_conflict"] | undefined | null},ValueTypes["payment_mutation_response"]],
insertSubclassification?: [{	/** the row to be inserted */
	object: ValueTypes["subclassification_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["subclassification_on_conflict"] | undefined | null},ValueTypes["subclassification"]],
insertSubclassifications?: [{	/** the rows to be inserted */
	objects: (ValueTypes["subclassification_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["subclassification_on_conflict"] | undefined | null},ValueTypes["subclassification_mutation_response"]],
insertTag?: [{	/** the row to be inserted */
	object: ValueTypes["tag_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["tag_on_conflict"] | undefined | null},ValueTypes["tag"]],
insertTags?: [{	/** the rows to be inserted */
	objects: (ValueTypes["tag_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["tag_on_conflict"] | undefined | null},ValueTypes["tag_mutation_response"]],
insertTeam?: [{	/** the row to be inserted */
	object: ValueTypes["team_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["team_on_conflict"] | undefined | null},ValueTypes["team"]],
insertTeamUser?: [{	/** the row to be inserted */
	object: ValueTypes["teamUser_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["teamUser_on_conflict"] | undefined | null},ValueTypes["teamUser"]],
insertTeamUsers?: [{	/** the rows to be inserted */
	objects: (ValueTypes["teamUser_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["teamUser_on_conflict"] | undefined | null},ValueTypes["teamUser_mutation_response"]],
insertTeams?: [{	/** the rows to be inserted */
	objects: (ValueTypes["team_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["team_on_conflict"] | undefined | null},ValueTypes["team_mutation_response"]],
insertUnit?: [{	/** the row to be inserted */
	object: ValueTypes["unit_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["unit_on_conflict"] | undefined | null},ValueTypes["unit"]],
insertUnits?: [{	/** the rows to be inserted */
	objects: (ValueTypes["unit_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["unit_on_conflict"] | undefined | null},ValueTypes["unit_mutation_response"]],
insertUser?: [{	/** the row to be inserted */
	object: ValueTypes["user_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["user_on_conflict"] | undefined | null},ValueTypes["user"]],
insertUserStatus?: [{	/** the row to be inserted */
	object: ValueTypes["userStatus_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["userStatus_on_conflict"] | undefined | null},ValueTypes["userStatus"]],
insertUserStatuses?: [{	/** the rows to be inserted */
	objects: (ValueTypes["userStatus_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["userStatus_on_conflict"] | undefined | null},ValueTypes["userStatus_mutation_response"]],
insertUsers?: [{	/** the rows to be inserted */
	objects: (ValueTypes["user_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["user_on_conflict"] | undefined | null},ValueTypes["user_mutation_response"]],
insertWebhook?: [{	/** the row to be inserted */
	object: ValueTypes["webhook_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["webhook_on_conflict"] | undefined | null},ValueTypes["webhook"]],
insertWebhooks?: [{	/** the rows to be inserted */
	objects: (ValueTypes["webhook_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["webhook_on_conflict"] | undefined | null},ValueTypes["webhook_mutation_response"]],
insert_booking_channel?: [{	/** the rows to be inserted */
	objects: (ValueTypes["booking_channel_insert_input"])[] | undefined | null,	/** on conflict condition */
	on_conflict?: ValueTypes["booking_channel_on_conflict"] | undefined | null},ValueTypes["booking_channel_mutation_response"]],
insert_booking_channel_one?: [{	/** the row to be inserted */
	object: ValueTypes["booking_channel_insert_input"],	/** on conflict condition */
	on_conflict?: ValueTypes["booking_channel_on_conflict"] | undefined | null},ValueTypes["booking_channel"]],
updateBooking?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["booking_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["booking_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["booking_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["booking_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["booking_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["booking_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["booking_set_input"] | undefined | null,	pk_columns: ValueTypes["booking_pk_columns_input"]},ValueTypes["booking"]],
updateBookingStatus?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["bookingStatus_set_input"] | undefined | null,	pk_columns: ValueTypes["bookingStatus_pk_columns_input"]},ValueTypes["bookingStatus"]],
updateBookingStatuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["bookingStatus_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["bookingStatus_bool_exp"]},ValueTypes["bookingStatus_mutation_response"]],
updateBookings?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["booking_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["booking_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["booking_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["booking_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["booking_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["booking_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["booking_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["booking_bool_exp"]},ValueTypes["booking_mutation_response"]],
updateClassification?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["classification_set_input"] | undefined | null,	pk_columns: ValueTypes["classification_pk_columns_input"]},ValueTypes["classification"]],
updateClassifications?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["classification_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["classification_bool_exp"]},ValueTypes["classification_mutation_response"]],
updateConnection?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["connection_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["connection_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["connection_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["connection_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["connection_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["connection_set_input"] | undefined | null,	pk_columns: ValueTypes["connection_pk_columns_input"]},ValueTypes["connection"]],
updateConnections?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["connection_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["connection_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["connection_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["connection_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["connection_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["connection_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["connection_bool_exp"]},ValueTypes["connection_mutation_response"]],
updateCurrencies?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["currency_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["currency_bool_exp"]},ValueTypes["currency_mutation_response"]],
updateCurrency?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["currency_set_input"] | undefined | null,	pk_columns: ValueTypes["currency_pk_columns_input"]},ValueTypes["currency"]],
updateEntities?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["entity_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["entity_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["entity_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["entity_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["entity_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["entity_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["entity_bool_exp"]},ValueTypes["entity_mutation_response"]],
updateEntity?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["entity_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["entity_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["entity_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["entity_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["entity_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["entity_set_input"] | undefined | null,	pk_columns: ValueTypes["entity_pk_columns_input"]},ValueTypes["entity"]],
updateEntityStatus?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["entityStatus_set_input"] | undefined | null,	pk_columns: ValueTypes["entityStatus_pk_columns_input"]},ValueTypes["entityStatus"]],
updateEntityStatuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["entityStatus_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["entityStatus_bool_exp"]},ValueTypes["entityStatus_mutation_response"]],
updateIntegration?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["integration_set_input"] | undefined | null,	pk_columns: ValueTypes["integration_pk_columns_input"]},ValueTypes["integration"]],
updateIntegrationType?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["integrationType_set_input"] | undefined | null,	pk_columns: ValueTypes["integrationType_pk_columns_input"]},ValueTypes["integrationType"]],
updateIntegrationTypes?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["integrationType_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["integrationType_bool_exp"]},ValueTypes["integrationType_mutation_response"]],
updateIntegrations?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["integration_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["integration_bool_exp"]},ValueTypes["integration_mutation_response"]],
updateIssue?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["issue_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["issue_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["issue_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["issue_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["issue_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["issue_set_input"] | undefined | null,	pk_columns: ValueTypes["issue_pk_columns_input"]},ValueTypes["issue"]],
updateIssues?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["issue_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["issue_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["issue_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["issue_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["issue_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["issue_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["issue_bool_exp"]},ValueTypes["issue_mutation_response"]],
updateJob?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["job_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["job_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["job_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["job_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["job_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["job_set_input"] | undefined | null,	pk_columns: ValueTypes["job_pk_columns_input"]},ValueTypes["job"]],
updateJobMethod?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["jobMethod_set_input"] | undefined | null,	pk_columns: ValueTypes["jobMethod_pk_columns_input"]},ValueTypes["jobMethod"]],
updateJobMethods?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["jobMethod_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["jobMethod_bool_exp"]},ValueTypes["jobMethod_mutation_response"]],
updateJobStatus?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["jobStatus_set_input"] | undefined | null,	pk_columns: ValueTypes["jobStatus_pk_columns_input"]},ValueTypes["jobStatus"]],
updateJobStatuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["jobStatus_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["jobStatus_bool_exp"]},ValueTypes["jobStatus_mutation_response"]],
updateJobs?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["job_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["job_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["job_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["job_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["job_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["job_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["job_bool_exp"]},ValueTypes["job_mutation_response"]],
updateLine?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["line_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["line_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["line_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["line_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["line_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["line_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["line_set_input"] | undefined | null,	pk_columns: ValueTypes["line_pk_columns_input"]},ValueTypes["line"]],
updateLines?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["line_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["line_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["line_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["line_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["line_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["line_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["line_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["line_bool_exp"]},ValueTypes["line_mutation_response"]],
updateMetric?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["metric_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["metric_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["metric_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["metric_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["metric_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["metric_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["metric_set_input"] | undefined | null,	pk_columns: ValueTypes["metric_pk_columns_input"]},ValueTypes["metric"]],
updateMetrics?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["metric_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["metric_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["metric_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["metric_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["metric_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["metric_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["metric_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["metric_bool_exp"]},ValueTypes["metric_mutation_response"]],
updateNormalizedType?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["normalizedType_set_input"] | undefined | null,	pk_columns: ValueTypes["normalizedType_pk_columns_input"]},ValueTypes["normalizedType"]],
updateNormalizedTypes?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["normalizedType_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["normalizedType_bool_exp"]},ValueTypes["normalizedType_mutation_response"]],
updatePayment?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["payment_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["payment_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["payment_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["payment_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["payment_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["payment_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["payment_set_input"] | undefined | null,	pk_columns: ValueTypes["payment_pk_columns_input"]},ValueTypes["payment"]],
updatePaymentStatus?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["paymentStatus_set_input"] | undefined | null,	pk_columns: ValueTypes["paymentStatus_pk_columns_input"]},ValueTypes["paymentStatus"]],
updatePaymentStatuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["paymentStatus_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["paymentStatus_bool_exp"]},ValueTypes["paymentStatus_mutation_response"]],
updatePaymentType?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["paymentType_set_input"] | undefined | null,	pk_columns: ValueTypes["paymentType_pk_columns_input"]},ValueTypes["paymentType"]],
updatePaymentTypes?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["paymentType_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["paymentType_bool_exp"]},ValueTypes["paymentType_mutation_response"]],
updatePayments?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["payment_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["payment_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["payment_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["payment_delete_key_input"] | undefined | null,	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["payment_inc_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["payment_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["payment_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["payment_bool_exp"]},ValueTypes["payment_mutation_response"]],
updateSubclassification?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["subclassification_set_input"] | undefined | null,	pk_columns: ValueTypes["subclassification_pk_columns_input"]},ValueTypes["subclassification"]],
updateSubclassifications?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["subclassification_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["subclassification_bool_exp"]},ValueTypes["subclassification_mutation_response"]],
updateTag?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["tag_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["tag_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["tag_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["tag_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["tag_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["tag_set_input"] | undefined | null,	pk_columns: ValueTypes["tag_pk_columns_input"]},ValueTypes["tag"]],
updateTags?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["tag_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["tag_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["tag_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["tag_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["tag_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["tag_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["tag_bool_exp"]},ValueTypes["tag_mutation_response"]],
updateTeam?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["team_inc_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["team_set_input"] | undefined | null,	pk_columns: ValueTypes["team_pk_columns_input"]},ValueTypes["team"]],
updateTeamUser?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["teamUser_set_input"] | undefined | null,	pk_columns: ValueTypes["teamUser_pk_columns_input"]},ValueTypes["teamUser"]],
updateTeamUsers?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["teamUser_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["teamUser_bool_exp"]},ValueTypes["teamUser_mutation_response"]],
updateTeams?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?: ValueTypes["team_inc_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["team_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["team_bool_exp"]},ValueTypes["team_mutation_response"]],
updateUnit?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["unit_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["unit_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["unit_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["unit_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["unit_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["unit_set_input"] | undefined | null,	pk_columns: ValueTypes["unit_pk_columns_input"]},ValueTypes["unit"]],
updateUnits?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["unit_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["unit_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["unit_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["unit_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["unit_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["unit_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["unit_bool_exp"]},ValueTypes["unit_mutation_response"]],
updateUser?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["user_set_input"] | undefined | null,	pk_columns: ValueTypes["user_pk_columns_input"]},ValueTypes["user"]],
updateUserStatus?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["userStatus_set_input"] | undefined | null,	pk_columns: ValueTypes["userStatus_pk_columns_input"]},ValueTypes["userStatus"]],
updateUserStatuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["userStatus_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["userStatus_bool_exp"]},ValueTypes["userStatus_mutation_response"]],
updateUsers?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["user_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
updateWebhook?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["webhook_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["webhook_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["webhook_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["webhook_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["webhook_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["webhook_set_input"] | undefined | null,	pk_columns: ValueTypes["webhook_pk_columns_input"]},ValueTypes["webhook"]],
updateWebhooks?: [{	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: ValueTypes["webhook_append_input"] | undefined | null,	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: ValueTypes["webhook_delete_at_path_input"] | undefined | null,	/** delete the array element with specified index (negative integers count from
the end). throws an error if top level container is not an array */
	_delete_elem?: ValueTypes["webhook_delete_elem_input"] | undefined | null,	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: ValueTypes["webhook_delete_key_input"] | undefined | null,	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: ValueTypes["webhook_prepend_input"] | undefined | null,	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["webhook_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["webhook_bool_exp"]},ValueTypes["webhook_mutation_response"]],
update_booking_channel?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["booking_channel_set_input"] | undefined | null,	/** filter the rows which have to be updated */
	where: ValueTypes["booking_channel_bool_exp"]},ValueTypes["booking_channel_mutation_response"]],
update_booking_channel_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?: ValueTypes["booking_channel_set_input"] | undefined | null,	pk_columns: ValueTypes["booking_channel_pk_columns_input"]},ValueTypes["booking_channel"]],
		__typename?: boolean
}>;
	["normalized_type_enum"]:normalized_type_enum;
	/** Boolean expression to compare columns of type "normalized_type_enum". All fields are combined with logical 'AND'. */
["normalized_type_enum_comparison_exp"]: {
	_eq?: ValueTypes["normalized_type_enum"] | undefined | null,
	_in?: (ValueTypes["normalized_type_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["normalized_type_enum"] | undefined | null,
	_nin?: (ValueTypes["normalized_type_enum"])[]
};
	/** columns and relationships of "normalized_type" */
["normalizedType"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "normalized_type" */
["normalizedType_aggregate"]: AliasType<{
	aggregate?:ValueTypes["normalizedType_aggregate_fields"],
	nodes?:ValueTypes["normalizedType"],
		__typename?: boolean
}>;
	/** aggregate fields of "normalized_type" */
["normalizedType_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["normalizedType_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["normalizedType_max_fields"],
	min?:ValueTypes["normalizedType_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "normalized_type". All fields are combined with a logical 'AND'. */
["normalizedType_bool_exp"]: {
	_and?: (ValueTypes["normalizedType_bool_exp"])[],
	_not?: ValueTypes["normalizedType_bool_exp"] | undefined | null,
	_or?: (ValueTypes["normalizedType_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "normalized_type" */
["normalizedType_constraint"]:normalizedType_constraint;
	/** input type for inserting data into table "normalized_type" */
["normalizedType_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["normalizedType_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["normalizedType_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "normalized_type" */
["normalizedType_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["normalizedType"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "normalized_type" */
["normalizedType_on_conflict"]: {
	constraint: ValueTypes["normalizedType_constraint"],
	update_columns: (ValueTypes["normalizedType_update_column"])[] | undefined | null,
	where?: ValueTypes["normalizedType_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "normalized_type". */
["normalizedType_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: normalizedType */
["normalizedType_pk_columns_input"]: {
	name: string
};
	/** select columns of table "normalized_type" */
["normalizedType_select_column"]:normalizedType_select_column;
	/** input type for updating data in table "normalized_type" */
["normalizedType_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "normalized_type" */
["normalizedType_update_column"]:normalizedType_update_column;
	["numeric"]:unknown;
	/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
["numeric_comparison_exp"]: {
	_eq?: ValueTypes["numeric"] | undefined | null,
	_gt?: ValueTypes["numeric"] | undefined | null,
	_gte?: ValueTypes["numeric"] | undefined | null,
	_in?: (ValueTypes["numeric"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["numeric"] | undefined | null,
	_lte?: ValueTypes["numeric"] | undefined | null,
	_neq?: ValueTypes["numeric"] | undefined | null,
	_nin?: (ValueTypes["numeric"])[]
};
	/** column ordering options */
["order_by"]:order_by;
	/** columns and relationships of "payment" */
["payment"]: AliasType<{
	arrivesAt?:boolean,
	centTotal?:boolean,
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	currency?:boolean,
	description?:boolean,
	/** An object relationship */
	entity?:ValueTypes["entity"],
	entityId?:boolean,
	id?:boolean,
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
lines_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
metadata?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	paidAt?:boolean,
	status?:boolean,
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
tags_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "payment" */
["payment_aggregate"]: AliasType<{
	aggregate?:ValueTypes["payment_aggregate_fields"],
	nodes?:ValueTypes["payment"],
		__typename?: boolean
}>;
	/** aggregate fields of "payment" */
["payment_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["payment_avg_fields"],
count?: [{	columns?: (ValueTypes["payment_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["payment_max_fields"],
	min?:ValueTypes["payment_min_fields"],
	stddev?:ValueTypes["payment_stddev_fields"],
	stddev_pop?:ValueTypes["payment_stddev_pop_fields"],
	stddev_samp?:ValueTypes["payment_stddev_samp_fields"],
	sum?:ValueTypes["payment_sum_fields"],
	var_pop?:ValueTypes["payment_var_pop_fields"],
	var_samp?:ValueTypes["payment_var_samp_fields"],
	variance?:ValueTypes["payment_variance_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "payment" */
["payment_aggregate_order_by"]: {
	avg?: ValueTypes["payment_avg_order_by"] | undefined | null,
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["payment_max_order_by"] | undefined | null,
	min?: ValueTypes["payment_min_order_by"] | undefined | null,
	stddev?: ValueTypes["payment_stddev_order_by"] | undefined | null,
	stddev_pop?: ValueTypes["payment_stddev_pop_order_by"] | undefined | null,
	stddev_samp?: ValueTypes["payment_stddev_samp_order_by"] | undefined | null,
	sum?: ValueTypes["payment_sum_order_by"] | undefined | null,
	var_pop?: ValueTypes["payment_var_pop_order_by"] | undefined | null,
	var_samp?: ValueTypes["payment_var_samp_order_by"] | undefined | null,
	variance?: ValueTypes["payment_variance_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["payment_append_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "payment" */
["payment_arr_rel_insert_input"]: {
	data: (ValueTypes["payment_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["payment_on_conflict"] | undefined | null
};
	/** aggregate avg on columns */
["payment_avg_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by avg() on columns of table "payment" */
["payment_avg_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
["payment_bool_exp"]: {
	_and?: (ValueTypes["payment_bool_exp"])[],
	_not?: ValueTypes["payment_bool_exp"] | undefined | null,
	_or?: (ValueTypes["payment_bool_exp"])[],
	arrivesAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	centTotal?: ValueTypes["Int_comparison_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	currency?: ValueTypes["currency_enum_comparison_exp"] | undefined | null,
	description?: ValueTypes["String_comparison_exp"] | undefined | null,
	entity?: ValueTypes["entity_bool_exp"] | undefined | null,
	entityId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	lines?: ValueTypes["line_bool_exp"] | undefined | null,
	metadata?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	paidAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	status?: ValueTypes["payment_status_enum_comparison_exp"] | undefined | null,
	tags?: ValueTypes["tag_bool_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "payment" */
["payment_constraint"]:payment_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["payment_delete_at_path_input"]: {
	metadata?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["payment_delete_elem_input"]: {
	metadata?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["payment_delete_key_input"]: {
	metadata?: string | undefined | null
};
	/** input type for incrementing numeric columns in table "payment" */
["payment_inc_input"]: {
	centTotal?: number | undefined | null
};
	/** input type for inserting data into table "payment" */
["payment_insert_input"]: {
	arrivesAt?: ValueTypes["timestamptz"] | undefined | null,
	centTotal?: number | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	currency?: ValueTypes["currency_enum"] | undefined | null,
	description?: string | undefined | null,
	entity?: ValueTypes["entity_obj_rel_insert_input"] | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	lines?: ValueTypes["line_arr_rel_insert_input"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	paidAt?: ValueTypes["timestamptz"] | undefined | null,
	status?: ValueTypes["payment_status_enum"] | undefined | null,
	tags?: ValueTypes["tag_arr_rel_insert_input"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["payment_max_fields"]: AliasType<{
	arrivesAt?:boolean,
	centTotal?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	entityId?:boolean,
	id?:boolean,
	paidAt?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "payment" */
["payment_max_order_by"]: {
	arrivesAt?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	paidAt?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["payment_min_fields"]: AliasType<{
	arrivesAt?:boolean,
	centTotal?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	description?:boolean,
	entityId?:boolean,
	id?:boolean,
	paidAt?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "payment" */
["payment_min_order_by"]: {
	arrivesAt?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	paidAt?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "payment" */
["payment_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["payment"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "payment" */
["payment_obj_rel_insert_input"]: {
	data: ValueTypes["payment_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["payment_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "payment" */
["payment_on_conflict"]: {
	constraint: ValueTypes["payment_constraint"],
	update_columns: (ValueTypes["payment_update_column"])[] | undefined | null,
	where?: ValueTypes["payment_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "payment". */
["payment_order_by"]: {
	arrivesAt?: ValueTypes["order_by"] | undefined | null,
	centTotal?: ValueTypes["order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	currency?: ValueTypes["order_by"] | undefined | null,
	description?: ValueTypes["order_by"] | undefined | null,
	entity?: ValueTypes["entity_order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	lines_aggregate?: ValueTypes["line_aggregate_order_by"] | undefined | null,
	metadata?: ValueTypes["order_by"] | undefined | null,
	paidAt?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	tags_aggregate?: ValueTypes["tag_aggregate_order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: payment */
["payment_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["payment_prepend_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "payment" */
["payment_select_column"]:payment_select_column;
	/** input type for updating data in table "payment" */
["payment_set_input"]: {
	arrivesAt?: ValueTypes["timestamptz"] | undefined | null,
	centTotal?: number | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	currency?: ValueTypes["currency_enum"] | undefined | null,
	description?: string | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	paidAt?: ValueTypes["timestamptz"] | undefined | null,
	status?: ValueTypes["payment_status_enum"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	["payment_status_enum"]:payment_status_enum;
	/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
["payment_status_enum_comparison_exp"]: {
	_eq?: ValueTypes["payment_status_enum"] | undefined | null,
	_in?: (ValueTypes["payment_status_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["payment_status_enum"] | undefined | null,
	_nin?: (ValueTypes["payment_status_enum"])[]
};
	/** aggregate stddev on columns */
["payment_stddev_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by stddev() on columns of table "payment" */
["payment_stddev_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_pop on columns */
["payment_stddev_pop_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_pop() on columns of table "payment" */
["payment_stddev_pop_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate stddev_samp on columns */
["payment_stddev_samp_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by stddev_samp() on columns of table "payment" */
["payment_stddev_samp_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate sum on columns */
["payment_sum_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by sum() on columns of table "payment" */
["payment_sum_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** update columns of table "payment" */
["payment_update_column"]:payment_update_column;
	/** aggregate var_pop on columns */
["payment_var_pop_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by var_pop() on columns of table "payment" */
["payment_var_pop_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate var_samp on columns */
["payment_var_samp_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by var_samp() on columns of table "payment" */
["payment_var_samp_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate variance on columns */
["payment_variance_fields"]: AliasType<{
	centTotal?:boolean,
		__typename?: boolean
}>;
	/** order by variance() on columns of table "payment" */
["payment_variance_order_by"]: {
	centTotal?: ValueTypes["order_by"] | undefined | null
};
	/** columns and relationships of "payment_status" */
["paymentStatus"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "payment_status" */
["paymentStatus_aggregate"]: AliasType<{
	aggregate?:ValueTypes["paymentStatus_aggregate_fields"],
	nodes?:ValueTypes["paymentStatus"],
		__typename?: boolean
}>;
	/** aggregate fields of "payment_status" */
["paymentStatus_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["paymentStatus_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["paymentStatus_max_fields"],
	min?:ValueTypes["paymentStatus_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
["paymentStatus_bool_exp"]: {
	_and?: (ValueTypes["paymentStatus_bool_exp"])[],
	_not?: ValueTypes["paymentStatus_bool_exp"] | undefined | null,
	_or?: (ValueTypes["paymentStatus_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "payment_status" */
["paymentStatus_constraint"]:paymentStatus_constraint;
	/** input type for inserting data into table "payment_status" */
["paymentStatus_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["paymentStatus_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["paymentStatus_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "payment_status" */
["paymentStatus_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["paymentStatus"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "payment_status" */
["paymentStatus_on_conflict"]: {
	constraint: ValueTypes["paymentStatus_constraint"],
	update_columns: (ValueTypes["paymentStatus_update_column"])[] | undefined | null,
	where?: ValueTypes["paymentStatus_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "payment_status". */
["paymentStatus_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: paymentStatus */
["paymentStatus_pk_columns_input"]: {
	name: string
};
	/** select columns of table "payment_status" */
["paymentStatus_select_column"]:paymentStatus_select_column;
	/** input type for updating data in table "payment_status" */
["paymentStatus_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "payment_status" */
["paymentStatus_update_column"]:paymentStatus_update_column;
	/** columns and relationships of "payment_type" */
["paymentType"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "payment_type" */
["paymentType_aggregate"]: AliasType<{
	aggregate?:ValueTypes["paymentType_aggregate_fields"],
	nodes?:ValueTypes["paymentType"],
		__typename?: boolean
}>;
	/** aggregate fields of "payment_type" */
["paymentType_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["paymentType_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["paymentType_max_fields"],
	min?:ValueTypes["paymentType_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "payment_type". All fields are combined with a logical 'AND'. */
["paymentType_bool_exp"]: {
	_and?: (ValueTypes["paymentType_bool_exp"])[],
	_not?: ValueTypes["paymentType_bool_exp"] | undefined | null,
	_or?: (ValueTypes["paymentType_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "payment_type" */
["paymentType_constraint"]:paymentType_constraint;
	/** input type for inserting data into table "payment_type" */
["paymentType_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["paymentType_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["paymentType_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "payment_type" */
["paymentType_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["paymentType"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "payment_type" */
["paymentType_on_conflict"]: {
	constraint: ValueTypes["paymentType_constraint"],
	update_columns: (ValueTypes["paymentType_update_column"])[] | undefined | null,
	where?: ValueTypes["paymentType_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "payment_type". */
["paymentType_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: paymentType */
["paymentType_pk_columns_input"]: {
	name: string
};
	/** select columns of table "payment_type" */
["paymentType_select_column"]:paymentType_select_column;
	/** input type for updating data in table "payment_type" */
["paymentType_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "payment_type" */
["paymentType_update_column"]:paymentType_update_column;
	["query_root"]: AliasType<{
aggregateBookingStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["bookingStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["bookingStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["bookingStatus_bool_exp"] | undefined | null},ValueTypes["bookingStatus_aggregate"]],
aggregateBookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
aggregateClassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["classification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["classification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["classification_bool_exp"] | undefined | null},ValueTypes["classification_aggregate"]],
aggregateConnections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection_aggregate"]],
aggregateCurrencies?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["currency_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["currency_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["currency_bool_exp"] | undefined | null},ValueTypes["currency_aggregate"]],
aggregateEntities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
aggregateEntityStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entityStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entityStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entityStatus_bool_exp"] | undefined | null},ValueTypes["entityStatus_aggregate"]],
aggregateIntegrationTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integrationType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integrationType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integrationType_bool_exp"] | undefined | null},ValueTypes["integrationType_aggregate"]],
aggregateIntegrations?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration_aggregate"]],
aggregateIssues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue_aggregate"]],
aggregateJobMethods?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobMethod_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobMethod_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobMethod_bool_exp"] | undefined | null},ValueTypes["jobMethod_aggregate"]],
aggregateJobStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobStatus_bool_exp"] | undefined | null},ValueTypes["jobStatus_aggregate"]],
aggregateJobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job_aggregate"]],
aggregateLines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
aggregateMetrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric_aggregate"]],
aggregateNormalizedTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["normalizedType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["normalizedType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["normalizedType_bool_exp"] | undefined | null},ValueTypes["normalizedType_aggregate"]],
aggregatePaymentStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentStatus_bool_exp"] | undefined | null},ValueTypes["paymentStatus_aggregate"]],
aggregatePaymentTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentType_bool_exp"] | undefined | null},ValueTypes["paymentType_aggregate"]],
aggregatePayments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment_aggregate"]],
aggregateSubclassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["subclassification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["subclassification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["subclassification_bool_exp"] | undefined | null},ValueTypes["subclassification_aggregate"]],
aggregateTags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
aggregateTeamUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser_aggregate"]],
aggregateTeams?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["team_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["team_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["team_bool_exp"] | undefined | null},ValueTypes["team_aggregate"]],
aggregateUnits?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit_aggregate"]],
aggregateUserStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["userStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["userStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["userStatus_bool_exp"] | undefined | null},ValueTypes["userStatus_aggregate"]],
aggregateUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["user_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["user_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["user_bool_exp"] | undefined | null},ValueTypes["user_aggregate"]],
aggregateWebhooks?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook_aggregate"]],
booking?: [{	id: ValueTypes["uuid"]},ValueTypes["booking"]],
bookingStatus?: [{	name: string},ValueTypes["bookingStatus"]],
bookingStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["bookingStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["bookingStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["bookingStatus_bool_exp"] | undefined | null},ValueTypes["bookingStatus"]],
booking_channel?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_channel_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_channel_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_channel_bool_exp"] | undefined | null},ValueTypes["booking_channel"]],
booking_channel_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_channel_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_channel_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_channel_bool_exp"] | undefined | null},ValueTypes["booking_channel_aggregate"]],
booking_channel_by_pk?: [{	name: string},ValueTypes["booking_channel"]],
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
classification?: [{	name: string},ValueTypes["classification"]],
classifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["classification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["classification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["classification_bool_exp"] | undefined | null},ValueTypes["classification"]],
connection?: [{	id: ValueTypes["uuid"]},ValueTypes["connection"]],
connections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection"]],
currencies?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["currency_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["currency_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["currency_bool_exp"] | undefined | null},ValueTypes["currency"]],
currency?: [{	name: string},ValueTypes["currency"]],
entities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
entity?: [{	id: ValueTypes["uuid"]},ValueTypes["entity"]],
entityStatus?: [{	name: string},ValueTypes["entityStatus"]],
entityStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entityStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entityStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entityStatus_bool_exp"] | undefined | null},ValueTypes["entityStatus"]],
integration?: [{	id: ValueTypes["uuid"]},ValueTypes["integration"]],
integrationType?: [{	name: string},ValueTypes["integrationType"]],
integrationTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integrationType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integrationType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integrationType_bool_exp"] | undefined | null},ValueTypes["integrationType"]],
integrations?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration"]],
issue?: [{	id: ValueTypes["uuid"]},ValueTypes["issue"]],
issues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue"]],
job?: [{	id: ValueTypes["uuid"]},ValueTypes["job"]],
jobMethod?: [{	name: string},ValueTypes["jobMethod"]],
jobMethods?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobMethod_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobMethod_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobMethod_bool_exp"] | undefined | null},ValueTypes["jobMethod"]],
jobStatus?: [{	name: string},ValueTypes["jobStatus"]],
jobStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobStatus_bool_exp"] | undefined | null},ValueTypes["jobStatus"]],
jobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job"]],
line?: [{	id: ValueTypes["uuid"]},ValueTypes["line"]],
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
metric?: [{	id: ValueTypes["uuid"]},ValueTypes["metric"]],
metrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric"]],
normalizedType?: [{	name: string},ValueTypes["normalizedType"]],
normalizedTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["normalizedType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["normalizedType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["normalizedType_bool_exp"] | undefined | null},ValueTypes["normalizedType"]],
payment?: [{	id: ValueTypes["uuid"]},ValueTypes["payment"]],
paymentStatus?: [{	name: string},ValueTypes["paymentStatus"]],
paymentStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentStatus_bool_exp"] | undefined | null},ValueTypes["paymentStatus"]],
paymentType?: [{	name: string},ValueTypes["paymentType"]],
paymentTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentType_bool_exp"] | undefined | null},ValueTypes["paymentType"]],
payments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment"]],
subclassification?: [{	name: string},ValueTypes["subclassification"]],
subclassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["subclassification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["subclassification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["subclassification_bool_exp"] | undefined | null},ValueTypes["subclassification"]],
tag?: [{	id: ValueTypes["uuid"]},ValueTypes["tag"]],
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
team?: [{	id: ValueTypes["uuid"]},ValueTypes["team"]],
teamUser?: [{	id: ValueTypes["uuid"]},ValueTypes["teamUser"]],
teamUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser"]],
teams?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["team_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["team_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["team_bool_exp"] | undefined | null},ValueTypes["team"]],
unit?: [{	id: ValueTypes["uuid"]},ValueTypes["unit"]],
units?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit"]],
user?: [{	id: ValueTypes["uuid"]},ValueTypes["user"]],
userStatus?: [{	name: string},ValueTypes["userStatus"]],
userStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["userStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["userStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["userStatus_bool_exp"] | undefined | null},ValueTypes["userStatus"]],
users?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["user_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["user_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["user_bool_exp"] | undefined | null},ValueTypes["user"]],
webhook?: [{	id: ValueTypes["uuid"]},ValueTypes["webhook"]],
webhooks?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook"]],
		__typename?: boolean
}>;
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?: string | undefined | null,
	_gt?: string | undefined | null,
	_gte?: string | undefined | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string | undefined | null,
	_in?: (string)[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string | undefined | null,
	_is_null?: boolean | undefined | null,
	/** does the column match the given pattern */
	_like?: string | undefined | null,
	_lt?: string | undefined | null,
	_lte?: string | undefined | null,
	_neq?: string | undefined | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string | undefined | null,
	_nin?: (string)[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string | undefined | null,
	/** does the column NOT match the given pattern */
	_nlike?: string | undefined | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string | undefined | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string | undefined | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string | undefined | null,
	/** does the column match the given SQL regular expression */
	_similar?: string | undefined | null
};
	/** columns and relationships of "subclassification" */
["subclassification"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "subclassification" */
["subclassification_aggregate"]: AliasType<{
	aggregate?:ValueTypes["subclassification_aggregate_fields"],
	nodes?:ValueTypes["subclassification"],
		__typename?: boolean
}>;
	/** aggregate fields of "subclassification" */
["subclassification_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["subclassification_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["subclassification_max_fields"],
	min?:ValueTypes["subclassification_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "subclassification". All fields are combined with a logical 'AND'. */
["subclassification_bool_exp"]: {
	_and?: (ValueTypes["subclassification_bool_exp"])[],
	_not?: ValueTypes["subclassification_bool_exp"] | undefined | null,
	_or?: (ValueTypes["subclassification_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "subclassification" */
["subclassification_constraint"]:subclassification_constraint;
	["subclassification_enum"]:subclassification_enum;
	/** Boolean expression to compare columns of type "subclassification_enum". All fields are combined with logical 'AND'. */
["subclassification_enum_comparison_exp"]: {
	_eq?: ValueTypes["subclassification_enum"] | undefined | null,
	_in?: (ValueTypes["subclassification_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["subclassification_enum"] | undefined | null,
	_nin?: (ValueTypes["subclassification_enum"])[]
};
	/** input type for inserting data into table "subclassification" */
["subclassification_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["subclassification_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["subclassification_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "subclassification" */
["subclassification_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["subclassification"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "subclassification" */
["subclassification_on_conflict"]: {
	constraint: ValueTypes["subclassification_constraint"],
	update_columns: (ValueTypes["subclassification_update_column"])[] | undefined | null,
	where?: ValueTypes["subclassification_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "subclassification". */
["subclassification_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: subclassification */
["subclassification_pk_columns_input"]: {
	name: string
};
	/** select columns of table "subclassification" */
["subclassification_select_column"]:subclassification_select_column;
	/** input type for updating data in table "subclassification" */
["subclassification_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "subclassification" */
["subclassification_update_column"]:subclassification_update_column;
	["subscription_root"]: AliasType<{
aggregateBookingStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["bookingStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["bookingStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["bookingStatus_bool_exp"] | undefined | null},ValueTypes["bookingStatus_aggregate"]],
aggregateBookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
aggregateClassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["classification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["classification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["classification_bool_exp"] | undefined | null},ValueTypes["classification_aggregate"]],
aggregateConnections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection_aggregate"]],
aggregateCurrencies?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["currency_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["currency_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["currency_bool_exp"] | undefined | null},ValueTypes["currency_aggregate"]],
aggregateEntities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
aggregateEntityStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entityStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entityStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entityStatus_bool_exp"] | undefined | null},ValueTypes["entityStatus_aggregate"]],
aggregateIntegrationTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integrationType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integrationType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integrationType_bool_exp"] | undefined | null},ValueTypes["integrationType_aggregate"]],
aggregateIntegrations?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration_aggregate"]],
aggregateIssues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue_aggregate"]],
aggregateJobMethods?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobMethod_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobMethod_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobMethod_bool_exp"] | undefined | null},ValueTypes["jobMethod_aggregate"]],
aggregateJobStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobStatus_bool_exp"] | undefined | null},ValueTypes["jobStatus_aggregate"]],
aggregateJobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job_aggregate"]],
aggregateLines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
aggregateMetrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric_aggregate"]],
aggregateNormalizedTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["normalizedType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["normalizedType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["normalizedType_bool_exp"] | undefined | null},ValueTypes["normalizedType_aggregate"]],
aggregatePaymentStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentStatus_bool_exp"] | undefined | null},ValueTypes["paymentStatus_aggregate"]],
aggregatePaymentTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentType_bool_exp"] | undefined | null},ValueTypes["paymentType_aggregate"]],
aggregatePayments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment_aggregate"]],
aggregateSubclassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["subclassification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["subclassification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["subclassification_bool_exp"] | undefined | null},ValueTypes["subclassification_aggregate"]],
aggregateTags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
aggregateTeamUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser_aggregate"]],
aggregateTeams?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["team_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["team_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["team_bool_exp"] | undefined | null},ValueTypes["team_aggregate"]],
aggregateUnits?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit_aggregate"]],
aggregateUserStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["userStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["userStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["userStatus_bool_exp"] | undefined | null},ValueTypes["userStatus_aggregate"]],
aggregateUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["user_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["user_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["user_bool_exp"] | undefined | null},ValueTypes["user_aggregate"]],
aggregateWebhooks?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook_aggregate"]],
booking?: [{	id: ValueTypes["uuid"]},ValueTypes["booking"]],
bookingStatus?: [{	name: string},ValueTypes["bookingStatus"]],
bookingStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["bookingStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["bookingStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["bookingStatus_bool_exp"] | undefined | null},ValueTypes["bookingStatus"]],
booking_channel?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_channel_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_channel_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_channel_bool_exp"] | undefined | null},ValueTypes["booking_channel"]],
booking_channel_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_channel_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_channel_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_channel_bool_exp"] | undefined | null},ValueTypes["booking_channel_aggregate"]],
booking_channel_by_pk?: [{	name: string},ValueTypes["booking_channel"]],
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
classification?: [{	name: string},ValueTypes["classification"]],
classifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["classification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["classification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["classification_bool_exp"] | undefined | null},ValueTypes["classification"]],
connection?: [{	id: ValueTypes["uuid"]},ValueTypes["connection"]],
connections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection"]],
currencies?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["currency_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["currency_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["currency_bool_exp"] | undefined | null},ValueTypes["currency"]],
currency?: [{	name: string},ValueTypes["currency"]],
entities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
entity?: [{	id: ValueTypes["uuid"]},ValueTypes["entity"]],
entityStatus?: [{	name: string},ValueTypes["entityStatus"]],
entityStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entityStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entityStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entityStatus_bool_exp"] | undefined | null},ValueTypes["entityStatus"]],
integration?: [{	id: ValueTypes["uuid"]},ValueTypes["integration"]],
integrationType?: [{	name: string},ValueTypes["integrationType"]],
integrationTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integrationType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integrationType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integrationType_bool_exp"] | undefined | null},ValueTypes["integrationType"]],
integrations?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration"]],
issue?: [{	id: ValueTypes["uuid"]},ValueTypes["issue"]],
issues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue"]],
job?: [{	id: ValueTypes["uuid"]},ValueTypes["job"]],
jobMethod?: [{	name: string},ValueTypes["jobMethod"]],
jobMethods?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobMethod_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobMethod_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobMethod_bool_exp"] | undefined | null},ValueTypes["jobMethod"]],
jobStatus?: [{	name: string},ValueTypes["jobStatus"]],
jobStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["jobStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["jobStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["jobStatus_bool_exp"] | undefined | null},ValueTypes["jobStatus"]],
jobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job"]],
line?: [{	id: ValueTypes["uuid"]},ValueTypes["line"]],
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
metric?: [{	id: ValueTypes["uuid"]},ValueTypes["metric"]],
metrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric"]],
normalizedType?: [{	name: string},ValueTypes["normalizedType"]],
normalizedTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["normalizedType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["normalizedType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["normalizedType_bool_exp"] | undefined | null},ValueTypes["normalizedType"]],
payment?: [{	id: ValueTypes["uuid"]},ValueTypes["payment"]],
paymentStatus?: [{	name: string},ValueTypes["paymentStatus"]],
paymentStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentStatus_bool_exp"] | undefined | null},ValueTypes["paymentStatus"]],
paymentType?: [{	name: string},ValueTypes["paymentType"]],
paymentTypes?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["paymentType_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["paymentType_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["paymentType_bool_exp"] | undefined | null},ValueTypes["paymentType"]],
payments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment"]],
subclassification?: [{	name: string},ValueTypes["subclassification"]],
subclassifications?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["subclassification_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["subclassification_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["subclassification_bool_exp"] | undefined | null},ValueTypes["subclassification"]],
tag?: [{	id: ValueTypes["uuid"]},ValueTypes["tag"]],
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
team?: [{	id: ValueTypes["uuid"]},ValueTypes["team"]],
teamUser?: [{	id: ValueTypes["uuid"]},ValueTypes["teamUser"]],
teamUsers?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser"]],
teams?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["team_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["team_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["team_bool_exp"] | undefined | null},ValueTypes["team"]],
unit?: [{	id: ValueTypes["uuid"]},ValueTypes["unit"]],
units?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit"]],
user?: [{	id: ValueTypes["uuid"]},ValueTypes["user"]],
userStatus?: [{	name: string},ValueTypes["userStatus"]],
userStatuses?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["userStatus_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["userStatus_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["userStatus_bool_exp"] | undefined | null},ValueTypes["userStatus"]],
users?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["user_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["user_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["user_bool_exp"] | undefined | null},ValueTypes["user"]],
webhook?: [{	id: ValueTypes["uuid"]},ValueTypes["webhook"]],
webhooks?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook"]],
		__typename?: boolean
}>;
	/** columns and relationships of "tag" */
["tag"]: AliasType<{
	/** An object relationship */
	booking?:ValueTypes["booking"],
	bookingId?:boolean,
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	id?:boolean,
json?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	/** An object relationship */
	payment?:ValueTypes["payment"],
	paymentId?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	/** An object relationship */
	unit?:ValueTypes["unit"],
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "tag" */
["tag_aggregate"]: AliasType<{
	aggregate?:ValueTypes["tag_aggregate_fields"],
	nodes?:ValueTypes["tag"],
		__typename?: boolean
}>;
	/** aggregate fields of "tag" */
["tag_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["tag_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["tag_max_fields"],
	min?:ValueTypes["tag_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "tag" */
["tag_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["tag_max_order_by"] | undefined | null,
	min?: ValueTypes["tag_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["tag_append_input"]: {
	json?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "tag" */
["tag_arr_rel_insert_input"]: {
	data: (ValueTypes["tag_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["tag_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
["tag_bool_exp"]: {
	_and?: (ValueTypes["tag_bool_exp"])[],
	_not?: ValueTypes["tag_bool_exp"] | undefined | null,
	_or?: (ValueTypes["tag_bool_exp"])[],
	booking?: ValueTypes["booking_bool_exp"] | undefined | null,
	bookingId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	json?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	payment?: ValueTypes["payment_bool_exp"] | undefined | null,
	paymentId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	type?: ValueTypes["String_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	unit?: ValueTypes["unit_bool_exp"] | undefined | null,
	unitId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "tag" */
["tag_constraint"]:tag_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["tag_delete_at_path_input"]: {
	json?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["tag_delete_elem_input"]: {
	json?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["tag_delete_key_input"]: {
	json?: string | undefined | null
};
	/** input type for inserting data into table "tag" */
["tag_insert_input"]: {
	booking?: ValueTypes["booking_obj_rel_insert_input"] | undefined | null,
	bookingId?: ValueTypes["uuid"] | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	payment?: ValueTypes["payment_obj_rel_insert_input"] | undefined | null,
	paymentId?: ValueTypes["uuid"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unit?: ValueTypes["unit_obj_rel_insert_input"] | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["tag_max_fields"]: AliasType<{
	bookingId?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	id?:boolean,
	paymentId?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "tag" */
["tag_max_order_by"]: {
	bookingId?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["tag_min_fields"]: AliasType<{
	bookingId?:boolean,
	connectionId?:boolean,
	createdAt?:boolean,
	id?:boolean,
	paymentId?:boolean,
	teamId?:boolean,
	type?:boolean,
	uniqueRef?:boolean,
	unitId?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "tag" */
["tag_min_order_by"]: {
	bookingId?: ValueTypes["order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "tag" */
["tag_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["tag"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "tag" */
["tag_on_conflict"]: {
	constraint: ValueTypes["tag_constraint"],
	update_columns: (ValueTypes["tag_update_column"])[] | undefined | null,
	where?: ValueTypes["tag_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "tag". */
["tag_order_by"]: {
	booking?: ValueTypes["booking_order_by"] | undefined | null,
	bookingId?: ValueTypes["order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	json?: ValueTypes["order_by"] | undefined | null,
	payment?: ValueTypes["payment_order_by"] | undefined | null,
	paymentId?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	type?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	unit?: ValueTypes["unit_order_by"] | undefined | null,
	unitId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: tag */
["tag_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["tag_prepend_input"]: {
	json?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "tag" */
["tag_select_column"]:tag_select_column;
	/** input type for updating data in table "tag" */
["tag_set_input"]: {
	bookingId?: ValueTypes["uuid"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	json?: ValueTypes["jsonb"] | undefined | null,
	paymentId?: ValueTypes["uuid"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	type?: string | undefined | null,
	uniqueRef?: string | undefined | null,
	unitId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** update columns of table "tag" */
["tag_update_column"]:tag_update_column;
	/** columns and relationships of "team" */
["team"]: AliasType<{
	address?:boolean,
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
bookings_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
	commissionPercentage?:boolean,
connections?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection"]],
connections_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["connection_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["connection_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["connection_bool_exp"] | undefined | null},ValueTypes["connection_aggregate"]],
	createdAt?:boolean,
	email?:boolean,
entities?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity"]],
entities_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["entity_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["entity_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["entity_bool_exp"] | undefined | null},ValueTypes["entity_aggregate"]],
	id?:boolean,
integrations?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration"]],
integrations_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["integration_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["integration_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["integration_bool_exp"] | undefined | null},ValueTypes["integration_aggregate"]],
	isActive?:boolean,
	isTest?:boolean,
issues?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue"]],
issues_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["issue_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["issue_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["issue_bool_exp"] | undefined | null},ValueTypes["issue_aggregate"]],
jobs?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job"]],
jobs_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["job_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["job_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["job_bool_exp"] | undefined | null},ValueTypes["job_aggregate"]],
lines?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line"]],
lines_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["line_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["line_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["line_bool_exp"] | undefined | null},ValueTypes["line_aggregate"]],
members?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser"]],
members_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser_aggregate"]],
metrics?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric"]],
metrics_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["metric_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["metric_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["metric_bool_exp"] | undefined | null},ValueTypes["metric_aggregate"]],
	name?:boolean,
payments?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment"]],
payments_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["payment_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["payment_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["payment_bool_exp"] | undefined | null},ValueTypes["payment_aggregate"]],
	stripeId?:boolean,
	stripeSubscriptionItemId?:boolean,
	supportEmail?:boolean,
	supportPhone?:boolean,
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
tags_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
units?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit"]],
units_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["unit_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["unit_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["unit_bool_exp"] | undefined | null},ValueTypes["unit_aggregate"]],
webhooks?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook"]],
webhooks_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["webhook_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["webhook_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["webhook_bool_exp"] | undefined | null},ValueTypes["webhook_aggregate"]],
	website?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "team" */
["team_aggregate"]: AliasType<{
	aggregate?:ValueTypes["team_aggregate_fields"],
	nodes?:ValueTypes["team"],
		__typename?: boolean
}>;
	/** aggregate fields of "team" */
["team_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["team_avg_fields"],
count?: [{	columns?: (ValueTypes["team_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["team_max_fields"],
	min?:ValueTypes["team_min_fields"],
	stddev?:ValueTypes["team_stddev_fields"],
	stddev_pop?:ValueTypes["team_stddev_pop_fields"],
	stddev_samp?:ValueTypes["team_stddev_samp_fields"],
	sum?:ValueTypes["team_sum_fields"],
	var_pop?:ValueTypes["team_var_pop_fields"],
	var_samp?:ValueTypes["team_var_samp_fields"],
	variance?:ValueTypes["team_variance_fields"],
		__typename?: boolean
}>;
	/** aggregate avg on columns */
["team_avg_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
["team_bool_exp"]: {
	_and?: (ValueTypes["team_bool_exp"])[],
	_not?: ValueTypes["team_bool_exp"] | undefined | null,
	_or?: (ValueTypes["team_bool_exp"])[],
	address?: ValueTypes["String_comparison_exp"] | undefined | null,
	bookings?: ValueTypes["booking_bool_exp"] | undefined | null,
	commissionPercentage?: ValueTypes["numeric_comparison_exp"] | undefined | null,
	connections?: ValueTypes["connection_bool_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	email?: ValueTypes["String_comparison_exp"] | undefined | null,
	entities?: ValueTypes["entity_bool_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	integrations?: ValueTypes["integration_bool_exp"] | undefined | null,
	isActive?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	isTest?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	issues?: ValueTypes["issue_bool_exp"] | undefined | null,
	jobs?: ValueTypes["job_bool_exp"] | undefined | null,
	lines?: ValueTypes["line_bool_exp"] | undefined | null,
	members?: ValueTypes["teamUser_bool_exp"] | undefined | null,
	metrics?: ValueTypes["metric_bool_exp"] | undefined | null,
	name?: ValueTypes["String_comparison_exp"] | undefined | null,
	payments?: ValueTypes["payment_bool_exp"] | undefined | null,
	stripeId?: ValueTypes["String_comparison_exp"] | undefined | null,
	stripeSubscriptionItemId?: ValueTypes["String_comparison_exp"] | undefined | null,
	supportEmail?: ValueTypes["String_comparison_exp"] | undefined | null,
	supportPhone?: ValueTypes["String_comparison_exp"] | undefined | null,
	tags?: ValueTypes["tag_bool_exp"] | undefined | null,
	units?: ValueTypes["unit_bool_exp"] | undefined | null,
	webhooks?: ValueTypes["webhook_bool_exp"] | undefined | null,
	website?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "team" */
["team_constraint"]:team_constraint;
	/** input type for incrementing numeric columns in table "team" */
["team_inc_input"]: {
	commissionPercentage?: ValueTypes["numeric"] | undefined | null
};
	/** input type for inserting data into table "team" */
["team_insert_input"]: {
	address?: string | undefined | null,
	bookings?: ValueTypes["booking_arr_rel_insert_input"] | undefined | null,
	commissionPercentage?: ValueTypes["numeric"] | undefined | null,
	connections?: ValueTypes["connection_arr_rel_insert_input"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	email?: string | undefined | null,
	entities?: ValueTypes["entity_arr_rel_insert_input"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	integrations?: ValueTypes["integration_arr_rel_insert_input"] | undefined | null,
	isActive?: boolean | undefined | null,
	isTest?: boolean | undefined | null,
	issues?: ValueTypes["issue_arr_rel_insert_input"] | undefined | null,
	jobs?: ValueTypes["job_arr_rel_insert_input"] | undefined | null,
	lines?: ValueTypes["line_arr_rel_insert_input"] | undefined | null,
	members?: ValueTypes["teamUser_arr_rel_insert_input"] | undefined | null,
	metrics?: ValueTypes["metric_arr_rel_insert_input"] | undefined | null,
	name?: string | undefined | null,
	payments?: ValueTypes["payment_arr_rel_insert_input"] | undefined | null,
	stripeId?: string | undefined | null,
	stripeSubscriptionItemId?: string | undefined | null,
	supportEmail?: string | undefined | null,
	supportPhone?: string | undefined | null,
	tags?: ValueTypes["tag_arr_rel_insert_input"] | undefined | null,
	units?: ValueTypes["unit_arr_rel_insert_input"] | undefined | null,
	webhooks?: ValueTypes["webhook_arr_rel_insert_input"] | undefined | null,
	website?: string | undefined | null
};
	/** aggregate max on columns */
["team_max_fields"]: AliasType<{
	address?:boolean,
	commissionPercentage?:boolean,
	createdAt?:boolean,
	email?:boolean,
	id?:boolean,
	name?:boolean,
	stripeId?:boolean,
	stripeSubscriptionItemId?:boolean,
	supportEmail?:boolean,
	supportPhone?:boolean,
	website?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["team_min_fields"]: AliasType<{
	address?:boolean,
	commissionPercentage?:boolean,
	createdAt?:boolean,
	email?:boolean,
	id?:boolean,
	name?:boolean,
	stripeId?:boolean,
	stripeSubscriptionItemId?:boolean,
	supportEmail?:boolean,
	supportPhone?:boolean,
	website?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "team" */
["team_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["team"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "team" */
["team_obj_rel_insert_input"]: {
	data: ValueTypes["team_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["team_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "team" */
["team_on_conflict"]: {
	constraint: ValueTypes["team_constraint"],
	update_columns: (ValueTypes["team_update_column"])[] | undefined | null,
	where?: ValueTypes["team_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "team". */
["team_order_by"]: {
	address?: ValueTypes["order_by"] | undefined | null,
	bookings_aggregate?: ValueTypes["booking_aggregate_order_by"] | undefined | null,
	commissionPercentage?: ValueTypes["order_by"] | undefined | null,
	connections_aggregate?: ValueTypes["connection_aggregate_order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	email?: ValueTypes["order_by"] | undefined | null,
	entities_aggregate?: ValueTypes["entity_aggregate_order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	integrations_aggregate?: ValueTypes["integration_aggregate_order_by"] | undefined | null,
	isActive?: ValueTypes["order_by"] | undefined | null,
	isTest?: ValueTypes["order_by"] | undefined | null,
	issues_aggregate?: ValueTypes["issue_aggregate_order_by"] | undefined | null,
	jobs_aggregate?: ValueTypes["job_aggregate_order_by"] | undefined | null,
	lines_aggregate?: ValueTypes["line_aggregate_order_by"] | undefined | null,
	members_aggregate?: ValueTypes["teamUser_aggregate_order_by"] | undefined | null,
	metrics_aggregate?: ValueTypes["metric_aggregate_order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	payments_aggregate?: ValueTypes["payment_aggregate_order_by"] | undefined | null,
	stripeId?: ValueTypes["order_by"] | undefined | null,
	stripeSubscriptionItemId?: ValueTypes["order_by"] | undefined | null,
	supportEmail?: ValueTypes["order_by"] | undefined | null,
	supportPhone?: ValueTypes["order_by"] | undefined | null,
	tags_aggregate?: ValueTypes["tag_aggregate_order_by"] | undefined | null,
	units_aggregate?: ValueTypes["unit_aggregate_order_by"] | undefined | null,
	webhooks_aggregate?: ValueTypes["webhook_aggregate_order_by"] | undefined | null,
	website?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: team */
["team_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** select columns of table "team" */
["team_select_column"]:team_select_column;
	/** input type for updating data in table "team" */
["team_set_input"]: {
	address?: string | undefined | null,
	commissionPercentage?: ValueTypes["numeric"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	email?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isActive?: boolean | undefined | null,
	isTest?: boolean | undefined | null,
	name?: string | undefined | null,
	stripeId?: string | undefined | null,
	stripeSubscriptionItemId?: string | undefined | null,
	supportEmail?: string | undefined | null,
	supportPhone?: string | undefined | null,
	website?: string | undefined | null
};
	/** aggregate stddev on columns */
["team_stddev_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** aggregate stddev_pop on columns */
["team_stddev_pop_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** aggregate stddev_samp on columns */
["team_stddev_samp_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** aggregate sum on columns */
["team_sum_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** update columns of table "team" */
["team_update_column"]:team_update_column;
	/** aggregate var_pop on columns */
["team_var_pop_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** aggregate var_samp on columns */
["team_var_samp_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** aggregate variance on columns */
["team_variance_fields"]: AliasType<{
	commissionPercentage?:boolean,
		__typename?: boolean
}>;
	/** columns and relationships of "team_user" */
["teamUser"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	role?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	updatedAt?:boolean,
	/** An object relationship */
	user?:ValueTypes["user"],
	userId?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "team_user" */
["teamUser_aggregate"]: AliasType<{
	aggregate?:ValueTypes["teamUser_aggregate_fields"],
	nodes?:ValueTypes["teamUser"],
		__typename?: boolean
}>;
	/** aggregate fields of "team_user" */
["teamUser_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["teamUser_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["teamUser_max_fields"],
	min?:ValueTypes["teamUser_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "team_user" */
["teamUser_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["teamUser_max_order_by"] | undefined | null,
	min?: ValueTypes["teamUser_min_order_by"] | undefined | null
};
	/** input type for inserting array relation for remote table "team_user" */
["teamUser_arr_rel_insert_input"]: {
	data: (ValueTypes["teamUser_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["teamUser_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "team_user". All fields are combined with a logical 'AND'. */
["teamUser_bool_exp"]: {
	_and?: (ValueTypes["teamUser_bool_exp"])[],
	_not?: ValueTypes["teamUser_bool_exp"] | undefined | null,
	_or?: (ValueTypes["teamUser_bool_exp"])[],
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	role?: ValueTypes["String_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	user?: ValueTypes["user_bool_exp"] | undefined | null,
	userId?: ValueTypes["uuid_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "team_user" */
["teamUser_constraint"]:teamUser_constraint;
	/** input type for inserting data into table "team_user" */
["teamUser_insert_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	role?: string | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null,
	user?: ValueTypes["user_obj_rel_insert_input"] | undefined | null,
	userId?: ValueTypes["uuid"] | undefined | null
};
	/** aggregate max on columns */
["teamUser_max_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	role?:boolean,
	teamId?:boolean,
	updatedAt?:boolean,
	userId?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "team_user" */
["teamUser_max_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	role?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	userId?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["teamUser_min_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	role?:boolean,
	teamId?:boolean,
	updatedAt?:boolean,
	userId?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "team_user" */
["teamUser_min_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	role?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	userId?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "team_user" */
["teamUser_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["teamUser"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "team_user" */
["teamUser_on_conflict"]: {
	constraint: ValueTypes["teamUser_constraint"],
	update_columns: (ValueTypes["teamUser_update_column"])[] | undefined | null,
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "team_user". */
["teamUser_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	role?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null,
	user?: ValueTypes["user_order_by"] | undefined | null,
	userId?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: teamUser */
["teamUser_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** select columns of table "team_user" */
["teamUser_select_column"]:teamUser_select_column;
	/** input type for updating data in table "team_user" */
["teamUser_set_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	role?: string | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null,
	userId?: ValueTypes["uuid"] | undefined | null
};
	/** update columns of table "team_user" */
["teamUser_update_column"]:teamUser_update_column;
	["timestamptz"]:unknown;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
	_eq?: ValueTypes["timestamptz"] | undefined | null,
	_gt?: ValueTypes["timestamptz"] | undefined | null,
	_gte?: ValueTypes["timestamptz"] | undefined | null,
	_in?: (ValueTypes["timestamptz"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["timestamptz"] | undefined | null,
	_lte?: ValueTypes["timestamptz"] | undefined | null,
	_neq?: ValueTypes["timestamptz"] | undefined | null,
	_nin?: (ValueTypes["timestamptz"])[]
};
	/** columns and relationships of "unit" */
["unit"]: AliasType<{
bookings?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking"]],
bookings_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["booking_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["booking_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["booking_bool_exp"] | undefined | null},ValueTypes["booking_aggregate"]],
	/** An object relationship */
	connection?:ValueTypes["connection"],
	connectionId?:boolean,
	createdAt?:boolean,
	/** An object relationship */
	entity?:ValueTypes["entity"],
	entityId?:boolean,
	id?:boolean,
metadata?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	name?:boolean,
	status?:boolean,
tags?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag"]],
tags_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["tag_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["tag_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["tag_bool_exp"] | undefined | null},ValueTypes["tag_aggregate"]],
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "unit" */
["unit_aggregate"]: AliasType<{
	aggregate?:ValueTypes["unit_aggregate_fields"],
	nodes?:ValueTypes["unit"],
		__typename?: boolean
}>;
	/** aggregate fields of "unit" */
["unit_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["unit_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["unit_max_fields"],
	min?:ValueTypes["unit_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "unit" */
["unit_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["unit_max_order_by"] | undefined | null,
	min?: ValueTypes["unit_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["unit_append_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "unit" */
["unit_arr_rel_insert_input"]: {
	data: (ValueTypes["unit_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["unit_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "unit". All fields are combined with a logical 'AND'. */
["unit_bool_exp"]: {
	_and?: (ValueTypes["unit_bool_exp"])[],
	_not?: ValueTypes["unit_bool_exp"] | undefined | null,
	_or?: (ValueTypes["unit_bool_exp"])[],
	bookings?: ValueTypes["booking_bool_exp"] | undefined | null,
	connection?: ValueTypes["connection_bool_exp"] | undefined | null,
	connectionId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	entity?: ValueTypes["entity_bool_exp"] | undefined | null,
	entityId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	metadata?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	name?: ValueTypes["String_comparison_exp"] | undefined | null,
	status?: ValueTypes["String_comparison_exp"] | undefined | null,
	tags?: ValueTypes["tag_bool_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	uniqueRef?: ValueTypes["String_comparison_exp"] | undefined | null,
	updatedAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "unit" */
["unit_constraint"]:unit_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["unit_delete_at_path_input"]: {
	metadata?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["unit_delete_elem_input"]: {
	metadata?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["unit_delete_key_input"]: {
	metadata?: string | undefined | null
};
	/** input type for inserting data into table "unit" */
["unit_insert_input"]: {
	bookings?: ValueTypes["booking_arr_rel_insert_input"] | undefined | null,
	connection?: ValueTypes["connection_obj_rel_insert_input"] | undefined | null,
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	entity?: ValueTypes["entity_obj_rel_insert_input"] | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	name?: string | undefined | null,
	status?: string | undefined | null,
	tags?: ValueTypes["tag_arr_rel_insert_input"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	uniqueRef?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["unit_max_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	entityId?:boolean,
	id?:boolean,
	name?:boolean,
	status?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "unit" */
["unit_max_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["unit_min_fields"]: AliasType<{
	connectionId?:boolean,
	createdAt?:boolean,
	entityId?:boolean,
	id?:boolean,
	name?:boolean,
	status?:boolean,
	teamId?:boolean,
	uniqueRef?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "unit" */
["unit_min_order_by"]: {
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "unit" */
["unit_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["unit"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "unit" */
["unit_obj_rel_insert_input"]: {
	data: ValueTypes["unit_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["unit_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "unit" */
["unit_on_conflict"]: {
	constraint: ValueTypes["unit_constraint"],
	update_columns: (ValueTypes["unit_update_column"])[] | undefined | null,
	where?: ValueTypes["unit_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "unit". */
["unit_order_by"]: {
	bookings_aggregate?: ValueTypes["booking_aggregate_order_by"] | undefined | null,
	connection?: ValueTypes["connection_order_by"] | undefined | null,
	connectionId?: ValueTypes["order_by"] | undefined | null,
	createdAt?: ValueTypes["order_by"] | undefined | null,
	entity?: ValueTypes["entity_order_by"] | undefined | null,
	entityId?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	metadata?: ValueTypes["order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	tags_aggregate?: ValueTypes["tag_aggregate_order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	uniqueRef?: ValueTypes["order_by"] | undefined | null,
	updatedAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: unit */
["unit_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["unit_prepend_input"]: {
	metadata?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "unit" */
["unit_select_column"]:unit_select_column;
	/** input type for updating data in table "unit" */
["unit_set_input"]: {
	connectionId?: ValueTypes["uuid"] | undefined | null,
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	entityId?: ValueTypes["uuid"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	metadata?: ValueTypes["jsonb"] | undefined | null,
	name?: string | undefined | null,
	status?: string | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	uniqueRef?: string | undefined | null,
	updatedAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** update columns of table "unit" */
["unit_update_column"]:unit_update_column;
	/** columns and relationships of "user" */
["user"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	id?:boolean,
	isAdmin?:boolean,
memberships?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser"]],
memberships_aggregate?: [{	/** distinct select on columns */
	distinct_on?: (ValueTypes["teamUser_select_column"])[],	/** limit the number of rows returned */
	limit?: number | undefined | null,	/** skip the first n rows. Use only with order_by */
	offset?: number | undefined | null,	/** sort the rows by one or more columns */
	order_by?: (ValueTypes["teamUser_order_by"])[],	/** filter the rows returned */
	where?: ValueTypes["teamUser_bool_exp"] | undefined | null},ValueTypes["teamUser_aggregate"]],
	name?:boolean,
	status?:boolean,
	sub?:boolean,
	trialExpiryAt?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "user" */
["user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_aggregate_fields"],
	nodes?:ValueTypes["user"],
		__typename?: boolean
}>;
	/** aggregate fields of "user" */
["user_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["user_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["user_max_fields"],
	min?:ValueTypes["user_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
	_and?: (ValueTypes["user_bool_exp"])[],
	_not?: ValueTypes["user_bool_exp"] | undefined | null,
	_or?: (ValueTypes["user_bool_exp"])[],
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	email?: ValueTypes["String_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	isAdmin?: ValueTypes["Boolean_comparison_exp"] | undefined | null,
	memberships?: ValueTypes["teamUser_bool_exp"] | undefined | null,
	name?: ValueTypes["String_comparison_exp"] | undefined | null,
	status?: ValueTypes["user_status_enum_comparison_exp"] | undefined | null,
	sub?: ValueTypes["String_comparison_exp"] | undefined | null,
	trialExpiryAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]:user_constraint;
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	email?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isAdmin?: boolean | undefined | null,
	memberships?: ValueTypes["teamUser_arr_rel_insert_input"] | undefined | null,
	name?: string | undefined | null,
	status?: ValueTypes["user_status_enum"] | undefined | null,
	sub?: string | undefined | null,
	trialExpiryAt?: ValueTypes["timestamptz"] | undefined | null
};
	/** aggregate max on columns */
["user_max_fields"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	id?:boolean,
	name?:boolean,
	sub?:boolean,
	trialExpiryAt?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["user_min_fields"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	id?:boolean,
	name?:boolean,
	sub?:boolean,
	trialExpiryAt?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "user" */
["user_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user"],
		__typename?: boolean
}>;
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
	data: ValueTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?: ValueTypes["user_on_conflict"] | undefined | null
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
	constraint: ValueTypes["user_constraint"],
	update_columns: (ValueTypes["user_update_column"])[] | undefined | null,
	where?: ValueTypes["user_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	email?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	isAdmin?: ValueTypes["order_by"] | undefined | null,
	memberships_aggregate?: ValueTypes["teamUser_aggregate_order_by"] | undefined | null,
	name?: ValueTypes["order_by"] | undefined | null,
	status?: ValueTypes["order_by"] | undefined | null,
	sub?: ValueTypes["order_by"] | undefined | null,
	trialExpiryAt?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** select columns of table "user" */
["user_select_column"]:user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	email?: string | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	isAdmin?: boolean | undefined | null,
	name?: string | undefined | null,
	status?: ValueTypes["user_status_enum"] | undefined | null,
	sub?: string | undefined | null,
	trialExpiryAt?: ValueTypes["timestamptz"] | undefined | null
};
	["user_status_enum"]:user_status_enum;
	/** Boolean expression to compare columns of type "user_status_enum". All fields are combined with logical 'AND'. */
["user_status_enum_comparison_exp"]: {
	_eq?: ValueTypes["user_status_enum"] | undefined | null,
	_in?: (ValueTypes["user_status_enum"])[],
	_is_null?: boolean | undefined | null,
	_neq?: ValueTypes["user_status_enum"] | undefined | null,
	_nin?: (ValueTypes["user_status_enum"])[]
};
	/** update columns of table "user" */
["user_update_column"]:user_update_column;
	/** columns and relationships of "user_status" */
["userStatus"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "user_status" */
["userStatus_aggregate"]: AliasType<{
	aggregate?:ValueTypes["userStatus_aggregate_fields"],
	nodes?:ValueTypes["userStatus"],
		__typename?: boolean
}>;
	/** aggregate fields of "user_status" */
["userStatus_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["userStatus_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["userStatus_max_fields"],
	min?:ValueTypes["userStatus_min_fields"],
		__typename?: boolean
}>;
	/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
["userStatus_bool_exp"]: {
	_and?: (ValueTypes["userStatus_bool_exp"])[],
	_not?: ValueTypes["userStatus_bool_exp"] | undefined | null,
	_or?: (ValueTypes["userStatus_bool_exp"])[],
	name?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "user_status" */
["userStatus_constraint"]:userStatus_constraint;
	/** input type for inserting data into table "user_status" */
["userStatus_insert_input"]: {
	name?: string | undefined | null
};
	/** aggregate max on columns */
["userStatus_max_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["userStatus_min_fields"]: AliasType<{
	name?:boolean,
		__typename?: boolean
}>;
	/** response of any mutation on the table "user_status" */
["userStatus_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["userStatus"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "user_status" */
["userStatus_on_conflict"]: {
	constraint: ValueTypes["userStatus_constraint"],
	update_columns: (ValueTypes["userStatus_update_column"])[] | undefined | null,
	where?: ValueTypes["userStatus_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "user_status". */
["userStatus_order_by"]: {
	name?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: userStatus */
["userStatus_pk_columns_input"]: {
	name: string
};
	/** select columns of table "user_status" */
["userStatus_select_column"]:userStatus_select_column;
	/** input type for updating data in table "user_status" */
["userStatus_set_input"]: {
	name?: string | undefined | null
};
	/** update columns of table "user_status" */
["userStatus_update_column"]:userStatus_update_column;
	["uuid"]:unknown;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
	_eq?: ValueTypes["uuid"] | undefined | null,
	_gt?: ValueTypes["uuid"] | undefined | null,
	_gte?: ValueTypes["uuid"] | undefined | null,
	_in?: (ValueTypes["uuid"])[],
	_is_null?: boolean | undefined | null,
	_lt?: ValueTypes["uuid"] | undefined | null,
	_lte?: ValueTypes["uuid"] | undefined | null,
	_neq?: ValueTypes["uuid"] | undefined | null,
	_nin?: (ValueTypes["uuid"])[]
};
	/** columns and relationships of "webhook" */
["webhook"]: AliasType<{
	createdAt?:boolean,
headers?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	id?:boolean,
	/** An object relationship */
	team?:ValueTypes["team"],
	teamId?:boolean,
types?: [{	/** JSON select path */
	path?: string | undefined | null},boolean],
	types2?:boolean,
	url?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "webhook" */
["webhook_aggregate"]: AliasType<{
	aggregate?:ValueTypes["webhook_aggregate_fields"],
	nodes?:ValueTypes["webhook"],
		__typename?: boolean
}>;
	/** aggregate fields of "webhook" */
["webhook_aggregate_fields"]: AliasType<{
count?: [{	columns?: (ValueTypes["webhook_select_column"])[],	distinct?: boolean | undefined | null},boolean],
	max?:ValueTypes["webhook_max_fields"],
	min?:ValueTypes["webhook_min_fields"],
		__typename?: boolean
}>;
	/** order by aggregate values of table "webhook" */
["webhook_aggregate_order_by"]: {
	count?: ValueTypes["order_by"] | undefined | null,
	max?: ValueTypes["webhook_max_order_by"] | undefined | null,
	min?: ValueTypes["webhook_min_order_by"] | undefined | null
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["webhook_append_input"]: {
	headers?: ValueTypes["jsonb"] | undefined | null,
	types?: ValueTypes["jsonb"] | undefined | null
};
	/** input type for inserting array relation for remote table "webhook" */
["webhook_arr_rel_insert_input"]: {
	data: (ValueTypes["webhook_insert_input"])[] | undefined | null,
	/** on conflict condition */
	on_conflict?: ValueTypes["webhook_on_conflict"] | undefined | null
};
	/** Boolean expression to filter rows from the table "webhook". All fields are combined with a logical 'AND'. */
["webhook_bool_exp"]: {
	_and?: (ValueTypes["webhook_bool_exp"])[],
	_not?: ValueTypes["webhook_bool_exp"] | undefined | null,
	_or?: (ValueTypes["webhook_bool_exp"])[],
	createdAt?: ValueTypes["timestamptz_comparison_exp"] | undefined | null,
	headers?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	id?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	team?: ValueTypes["team_bool_exp"] | undefined | null,
	teamId?: ValueTypes["uuid_comparison_exp"] | undefined | null,
	types?: ValueTypes["jsonb_comparison_exp"] | undefined | null,
	types2?: ValueTypes["_text_comparison_exp"] | undefined | null,
	url?: ValueTypes["String_comparison_exp"] | undefined | null
};
	/** unique or primary key constraints on table "webhook" */
["webhook_constraint"]:webhook_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["webhook_delete_at_path_input"]: {
	headers?: (string)[],
	types?: (string)[]
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["webhook_delete_elem_input"]: {
	headers?: number | undefined | null,
	types?: number | undefined | null
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["webhook_delete_key_input"]: {
	headers?: string | undefined | null,
	types?: string | undefined | null
};
	/** input type for inserting data into table "webhook" */
["webhook_insert_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	headers?: ValueTypes["jsonb"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	team?: ValueTypes["team_obj_rel_insert_input"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	types?: ValueTypes["jsonb"] | undefined | null,
	types2?: ValueTypes["_text"] | undefined | null,
	url?: string | undefined | null
};
	/** aggregate max on columns */
["webhook_max_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	teamId?:boolean,
	url?:boolean,
		__typename?: boolean
}>;
	/** order by max() on columns of table "webhook" */
["webhook_max_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	url?: ValueTypes["order_by"] | undefined | null
};
	/** aggregate min on columns */
["webhook_min_fields"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	teamId?:boolean,
	url?:boolean,
		__typename?: boolean
}>;
	/** order by min() on columns of table "webhook" */
["webhook_min_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	url?: ValueTypes["order_by"] | undefined | null
};
	/** response of any mutation on the table "webhook" */
["webhook_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:boolean,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["webhook"],
		__typename?: boolean
}>;
	/** on conflict condition type for table "webhook" */
["webhook_on_conflict"]: {
	constraint: ValueTypes["webhook_constraint"],
	update_columns: (ValueTypes["webhook_update_column"])[] | undefined | null,
	where?: ValueTypes["webhook_bool_exp"] | undefined | null
};
	/** Ordering options when selecting data from "webhook". */
["webhook_order_by"]: {
	createdAt?: ValueTypes["order_by"] | undefined | null,
	headers?: ValueTypes["order_by"] | undefined | null,
	id?: ValueTypes["order_by"] | undefined | null,
	team?: ValueTypes["team_order_by"] | undefined | null,
	teamId?: ValueTypes["order_by"] | undefined | null,
	types?: ValueTypes["order_by"] | undefined | null,
	types2?: ValueTypes["order_by"] | undefined | null,
	url?: ValueTypes["order_by"] | undefined | null
};
	/** primary key columns input for table: webhook */
["webhook_pk_columns_input"]: {
	id: ValueTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["webhook_prepend_input"]: {
	headers?: ValueTypes["jsonb"] | undefined | null,
	types?: ValueTypes["jsonb"] | undefined | null
};
	/** select columns of table "webhook" */
["webhook_select_column"]:webhook_select_column;
	/** input type for updating data in table "webhook" */
["webhook_set_input"]: {
	createdAt?: ValueTypes["timestamptz"] | undefined | null,
	headers?: ValueTypes["jsonb"] | undefined | null,
	id?: ValueTypes["uuid"] | undefined | null,
	teamId?: ValueTypes["uuid"] | undefined | null,
	types?: ValueTypes["jsonb"] | undefined | null,
	types2?: ValueTypes["_text"] | undefined | null,
	url?: string | undefined | null
};
	/** update columns of table "webhook" */
["webhook_update_column"]:webhook_update_column
  }

export type ModelTypes = {
    ["_text"]:any;
	/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
["_text_comparison_exp"]: GraphQLTypes["_text_comparison_exp"];
	/** columns and relationships of "booking" */
["booking"]: {
		bookedAt?:ModelTypes["timestamptz"] | undefined,
	bookerName?:string | undefined,
	bookingChannel?:ModelTypes["booking_channel_enum"] | undefined,
	checkIn?:ModelTypes["timestamptz"] | undefined,
	checkOut?:ModelTypes["timestamptz"] | undefined,
	confirmationCode?:string | undefined,
	/** An object relationship */
	connection?:ModelTypes["connection"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	currency?:ModelTypes["currency_enum"] | undefined,
	/** An object relationship */
	entity?:ModelTypes["entity"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	guestName?:string | undefined,
	guests?:number | undefined,
	id:ModelTypes["uuid"],
	isOTA?:boolean | undefined,
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate:ModelTypes["line_aggregate"],
	metadata?:ModelTypes["jsonb"] | undefined,
	nights?:number | undefined,
	/** An object relationship */
	otaBooking?:ModelTypes["booking"] | undefined,
	otaBookingId?:ModelTypes["uuid"] | undefined,
	/** An array relationship */
	relatedBookings:Array<ModelTypes["booking"]> | undefined,
	/** An aggregate relationship */
	relatedBookings_aggregate:ModelTypes["booking_aggregate"],
	status?:ModelTypes["booking_status_enum"] | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate:ModelTypes["tag_aggregate"],
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	/** An object relationship */
	unit?:ModelTypes["unit"] | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregated selection of "booking" */
["booking_aggregate"]: {
		aggregate?:ModelTypes["booking_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["booking"]> | undefined
};
	/** aggregate fields of "booking" */
["booking_aggregate_fields"]: {
		avg?:ModelTypes["booking_avg_fields"] | undefined,
	count:number,
	max?:ModelTypes["booking_max_fields"] | undefined,
	min?:ModelTypes["booking_min_fields"] | undefined,
	stddev?:ModelTypes["booking_stddev_fields"] | undefined,
	stddev_pop?:ModelTypes["booking_stddev_pop_fields"] | undefined,
	stddev_samp?:ModelTypes["booking_stddev_samp_fields"] | undefined,
	sum?:ModelTypes["booking_sum_fields"] | undefined,
	var_pop?:ModelTypes["booking_var_pop_fields"] | undefined,
	var_samp?:ModelTypes["booking_var_samp_fields"] | undefined,
	variance?:ModelTypes["booking_variance_fields"] | undefined
};
	/** order by aggregate values of table "booking" */
["booking_aggregate_order_by"]: GraphQLTypes["booking_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["booking_append_input"]: GraphQLTypes["booking_append_input"];
	/** input type for inserting array relation for remote table "booking" */
["booking_arr_rel_insert_input"]: GraphQLTypes["booking_arr_rel_insert_input"];
	/** aggregate avg on columns */
["booking_avg_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by avg() on columns of table "booking" */
["booking_avg_order_by"]: GraphQLTypes["booking_avg_order_by"];
	/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
["booking_bool_exp"]: GraphQLTypes["booking_bool_exp"];
	/** columns and relationships of "booking_channel" */
["booking_channel"]: {
		name:string
};
	/** aggregated selection of "booking_channel" */
["booking_channel_aggregate"]: {
		aggregate?:ModelTypes["booking_channel_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["booking_channel"]> | undefined
};
	/** aggregate fields of "booking_channel" */
["booking_channel_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["booking_channel_max_fields"] | undefined,
	min?:ModelTypes["booking_channel_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "booking_channel". All fields are combined with a logical 'AND'. */
["booking_channel_bool_exp"]: GraphQLTypes["booking_channel_bool_exp"];
	/** unique or primary key constraints on table "booking_channel" */
["booking_channel_constraint"]: GraphQLTypes["booking_channel_constraint"];
	["booking_channel_enum"]: GraphQLTypes["booking_channel_enum"];
	/** Boolean expression to compare columns of type "booking_channel_enum". All fields are combined with logical 'AND'. */
["booking_channel_enum_comparison_exp"]: GraphQLTypes["booking_channel_enum_comparison_exp"];
	/** input type for inserting data into table "booking_channel" */
["booking_channel_insert_input"]: GraphQLTypes["booking_channel_insert_input"];
	/** aggregate max on columns */
["booking_channel_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["booking_channel_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "booking_channel" */
["booking_channel_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["booking_channel"]> | undefined
};
	/** on conflict condition type for table "booking_channel" */
["booking_channel_on_conflict"]: GraphQLTypes["booking_channel_on_conflict"];
	/** Ordering options when selecting data from "booking_channel". */
["booking_channel_order_by"]: GraphQLTypes["booking_channel_order_by"];
	/** primary key columns input for table: booking_channel */
["booking_channel_pk_columns_input"]: GraphQLTypes["booking_channel_pk_columns_input"];
	/** select columns of table "booking_channel" */
["booking_channel_select_column"]: GraphQLTypes["booking_channel_select_column"];
	/** input type for updating data in table "booking_channel" */
["booking_channel_set_input"]: GraphQLTypes["booking_channel_set_input"];
	/** update columns of table "booking_channel" */
["booking_channel_update_column"]: GraphQLTypes["booking_channel_update_column"];
	/** unique or primary key constraints on table "booking" */
["booking_constraint"]: GraphQLTypes["booking_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["booking_delete_at_path_input"]: GraphQLTypes["booking_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["booking_delete_elem_input"]: GraphQLTypes["booking_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["booking_delete_key_input"]: GraphQLTypes["booking_delete_key_input"];
	/** input type for incrementing numeric columns in table "booking" */
["booking_inc_input"]: GraphQLTypes["booking_inc_input"];
	/** input type for inserting data into table "booking" */
["booking_insert_input"]: GraphQLTypes["booking_insert_input"];
	/** aggregate max on columns */
["booking_max_fields"]: {
		bookedAt?:ModelTypes["timestamptz"] | undefined,
	bookerName?:string | undefined,
	checkIn?:ModelTypes["timestamptz"] | undefined,
	checkOut?:ModelTypes["timestamptz"] | undefined,
	confirmationCode?:string | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	guestName?:string | undefined,
	guests?:number | undefined,
	id?:ModelTypes["uuid"] | undefined,
	nights?:number | undefined,
	otaBookingId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "booking" */
["booking_max_order_by"]: GraphQLTypes["booking_max_order_by"];
	/** aggregate min on columns */
["booking_min_fields"]: {
		bookedAt?:ModelTypes["timestamptz"] | undefined,
	bookerName?:string | undefined,
	checkIn?:ModelTypes["timestamptz"] | undefined,
	checkOut?:ModelTypes["timestamptz"] | undefined,
	confirmationCode?:string | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	guestName?:string | undefined,
	guests?:number | undefined,
	id?:ModelTypes["uuid"] | undefined,
	nights?:number | undefined,
	otaBookingId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "booking" */
["booking_min_order_by"]: GraphQLTypes["booking_min_order_by"];
	/** response of any mutation on the table "booking" */
["booking_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["booking"]> | undefined
};
	/** input type for inserting object relation for remote table "booking" */
["booking_obj_rel_insert_input"]: GraphQLTypes["booking_obj_rel_insert_input"];
	/** on conflict condition type for table "booking" */
["booking_on_conflict"]: GraphQLTypes["booking_on_conflict"];
	/** Ordering options when selecting data from "booking". */
["booking_order_by"]: GraphQLTypes["booking_order_by"];
	/** primary key columns input for table: booking */
["booking_pk_columns_input"]: GraphQLTypes["booking_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["booking_prepend_input"]: GraphQLTypes["booking_prepend_input"];
	/** select columns of table "booking" */
["booking_select_column"]: GraphQLTypes["booking_select_column"];
	/** input type for updating data in table "booking" */
["booking_set_input"]: GraphQLTypes["booking_set_input"];
	["booking_status_enum"]: GraphQLTypes["booking_status_enum"];
	/** Boolean expression to compare columns of type "booking_status_enum". All fields are combined with logical 'AND'. */
["booking_status_enum_comparison_exp"]: GraphQLTypes["booking_status_enum_comparison_exp"];
	/** aggregate stddev on columns */
["booking_stddev_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by stddev() on columns of table "booking" */
["booking_stddev_order_by"]: GraphQLTypes["booking_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["booking_stddev_pop_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by stddev_pop() on columns of table "booking" */
["booking_stddev_pop_order_by"]: GraphQLTypes["booking_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["booking_stddev_samp_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by stddev_samp() on columns of table "booking" */
["booking_stddev_samp_order_by"]: GraphQLTypes["booking_stddev_samp_order_by"];
	/** aggregate sum on columns */
["booking_sum_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by sum() on columns of table "booking" */
["booking_sum_order_by"]: GraphQLTypes["booking_sum_order_by"];
	/** update columns of table "booking" */
["booking_update_column"]: GraphQLTypes["booking_update_column"];
	/** aggregate var_pop on columns */
["booking_var_pop_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by var_pop() on columns of table "booking" */
["booking_var_pop_order_by"]: GraphQLTypes["booking_var_pop_order_by"];
	/** aggregate var_samp on columns */
["booking_var_samp_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by var_samp() on columns of table "booking" */
["booking_var_samp_order_by"]: GraphQLTypes["booking_var_samp_order_by"];
	/** aggregate variance on columns */
["booking_variance_fields"]: {
		guests?:number | undefined,
	nights?:number | undefined
};
	/** order by variance() on columns of table "booking" */
["booking_variance_order_by"]: GraphQLTypes["booking_variance_order_by"];
	/** columns and relationships of "booking_status" */
["bookingStatus"]: {
		name:string
};
	/** aggregated selection of "booking_status" */
["bookingStatus_aggregate"]: {
		aggregate?:ModelTypes["bookingStatus_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["bookingStatus"]> | undefined
};
	/** aggregate fields of "booking_status" */
["bookingStatus_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["bookingStatus_max_fields"] | undefined,
	min?:ModelTypes["bookingStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "booking_status". All fields are combined with a logical 'AND'. */
["bookingStatus_bool_exp"]: GraphQLTypes["bookingStatus_bool_exp"];
	/** unique or primary key constraints on table "booking_status" */
["bookingStatus_constraint"]: GraphQLTypes["bookingStatus_constraint"];
	/** input type for inserting data into table "booking_status" */
["bookingStatus_insert_input"]: GraphQLTypes["bookingStatus_insert_input"];
	/** aggregate max on columns */
["bookingStatus_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["bookingStatus_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "booking_status" */
["bookingStatus_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["bookingStatus"]> | undefined
};
	/** on conflict condition type for table "booking_status" */
["bookingStatus_on_conflict"]: GraphQLTypes["bookingStatus_on_conflict"];
	/** Ordering options when selecting data from "booking_status". */
["bookingStatus_order_by"]: GraphQLTypes["bookingStatus_order_by"];
	/** primary key columns input for table: bookingStatus */
["bookingStatus_pk_columns_input"]: GraphQLTypes["bookingStatus_pk_columns_input"];
	/** select columns of table "booking_status" */
["bookingStatus_select_column"]: GraphQLTypes["bookingStatus_select_column"];
	/** input type for updating data in table "booking_status" */
["bookingStatus_set_input"]: GraphQLTypes["bookingStatus_set_input"];
	/** update columns of table "booking_status" */
["bookingStatus_update_column"]: GraphQLTypes["bookingStatus_update_column"];
	/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
	/** columns and relationships of "classification" */
["classification"]: {
		name:string
};
	/** aggregated selection of "classification" */
["classification_aggregate"]: {
		aggregate?:ModelTypes["classification_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["classification"]> | undefined
};
	/** aggregate fields of "classification" */
["classification_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["classification_max_fields"] | undefined,
	min?:ModelTypes["classification_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "classification". All fields are combined with a logical 'AND'. */
["classification_bool_exp"]: GraphQLTypes["classification_bool_exp"];
	/** unique or primary key constraints on table "classification" */
["classification_constraint"]: GraphQLTypes["classification_constraint"];
	["classification_enum"]: GraphQLTypes["classification_enum"];
	/** Boolean expression to compare columns of type "classification_enum". All fields are combined with logical 'AND'. */
["classification_enum_comparison_exp"]: GraphQLTypes["classification_enum_comparison_exp"];
	/** input type for inserting data into table "classification" */
["classification_insert_input"]: GraphQLTypes["classification_insert_input"];
	/** aggregate max on columns */
["classification_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["classification_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "classification" */
["classification_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["classification"]> | undefined
};
	/** on conflict condition type for table "classification" */
["classification_on_conflict"]: GraphQLTypes["classification_on_conflict"];
	/** Ordering options when selecting data from "classification". */
["classification_order_by"]: GraphQLTypes["classification_order_by"];
	/** primary key columns input for table: classification */
["classification_pk_columns_input"]: GraphQLTypes["classification_pk_columns_input"];
	/** select columns of table "classification" */
["classification_select_column"]: GraphQLTypes["classification_select_column"];
	/** input type for updating data in table "classification" */
["classification_set_input"]: GraphQLTypes["classification_set_input"];
	/** update columns of table "classification" */
["classification_update_column"]: GraphQLTypes["classification_update_column"];
	/** columns and relationships of "connection" */
["connection"]: {
		/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate:ModelTypes["booking_aggregate"],
	createdAt:ModelTypes["timestamptz"],
	credentials?:ModelTypes["jsonb"] | undefined,
	/** An array relationship */
	entities:Array<ModelTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate:ModelTypes["entity_aggregate"],
	id:ModelTypes["uuid"],
	/** An object relationship */
	integration:ModelTypes["integration"],
	integrationId:ModelTypes["uuid"],
	/** An array relationship */
	jobs:Array<ModelTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate:ModelTypes["job_aggregate"],
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate:ModelTypes["line_aggregate"],
	/** An array relationship */
	metrics:Array<ModelTypes["metric"]> | undefined,
	/** An aggregate relationship */
	metrics_aggregate:ModelTypes["metric_aggregate"],
	name:string,
	/** An array relationship */
	payments:Array<ModelTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate:ModelTypes["payment_aggregate"],
	persistentState?:ModelTypes["jsonb"] | undefined,
	status?:string | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate:ModelTypes["tag_aggregate"],
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	/** An array relationship */
	units:Array<ModelTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate:ModelTypes["unit_aggregate"],
	webhookKey?:string | undefined
};
	/** aggregated selection of "connection" */
["connection_aggregate"]: {
		aggregate?:ModelTypes["connection_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["connection"]> | undefined
};
	/** aggregate fields of "connection" */
["connection_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["connection_max_fields"] | undefined,
	min?:ModelTypes["connection_min_fields"] | undefined
};
	/** order by aggregate values of table "connection" */
["connection_aggregate_order_by"]: GraphQLTypes["connection_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["connection_append_input"]: GraphQLTypes["connection_append_input"];
	/** input type for inserting array relation for remote table "connection" */
["connection_arr_rel_insert_input"]: GraphQLTypes["connection_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "connection". All fields are combined with a logical 'AND'. */
["connection_bool_exp"]: GraphQLTypes["connection_bool_exp"];
	/** unique or primary key constraints on table "connection" */
["connection_constraint"]: GraphQLTypes["connection_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["connection_delete_at_path_input"]: GraphQLTypes["connection_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["connection_delete_elem_input"]: GraphQLTypes["connection_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["connection_delete_key_input"]: GraphQLTypes["connection_delete_key_input"];
	/** input type for inserting data into table "connection" */
["connection_insert_input"]: GraphQLTypes["connection_insert_input"];
	/** aggregate max on columns */
["connection_max_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	integrationId?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	status?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	webhookKey?:string | undefined
};
	/** order by max() on columns of table "connection" */
["connection_max_order_by"]: GraphQLTypes["connection_max_order_by"];
	/** aggregate min on columns */
["connection_min_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	integrationId?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	status?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	webhookKey?:string | undefined
};
	/** order by min() on columns of table "connection" */
["connection_min_order_by"]: GraphQLTypes["connection_min_order_by"];
	/** response of any mutation on the table "connection" */
["connection_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["connection"]> | undefined
};
	/** input type for inserting object relation for remote table "connection" */
["connection_obj_rel_insert_input"]: GraphQLTypes["connection_obj_rel_insert_input"];
	/** on conflict condition type for table "connection" */
["connection_on_conflict"]: GraphQLTypes["connection_on_conflict"];
	/** Ordering options when selecting data from "connection". */
["connection_order_by"]: GraphQLTypes["connection_order_by"];
	/** primary key columns input for table: connection */
["connection_pk_columns_input"]: GraphQLTypes["connection_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["connection_prepend_input"]: GraphQLTypes["connection_prepend_input"];
	/** select columns of table "connection" */
["connection_select_column"]: GraphQLTypes["connection_select_column"];
	/** input type for updating data in table "connection" */
["connection_set_input"]: GraphQLTypes["connection_set_input"];
	/** update columns of table "connection" */
["connection_update_column"]: GraphQLTypes["connection_update_column"];
	/** columns and relationships of "currency" */
["currency"]: {
		name:string
};
	/** aggregated selection of "currency" */
["currency_aggregate"]: {
		aggregate?:ModelTypes["currency_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["currency"]> | undefined
};
	/** aggregate fields of "currency" */
["currency_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["currency_max_fields"] | undefined,
	min?:ModelTypes["currency_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
["currency_bool_exp"]: GraphQLTypes["currency_bool_exp"];
	/** unique or primary key constraints on table "currency" */
["currency_constraint"]: GraphQLTypes["currency_constraint"];
	["currency_enum"]: GraphQLTypes["currency_enum"];
	/** Boolean expression to compare columns of type "currency_enum". All fields are combined with logical 'AND'. */
["currency_enum_comparison_exp"]: GraphQLTypes["currency_enum_comparison_exp"];
	/** input type for inserting data into table "currency" */
["currency_insert_input"]: GraphQLTypes["currency_insert_input"];
	/** aggregate max on columns */
["currency_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["currency_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "currency" */
["currency_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["currency"]> | undefined
};
	/** on conflict condition type for table "currency" */
["currency_on_conflict"]: GraphQLTypes["currency_on_conflict"];
	/** Ordering options when selecting data from "currency". */
["currency_order_by"]: GraphQLTypes["currency_order_by"];
	/** primary key columns input for table: currency */
["currency_pk_columns_input"]: GraphQLTypes["currency_pk_columns_input"];
	/** select columns of table "currency" */
["currency_select_column"]: GraphQLTypes["currency_select_column"];
	/** input type for updating data in table "currency" */
["currency_set_input"]: GraphQLTypes["currency_set_input"];
	/** update columns of table "currency" */
["currency_update_column"]: GraphQLTypes["currency_update_column"];
	/** columns and relationships of "entity" */
["entity"]: {
		/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate:ModelTypes["booking_aggregate"],
	/** An object relationship */
	connection:ModelTypes["connection"],
	connectionId:ModelTypes["uuid"],
	createdAt:ModelTypes["timestamptz"],
	description:string,
	diffJson?:ModelTypes["jsonb"] | undefined,
	hash?:string | undefined,
	id:ModelTypes["uuid"],
	/** An object relationship */
	job?:ModelTypes["job"] | undefined,
	jobId?:ModelTypes["uuid"] | undefined,
	json?:ModelTypes["jsonb"] | undefined,
	normalizedJson?:ModelTypes["jsonb"] | undefined,
	normalizedType?:ModelTypes["normalized_type_enum"] | undefined,
	parsedAt?:ModelTypes["timestamptz"] | undefined,
	/** An array relationship */
	payments:Array<ModelTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate:ModelTypes["payment_aggregate"],
	/** An object relationship */
	predecessorEntity?:ModelTypes["entity"] | undefined,
	predecessorEntityId?:ModelTypes["uuid"] | undefined,
	status:ModelTypes["entity_status_enum"],
	statusText?:string | undefined,
	/** An array relationship */
	successorEntities:Array<ModelTypes["entity"]> | undefined,
	/** An aggregate relationship */
	successorEntities_aggregate:ModelTypes["entity_aggregate"],
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type:string,
	uniqueRef?:string | undefined,
	/** An array relationship */
	units:Array<ModelTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate:ModelTypes["unit_aggregate"],
	updatedAt:ModelTypes["timestamptz"]
};
	/** aggregated selection of "entity" */
["entity_aggregate"]: {
		aggregate?:ModelTypes["entity_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["entity"]> | undefined
};
	/** aggregate fields of "entity" */
["entity_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["entity_max_fields"] | undefined,
	min?:ModelTypes["entity_min_fields"] | undefined
};
	/** order by aggregate values of table "entity" */
["entity_aggregate_order_by"]: GraphQLTypes["entity_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["entity_append_input"]: GraphQLTypes["entity_append_input"];
	/** input type for inserting array relation for remote table "entity" */
["entity_arr_rel_insert_input"]: GraphQLTypes["entity_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
["entity_bool_exp"]: GraphQLTypes["entity_bool_exp"];
	/** unique or primary key constraints on table "entity" */
["entity_constraint"]: GraphQLTypes["entity_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["entity_delete_at_path_input"]: GraphQLTypes["entity_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["entity_delete_elem_input"]: GraphQLTypes["entity_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["entity_delete_key_input"]: GraphQLTypes["entity_delete_key_input"];
	/** input type for inserting data into table "entity" */
["entity_insert_input"]: GraphQLTypes["entity_insert_input"];
	/** aggregate max on columns */
["entity_max_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	hash?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	jobId?:ModelTypes["uuid"] | undefined,
	parsedAt?:ModelTypes["timestamptz"] | undefined,
	predecessorEntityId?:ModelTypes["uuid"] | undefined,
	statusText?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "entity" */
["entity_max_order_by"]: GraphQLTypes["entity_max_order_by"];
	/** aggregate min on columns */
["entity_min_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	hash?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	jobId?:ModelTypes["uuid"] | undefined,
	parsedAt?:ModelTypes["timestamptz"] | undefined,
	predecessorEntityId?:ModelTypes["uuid"] | undefined,
	statusText?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "entity" */
["entity_min_order_by"]: GraphQLTypes["entity_min_order_by"];
	/** response of any mutation on the table "entity" */
["entity_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["entity"]> | undefined
};
	/** input type for inserting object relation for remote table "entity" */
["entity_obj_rel_insert_input"]: GraphQLTypes["entity_obj_rel_insert_input"];
	/** on conflict condition type for table "entity" */
["entity_on_conflict"]: GraphQLTypes["entity_on_conflict"];
	/** Ordering options when selecting data from "entity". */
["entity_order_by"]: GraphQLTypes["entity_order_by"];
	/** primary key columns input for table: entity */
["entity_pk_columns_input"]: GraphQLTypes["entity_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["entity_prepend_input"]: GraphQLTypes["entity_prepend_input"];
	/** select columns of table "entity" */
["entity_select_column"]: GraphQLTypes["entity_select_column"];
	/** input type for updating data in table "entity" */
["entity_set_input"]: GraphQLTypes["entity_set_input"];
	["entity_status_enum"]: GraphQLTypes["entity_status_enum"];
	/** Boolean expression to compare columns of type "entity_status_enum". All fields are combined with logical 'AND'. */
["entity_status_enum_comparison_exp"]: GraphQLTypes["entity_status_enum_comparison_exp"];
	/** update columns of table "entity" */
["entity_update_column"]: GraphQLTypes["entity_update_column"];
	/** columns and relationships of "entity_status" */
["entityStatus"]: {
		name:string
};
	/** aggregated selection of "entity_status" */
["entityStatus_aggregate"]: {
		aggregate?:ModelTypes["entityStatus_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["entityStatus"]> | undefined
};
	/** aggregate fields of "entity_status" */
["entityStatus_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["entityStatus_max_fields"] | undefined,
	min?:ModelTypes["entityStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "entity_status". All fields are combined with a logical 'AND'. */
["entityStatus_bool_exp"]: GraphQLTypes["entityStatus_bool_exp"];
	/** unique or primary key constraints on table "entity_status" */
["entityStatus_constraint"]: GraphQLTypes["entityStatus_constraint"];
	/** input type for inserting data into table "entity_status" */
["entityStatus_insert_input"]: GraphQLTypes["entityStatus_insert_input"];
	/** aggregate max on columns */
["entityStatus_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["entityStatus_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "entity_status" */
["entityStatus_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["entityStatus"]> | undefined
};
	/** on conflict condition type for table "entity_status" */
["entityStatus_on_conflict"]: GraphQLTypes["entityStatus_on_conflict"];
	/** Ordering options when selecting data from "entity_status". */
["entityStatus_order_by"]: GraphQLTypes["entityStatus_order_by"];
	/** primary key columns input for table: entityStatus */
["entityStatus_pk_columns_input"]: GraphQLTypes["entityStatus_pk_columns_input"];
	/** select columns of table "entity_status" */
["entityStatus_select_column"]: GraphQLTypes["entityStatus_select_column"];
	/** input type for updating data in table "entity_status" */
["entityStatus_set_input"]: GraphQLTypes["entityStatus_set_input"];
	/** update columns of table "entity_status" */
["entityStatus_update_column"]: GraphQLTypes["entityStatus_update_column"];
	["float8"]:any;
	/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
["float8_comparison_exp"]: GraphQLTypes["float8_comparison_exp"];
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: GraphQLTypes["Int_comparison_exp"];
	/** columns and relationships of "integration" */
["integration"]: {
		apiDevUrl?:string | undefined,
	apiUrl:string,
	/** An array relationship */
	connections:Array<ModelTypes["connection"]> | undefined,
	/** An aggregate relationship */
	connections_aggregate:ModelTypes["connection_aggregate"],
	icon?:string | undefined,
	id:ModelTypes["uuid"],
	isApproved?:boolean | undefined,
	isPrivate:boolean,
	/** An array relationship */
	jobs:Array<ModelTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate:ModelTypes["job_aggregate"],
	name:string,
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type:ModelTypes["integration_type_enum"],
	uniqueRef:string
};
	/** aggregated selection of "integration" */
["integration_aggregate"]: {
		aggregate?:ModelTypes["integration_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["integration"]> | undefined
};
	/** aggregate fields of "integration" */
["integration_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["integration_max_fields"] | undefined,
	min?:ModelTypes["integration_min_fields"] | undefined
};
	/** order by aggregate values of table "integration" */
["integration_aggregate_order_by"]: GraphQLTypes["integration_aggregate_order_by"];
	/** input type for inserting array relation for remote table "integration" */
["integration_arr_rel_insert_input"]: GraphQLTypes["integration_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "integration". All fields are combined with a logical 'AND'. */
["integration_bool_exp"]: GraphQLTypes["integration_bool_exp"];
	/** unique or primary key constraints on table "integration" */
["integration_constraint"]: GraphQLTypes["integration_constraint"];
	/** input type for inserting data into table "integration" */
["integration_insert_input"]: GraphQLTypes["integration_insert_input"];
	/** aggregate max on columns */
["integration_max_fields"]: {
		apiDevUrl?:string | undefined,
	apiUrl?:string | undefined,
	icon?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined
};
	/** order by max() on columns of table "integration" */
["integration_max_order_by"]: GraphQLTypes["integration_max_order_by"];
	/** aggregate min on columns */
["integration_min_fields"]: {
		apiDevUrl?:string | undefined,
	apiUrl?:string | undefined,
	icon?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined
};
	/** order by min() on columns of table "integration" */
["integration_min_order_by"]: GraphQLTypes["integration_min_order_by"];
	/** response of any mutation on the table "integration" */
["integration_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["integration"]> | undefined
};
	/** input type for inserting object relation for remote table "integration" */
["integration_obj_rel_insert_input"]: GraphQLTypes["integration_obj_rel_insert_input"];
	/** on conflict condition type for table "integration" */
["integration_on_conflict"]: GraphQLTypes["integration_on_conflict"];
	/** Ordering options when selecting data from "integration". */
["integration_order_by"]: GraphQLTypes["integration_order_by"];
	/** primary key columns input for table: integration */
["integration_pk_columns_input"]: GraphQLTypes["integration_pk_columns_input"];
	/** select columns of table "integration" */
["integration_select_column"]: GraphQLTypes["integration_select_column"];
	/** input type for updating data in table "integration" */
["integration_set_input"]: GraphQLTypes["integration_set_input"];
	["integration_type_enum"]: GraphQLTypes["integration_type_enum"];
	/** Boolean expression to compare columns of type "integration_type_enum". All fields are combined with logical 'AND'. */
["integration_type_enum_comparison_exp"]: GraphQLTypes["integration_type_enum_comparison_exp"];
	/** update columns of table "integration" */
["integration_update_column"]: GraphQLTypes["integration_update_column"];
	/** columns and relationships of "integration_type" */
["integrationType"]: {
		name:string
};
	/** aggregated selection of "integration_type" */
["integrationType_aggregate"]: {
		aggregate?:ModelTypes["integrationType_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["integrationType"]> | undefined
};
	/** aggregate fields of "integration_type" */
["integrationType_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["integrationType_max_fields"] | undefined,
	min?:ModelTypes["integrationType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "integration_type". All fields are combined with a logical 'AND'. */
["integrationType_bool_exp"]: GraphQLTypes["integrationType_bool_exp"];
	/** unique or primary key constraints on table "integration_type" */
["integrationType_constraint"]: GraphQLTypes["integrationType_constraint"];
	/** input type for inserting data into table "integration_type" */
["integrationType_insert_input"]: GraphQLTypes["integrationType_insert_input"];
	/** aggregate max on columns */
["integrationType_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["integrationType_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "integration_type" */
["integrationType_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["integrationType"]> | undefined
};
	/** on conflict condition type for table "integration_type" */
["integrationType_on_conflict"]: GraphQLTypes["integrationType_on_conflict"];
	/** Ordering options when selecting data from "integration_type". */
["integrationType_order_by"]: GraphQLTypes["integrationType_order_by"];
	/** primary key columns input for table: integrationType */
["integrationType_pk_columns_input"]: GraphQLTypes["integrationType_pk_columns_input"];
	/** select columns of table "integration_type" */
["integrationType_select_column"]: GraphQLTypes["integrationType_select_column"];
	/** input type for updating data in table "integration_type" */
["integrationType_set_input"]: GraphQLTypes["integrationType_set_input"];
	/** update columns of table "integration_type" */
["integrationType_update_column"]: GraphQLTypes["integrationType_update_column"];
	/** columns and relationships of "issue" */
["issue"]: {
		code?:string | undefined,
	createdAt:ModelTypes["timestamptz"],
	id:ModelTypes["uuid"],
	isPublic?:boolean | undefined,
	isResolved?:boolean | undefined,
	/** An object relationship */
	job:ModelTypes["job"],
	jobId:ModelTypes["uuid"],
	message?:string | undefined,
	requestParams?:ModelTypes["jsonb"] | undefined,
	resolveParams?:ModelTypes["jsonb"] | undefined,
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	type?:string | undefined,
	updatedAt:ModelTypes["timestamptz"]
};
	/** aggregated selection of "issue" */
["issue_aggregate"]: {
		aggregate?:ModelTypes["issue_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["issue"]> | undefined
};
	/** aggregate fields of "issue" */
["issue_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["issue_max_fields"] | undefined,
	min?:ModelTypes["issue_min_fields"] | undefined
};
	/** order by aggregate values of table "issue" */
["issue_aggregate_order_by"]: GraphQLTypes["issue_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["issue_append_input"]: GraphQLTypes["issue_append_input"];
	/** input type for inserting array relation for remote table "issue" */
["issue_arr_rel_insert_input"]: GraphQLTypes["issue_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "issue". All fields are combined with a logical 'AND'. */
["issue_bool_exp"]: GraphQLTypes["issue_bool_exp"];
	/** unique or primary key constraints on table "issue" */
["issue_constraint"]: GraphQLTypes["issue_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["issue_delete_at_path_input"]: GraphQLTypes["issue_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["issue_delete_elem_input"]: GraphQLTypes["issue_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["issue_delete_key_input"]: GraphQLTypes["issue_delete_key_input"];
	/** input type for inserting data into table "issue" */
["issue_insert_input"]: GraphQLTypes["issue_insert_input"];
	/** aggregate max on columns */
["issue_max_fields"]: {
		code?:string | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	jobId?:ModelTypes["uuid"] | undefined,
	message?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "issue" */
["issue_max_order_by"]: GraphQLTypes["issue_max_order_by"];
	/** aggregate min on columns */
["issue_min_fields"]: {
		code?:string | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	jobId?:ModelTypes["uuid"] | undefined,
	message?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "issue" */
["issue_min_order_by"]: GraphQLTypes["issue_min_order_by"];
	/** response of any mutation on the table "issue" */
["issue_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["issue"]> | undefined
};
	/** on conflict condition type for table "issue" */
["issue_on_conflict"]: GraphQLTypes["issue_on_conflict"];
	/** Ordering options when selecting data from "issue". */
["issue_order_by"]: GraphQLTypes["issue_order_by"];
	/** primary key columns input for table: issue */
["issue_pk_columns_input"]: GraphQLTypes["issue_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["issue_prepend_input"]: GraphQLTypes["issue_prepend_input"];
	/** select columns of table "issue" */
["issue_select_column"]: GraphQLTypes["issue_select_column"];
	/** input type for updating data in table "issue" */
["issue_set_input"]: GraphQLTypes["issue_set_input"];
	/** update columns of table "issue" */
["issue_update_column"]: GraphQLTypes["issue_update_column"];
	/** columns and relationships of "job" */
["job"]: {
		apiVersion?:string | undefined,
	/** An object relationship */
	connection?:ModelTypes["connection"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt:ModelTypes["timestamptz"],
	endedAt?:ModelTypes["timestamptz"] | undefined,
	/** An array relationship */
	entities:Array<ModelTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate:ModelTypes["entity_aggregate"],
	id:ModelTypes["uuid"],
	/** An object relationship */
	integration?:ModelTypes["integration"] | undefined,
	integrationId?:ModelTypes["uuid"] | undefined,
	integrationSdkVersion?:string | undefined,
	integrationVersion?:string | undefined,
	/** An array relationship */
	issues:Array<ModelTypes["issue"]> | undefined,
	/** An aggregate relationship */
	issues_aggregate:ModelTypes["issue_aggregate"],
	logFile?:string | undefined,
	logLink?:string | undefined,
	logs?:ModelTypes["jsonb"] | undefined,
	method?:ModelTypes["job_method_enum"] | undefined,
	params?:ModelTypes["jsonb"] | undefined,
	requestId?:string | undefined,
	response?:ModelTypes["jsonb"] | undefined,
	sdkVersion?:string | undefined,
	startedAt?:ModelTypes["timestamptz"] | undefined,
	status?:ModelTypes["job_status_enum"] | undefined,
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	updatedAt:ModelTypes["timestamptz"]
};
	/** aggregated selection of "job" */
["job_aggregate"]: {
		aggregate?:ModelTypes["job_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["job"]> | undefined
};
	/** aggregate fields of "job" */
["job_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["job_max_fields"] | undefined,
	min?:ModelTypes["job_min_fields"] | undefined
};
	/** order by aggregate values of table "job" */
["job_aggregate_order_by"]: GraphQLTypes["job_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["job_append_input"]: GraphQLTypes["job_append_input"];
	/** input type for inserting array relation for remote table "job" */
["job_arr_rel_insert_input"]: GraphQLTypes["job_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "job". All fields are combined with a logical 'AND'. */
["job_bool_exp"]: GraphQLTypes["job_bool_exp"];
	/** unique or primary key constraints on table "job" */
["job_constraint"]: GraphQLTypes["job_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["job_delete_at_path_input"]: GraphQLTypes["job_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["job_delete_elem_input"]: GraphQLTypes["job_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["job_delete_key_input"]: GraphQLTypes["job_delete_key_input"];
	/** input type for inserting data into table "job" */
["job_insert_input"]: GraphQLTypes["job_insert_input"];
	/** aggregate max on columns */
["job_max_fields"]: {
		apiVersion?:string | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	endedAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	integrationId?:ModelTypes["uuid"] | undefined,
	integrationSdkVersion?:string | undefined,
	integrationVersion?:string | undefined,
	logFile?:string | undefined,
	logLink?:string | undefined,
	requestId?:string | undefined,
	sdkVersion?:string | undefined,
	startedAt?:ModelTypes["timestamptz"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "job" */
["job_max_order_by"]: GraphQLTypes["job_max_order_by"];
	["job_method_enum"]: GraphQLTypes["job_method_enum"];
	/** Boolean expression to compare columns of type "job_method_enum". All fields are combined with logical 'AND'. */
["job_method_enum_comparison_exp"]: GraphQLTypes["job_method_enum_comparison_exp"];
	/** aggregate min on columns */
["job_min_fields"]: {
		apiVersion?:string | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	endedAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	integrationId?:ModelTypes["uuid"] | undefined,
	integrationSdkVersion?:string | undefined,
	integrationVersion?:string | undefined,
	logFile?:string | undefined,
	logLink?:string | undefined,
	requestId?:string | undefined,
	sdkVersion?:string | undefined,
	startedAt?:ModelTypes["timestamptz"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "job" */
["job_min_order_by"]: GraphQLTypes["job_min_order_by"];
	/** response of any mutation on the table "job" */
["job_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["job"]> | undefined
};
	/** input type for inserting object relation for remote table "job" */
["job_obj_rel_insert_input"]: GraphQLTypes["job_obj_rel_insert_input"];
	/** on conflict condition type for table "job" */
["job_on_conflict"]: GraphQLTypes["job_on_conflict"];
	/** Ordering options when selecting data from "job". */
["job_order_by"]: GraphQLTypes["job_order_by"];
	/** primary key columns input for table: job */
["job_pk_columns_input"]: GraphQLTypes["job_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["job_prepend_input"]: GraphQLTypes["job_prepend_input"];
	/** select columns of table "job" */
["job_select_column"]: GraphQLTypes["job_select_column"];
	/** input type for updating data in table "job" */
["job_set_input"]: GraphQLTypes["job_set_input"];
	["job_status_enum"]: GraphQLTypes["job_status_enum"];
	/** Boolean expression to compare columns of type "job_status_enum". All fields are combined with logical 'AND'. */
["job_status_enum_comparison_exp"]: GraphQLTypes["job_status_enum_comparison_exp"];
	/** update columns of table "job" */
["job_update_column"]: GraphQLTypes["job_update_column"];
	/** columns and relationships of "job_method" */
["jobMethod"]: {
		name:string
};
	/** aggregated selection of "job_method" */
["jobMethod_aggregate"]: {
		aggregate?:ModelTypes["jobMethod_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["jobMethod"]> | undefined
};
	/** aggregate fields of "job_method" */
["jobMethod_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["jobMethod_max_fields"] | undefined,
	min?:ModelTypes["jobMethod_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "job_method". All fields are combined with a logical 'AND'. */
["jobMethod_bool_exp"]: GraphQLTypes["jobMethod_bool_exp"];
	/** unique or primary key constraints on table "job_method" */
["jobMethod_constraint"]: GraphQLTypes["jobMethod_constraint"];
	/** input type for inserting data into table "job_method" */
["jobMethod_insert_input"]: GraphQLTypes["jobMethod_insert_input"];
	/** aggregate max on columns */
["jobMethod_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["jobMethod_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "job_method" */
["jobMethod_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["jobMethod"]> | undefined
};
	/** on conflict condition type for table "job_method" */
["jobMethod_on_conflict"]: GraphQLTypes["jobMethod_on_conflict"];
	/** Ordering options when selecting data from "job_method". */
["jobMethod_order_by"]: GraphQLTypes["jobMethod_order_by"];
	/** primary key columns input for table: jobMethod */
["jobMethod_pk_columns_input"]: GraphQLTypes["jobMethod_pk_columns_input"];
	/** select columns of table "job_method" */
["jobMethod_select_column"]: GraphQLTypes["jobMethod_select_column"];
	/** input type for updating data in table "job_method" */
["jobMethod_set_input"]: GraphQLTypes["jobMethod_set_input"];
	/** update columns of table "job_method" */
["jobMethod_update_column"]: GraphQLTypes["jobMethod_update_column"];
	/** columns and relationships of "job_status" */
["jobStatus"]: {
		name:string
};
	/** aggregated selection of "job_status" */
["jobStatus_aggregate"]: {
		aggregate?:ModelTypes["jobStatus_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["jobStatus"]> | undefined
};
	/** aggregate fields of "job_status" */
["jobStatus_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["jobStatus_max_fields"] | undefined,
	min?:ModelTypes["jobStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "job_status". All fields are combined with a logical 'AND'. */
["jobStatus_bool_exp"]: GraphQLTypes["jobStatus_bool_exp"];
	/** unique or primary key constraints on table "job_status" */
["jobStatus_constraint"]: GraphQLTypes["jobStatus_constraint"];
	/** input type for inserting data into table "job_status" */
["jobStatus_insert_input"]: GraphQLTypes["jobStatus_insert_input"];
	/** aggregate max on columns */
["jobStatus_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["jobStatus_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "job_status" */
["jobStatus_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["jobStatus"]> | undefined
};
	/** on conflict condition type for table "job_status" */
["jobStatus_on_conflict"]: GraphQLTypes["jobStatus_on_conflict"];
	/** Ordering options when selecting data from "job_status". */
["jobStatus_order_by"]: GraphQLTypes["jobStatus_order_by"];
	/** primary key columns input for table: jobStatus */
["jobStatus_pk_columns_input"]: GraphQLTypes["jobStatus_pk_columns_input"];
	/** select columns of table "job_status" */
["jobStatus_select_column"]: GraphQLTypes["jobStatus_select_column"];
	/** input type for updating data in table "job_status" */
["jobStatus_set_input"]: GraphQLTypes["jobStatus_set_input"];
	/** update columns of table "job_status" */
["jobStatus_update_column"]: GraphQLTypes["jobStatus_update_column"];
	["jsonb"]:any;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: GraphQLTypes["jsonb_comparison_exp"];
	/** columns and relationships of "line" */
["line"]: {
		/** An object relationship */
	booking?:ModelTypes["booking"] | undefined,
	bookingId?:ModelTypes["uuid"] | undefined,
	centTotal?:number | undefined,
	classification?:ModelTypes["classification_enum"] | undefined,
	/** An object relationship */
	connection?:ModelTypes["connection"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt:ModelTypes["timestamptz"],
	description?:string | undefined,
	/** An array relationship */
	enhancementLines:Array<ModelTypes["line"]> | undefined,
	/** An aggregate relationship */
	enhancementLines_aggregate:ModelTypes["line_aggregate"],
	/** An object relationship */
	enhancingLine?:ModelTypes["line"] | undefined,
	enhancingLineId?:ModelTypes["uuid"] | undefined,
	id:ModelTypes["uuid"],
	invoiceStatus?:string | undefined,
	isEnhanced?:boolean | undefined,
	metadata?:ModelTypes["jsonb"] | undefined,
	originCentTotal?:number | undefined,
	originCurrency?:string | undefined,
	originExchangeRate?:ModelTypes["numeric"] | undefined,
	/** An object relationship */
	payment?:ModelTypes["payment"] | undefined,
	paymentId?:ModelTypes["uuid"] | undefined,
	subclassification?:ModelTypes["subclassification_enum"] | undefined,
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregated selection of "line" */
["line_aggregate"]: {
		aggregate?:ModelTypes["line_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["line"]> | undefined
};
	/** aggregate fields of "line" */
["line_aggregate_fields"]: {
		avg?:ModelTypes["line_avg_fields"] | undefined,
	count:number,
	max?:ModelTypes["line_max_fields"] | undefined,
	min?:ModelTypes["line_min_fields"] | undefined,
	stddev?:ModelTypes["line_stddev_fields"] | undefined,
	stddev_pop?:ModelTypes["line_stddev_pop_fields"] | undefined,
	stddev_samp?:ModelTypes["line_stddev_samp_fields"] | undefined,
	sum?:ModelTypes["line_sum_fields"] | undefined,
	var_pop?:ModelTypes["line_var_pop_fields"] | undefined,
	var_samp?:ModelTypes["line_var_samp_fields"] | undefined,
	variance?:ModelTypes["line_variance_fields"] | undefined
};
	/** order by aggregate values of table "line" */
["line_aggregate_order_by"]: GraphQLTypes["line_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["line_append_input"]: GraphQLTypes["line_append_input"];
	/** input type for inserting array relation for remote table "line" */
["line_arr_rel_insert_input"]: GraphQLTypes["line_arr_rel_insert_input"];
	/** aggregate avg on columns */
["line_avg_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by avg() on columns of table "line" */
["line_avg_order_by"]: GraphQLTypes["line_avg_order_by"];
	/** Boolean expression to filter rows from the table "line". All fields are combined with a logical 'AND'. */
["line_bool_exp"]: GraphQLTypes["line_bool_exp"];
	/** unique or primary key constraints on table "line" */
["line_constraint"]: GraphQLTypes["line_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["line_delete_at_path_input"]: GraphQLTypes["line_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["line_delete_elem_input"]: GraphQLTypes["line_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["line_delete_key_input"]: GraphQLTypes["line_delete_key_input"];
	/** input type for incrementing numeric columns in table "line" */
["line_inc_input"]: GraphQLTypes["line_inc_input"];
	/** input type for inserting data into table "line" */
["line_insert_input"]: GraphQLTypes["line_insert_input"];
	/** aggregate max on columns */
["line_max_fields"]: {
		bookingId?:ModelTypes["uuid"] | undefined,
	centTotal?:number | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	enhancingLineId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	invoiceStatus?:string | undefined,
	originCentTotal?:number | undefined,
	originCurrency?:string | undefined,
	originExchangeRate?:ModelTypes["numeric"] | undefined,
	paymentId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "line" */
["line_max_order_by"]: GraphQLTypes["line_max_order_by"];
	/** aggregate min on columns */
["line_min_fields"]: {
		bookingId?:ModelTypes["uuid"] | undefined,
	centTotal?:number | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	enhancingLineId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	invoiceStatus?:string | undefined,
	originCentTotal?:number | undefined,
	originCurrency?:string | undefined,
	originExchangeRate?:ModelTypes["numeric"] | undefined,
	paymentId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "line" */
["line_min_order_by"]: GraphQLTypes["line_min_order_by"];
	/** response of any mutation on the table "line" */
["line_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["line"]> | undefined
};
	/** input type for inserting object relation for remote table "line" */
["line_obj_rel_insert_input"]: GraphQLTypes["line_obj_rel_insert_input"];
	/** on conflict condition type for table "line" */
["line_on_conflict"]: GraphQLTypes["line_on_conflict"];
	/** Ordering options when selecting data from "line". */
["line_order_by"]: GraphQLTypes["line_order_by"];
	/** primary key columns input for table: line */
["line_pk_columns_input"]: GraphQLTypes["line_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["line_prepend_input"]: GraphQLTypes["line_prepend_input"];
	/** select columns of table "line" */
["line_select_column"]: GraphQLTypes["line_select_column"];
	/** input type for updating data in table "line" */
["line_set_input"]: GraphQLTypes["line_set_input"];
	/** aggregate stddev on columns */
["line_stddev_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by stddev() on columns of table "line" */
["line_stddev_order_by"]: GraphQLTypes["line_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["line_stddev_pop_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by stddev_pop() on columns of table "line" */
["line_stddev_pop_order_by"]: GraphQLTypes["line_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["line_stddev_samp_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by stddev_samp() on columns of table "line" */
["line_stddev_samp_order_by"]: GraphQLTypes["line_stddev_samp_order_by"];
	/** aggregate sum on columns */
["line_sum_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:ModelTypes["numeric"] | undefined
};
	/** order by sum() on columns of table "line" */
["line_sum_order_by"]: GraphQLTypes["line_sum_order_by"];
	/** update columns of table "line" */
["line_update_column"]: GraphQLTypes["line_update_column"];
	/** aggregate var_pop on columns */
["line_var_pop_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by var_pop() on columns of table "line" */
["line_var_pop_order_by"]: GraphQLTypes["line_var_pop_order_by"];
	/** aggregate var_samp on columns */
["line_var_samp_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by var_samp() on columns of table "line" */
["line_var_samp_order_by"]: GraphQLTypes["line_var_samp_order_by"];
	/** aggregate variance on columns */
["line_variance_fields"]: {
		centTotal?:number | undefined,
	originCentTotal?:number | undefined,
	originExchangeRate?:number | undefined
};
	/** order by variance() on columns of table "line" */
["line_variance_order_by"]: GraphQLTypes["line_variance_order_by"];
	/** columns and relationships of "metric" */
["metric"]: {
		/** An object relationship */
	connection:ModelTypes["connection"],
	connectionId:ModelTypes["uuid"],
	createdAt:ModelTypes["timestamptz"],
	ensuedAt:ModelTypes["timestamptz"],
	id:ModelTypes["uuid"],
	metadata:ModelTypes["jsonb"],
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	text?:string | undefined,
	type:string,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt:ModelTypes["timestamptz"],
	value?:ModelTypes["float8"] | undefined
};
	/** aggregated selection of "metric" */
["metric_aggregate"]: {
		aggregate?:ModelTypes["metric_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["metric"]> | undefined
};
	/** aggregate fields of "metric" */
["metric_aggregate_fields"]: {
		avg?:ModelTypes["metric_avg_fields"] | undefined,
	count:number,
	max?:ModelTypes["metric_max_fields"] | undefined,
	min?:ModelTypes["metric_min_fields"] | undefined,
	stddev?:ModelTypes["metric_stddev_fields"] | undefined,
	stddev_pop?:ModelTypes["metric_stddev_pop_fields"] | undefined,
	stddev_samp?:ModelTypes["metric_stddev_samp_fields"] | undefined,
	sum?:ModelTypes["metric_sum_fields"] | undefined,
	var_pop?:ModelTypes["metric_var_pop_fields"] | undefined,
	var_samp?:ModelTypes["metric_var_samp_fields"] | undefined,
	variance?:ModelTypes["metric_variance_fields"] | undefined
};
	/** order by aggregate values of table "metric" */
["metric_aggregate_order_by"]: GraphQLTypes["metric_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["metric_append_input"]: GraphQLTypes["metric_append_input"];
	/** input type for inserting array relation for remote table "metric" */
["metric_arr_rel_insert_input"]: GraphQLTypes["metric_arr_rel_insert_input"];
	/** aggregate avg on columns */
["metric_avg_fields"]: {
		value?:number | undefined
};
	/** order by avg() on columns of table "metric" */
["metric_avg_order_by"]: GraphQLTypes["metric_avg_order_by"];
	/** Boolean expression to filter rows from the table "metric". All fields are combined with a logical 'AND'. */
["metric_bool_exp"]: GraphQLTypes["metric_bool_exp"];
	/** unique or primary key constraints on table "metric" */
["metric_constraint"]: GraphQLTypes["metric_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["metric_delete_at_path_input"]: GraphQLTypes["metric_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["metric_delete_elem_input"]: GraphQLTypes["metric_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["metric_delete_key_input"]: GraphQLTypes["metric_delete_key_input"];
	/** input type for incrementing numeric columns in table "metric" */
["metric_inc_input"]: GraphQLTypes["metric_inc_input"];
	/** input type for inserting data into table "metric" */
["metric_insert_input"]: GraphQLTypes["metric_insert_input"];
	/** aggregate max on columns */
["metric_max_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	ensuedAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	text?:string | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined,
	value?:ModelTypes["float8"] | undefined
};
	/** order by max() on columns of table "metric" */
["metric_max_order_by"]: GraphQLTypes["metric_max_order_by"];
	/** aggregate min on columns */
["metric_min_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	ensuedAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	text?:string | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined,
	value?:ModelTypes["float8"] | undefined
};
	/** order by min() on columns of table "metric" */
["metric_min_order_by"]: GraphQLTypes["metric_min_order_by"];
	/** response of any mutation on the table "metric" */
["metric_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["metric"]> | undefined
};
	/** on conflict condition type for table "metric" */
["metric_on_conflict"]: GraphQLTypes["metric_on_conflict"];
	/** Ordering options when selecting data from "metric". */
["metric_order_by"]: GraphQLTypes["metric_order_by"];
	/** primary key columns input for table: metric */
["metric_pk_columns_input"]: GraphQLTypes["metric_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["metric_prepend_input"]: GraphQLTypes["metric_prepend_input"];
	/** select columns of table "metric" */
["metric_select_column"]: GraphQLTypes["metric_select_column"];
	/** input type for updating data in table "metric" */
["metric_set_input"]: GraphQLTypes["metric_set_input"];
	/** aggregate stddev on columns */
["metric_stddev_fields"]: {
		value?:number | undefined
};
	/** order by stddev() on columns of table "metric" */
["metric_stddev_order_by"]: GraphQLTypes["metric_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["metric_stddev_pop_fields"]: {
		value?:number | undefined
};
	/** order by stddev_pop() on columns of table "metric" */
["metric_stddev_pop_order_by"]: GraphQLTypes["metric_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["metric_stddev_samp_fields"]: {
		value?:number | undefined
};
	/** order by stddev_samp() on columns of table "metric" */
["metric_stddev_samp_order_by"]: GraphQLTypes["metric_stddev_samp_order_by"];
	/** aggregate sum on columns */
["metric_sum_fields"]: {
		value?:ModelTypes["float8"] | undefined
};
	/** order by sum() on columns of table "metric" */
["metric_sum_order_by"]: GraphQLTypes["metric_sum_order_by"];
	/** update columns of table "metric" */
["metric_update_column"]: GraphQLTypes["metric_update_column"];
	/** aggregate var_pop on columns */
["metric_var_pop_fields"]: {
		value?:number | undefined
};
	/** order by var_pop() on columns of table "metric" */
["metric_var_pop_order_by"]: GraphQLTypes["metric_var_pop_order_by"];
	/** aggregate var_samp on columns */
["metric_var_samp_fields"]: {
		value?:number | undefined
};
	/** order by var_samp() on columns of table "metric" */
["metric_var_samp_order_by"]: GraphQLTypes["metric_var_samp_order_by"];
	/** aggregate variance on columns */
["metric_variance_fields"]: {
		value?:number | undefined
};
	/** order by variance() on columns of table "metric" */
["metric_variance_order_by"]: GraphQLTypes["metric_variance_order_by"];
	/** mutation root */
["mutation_root"]: {
		/** delete single row from the table: "booking" */
	deleteBooking?:ModelTypes["booking"] | undefined,
	/** delete single row from the table: "booking_status" */
	deleteBookingStatus?:ModelTypes["bookingStatus"] | undefined,
	/** delete data from the table: "booking_status" */
	deleteBookingStatuses?:ModelTypes["bookingStatus_mutation_response"] | undefined,
	/** delete data from the table: "booking" */
	deleteBookings?:ModelTypes["booking_mutation_response"] | undefined,
	/** delete single row from the table: "classification" */
	deleteClassification?:ModelTypes["classification"] | undefined,
	/** delete data from the table: "classification" */
	deleteClassifications?:ModelTypes["classification_mutation_response"] | undefined,
	/** delete single row from the table: "connection" */
	deleteConnection?:ModelTypes["connection"] | undefined,
	/** delete data from the table: "connection" */
	deleteConnections?:ModelTypes["connection_mutation_response"] | undefined,
	/** delete data from the table: "currency" */
	deleteCurrencies?:ModelTypes["currency_mutation_response"] | undefined,
	/** delete single row from the table: "currency" */
	deleteCurrency?:ModelTypes["currency"] | undefined,
	/** delete data from the table: "entity" */
	deleteEntities?:ModelTypes["entity_mutation_response"] | undefined,
	/** delete single row from the table: "entity" */
	deleteEntity?:ModelTypes["entity"] | undefined,
	/** delete single row from the table: "entity_status" */
	deleteEntityStatus?:ModelTypes["entityStatus"] | undefined,
	/** delete data from the table: "entity_status" */
	deleteEntityStatuses?:ModelTypes["entityStatus_mutation_response"] | undefined,
	/** delete single row from the table: "integration" */
	deleteIntegration?:ModelTypes["integration"] | undefined,
	/** delete single row from the table: "integration_type" */
	deleteIntegrationType?:ModelTypes["integrationType"] | undefined,
	/** delete data from the table: "integration_type" */
	deleteIntegrationTypes?:ModelTypes["integrationType_mutation_response"] | undefined,
	/** delete data from the table: "integration" */
	deleteIntegrations?:ModelTypes["integration_mutation_response"] | undefined,
	/** delete single row from the table: "issue" */
	deleteIssue?:ModelTypes["issue"] | undefined,
	/** delete data from the table: "issue" */
	deleteIssues?:ModelTypes["issue_mutation_response"] | undefined,
	/** delete single row from the table: "job" */
	deleteJob?:ModelTypes["job"] | undefined,
	/** delete single row from the table: "job_method" */
	deleteJobMethod?:ModelTypes["jobMethod"] | undefined,
	/** delete data from the table: "job_method" */
	deleteJobMethods?:ModelTypes["jobMethod_mutation_response"] | undefined,
	/** delete single row from the table: "job_status" */
	deleteJobStatus?:ModelTypes["jobStatus"] | undefined,
	/** delete data from the table: "job_status" */
	deleteJobStatuses?:ModelTypes["jobStatus_mutation_response"] | undefined,
	/** delete data from the table: "job" */
	deleteJobs?:ModelTypes["job_mutation_response"] | undefined,
	/** delete single row from the table: "line" */
	deleteLine?:ModelTypes["line"] | undefined,
	/** delete data from the table: "line" */
	deleteLines?:ModelTypes["line_mutation_response"] | undefined,
	/** delete single row from the table: "metric" */
	deleteMetric?:ModelTypes["metric"] | undefined,
	/** delete data from the table: "metric" */
	deleteMetrics?:ModelTypes["metric_mutation_response"] | undefined,
	/** delete single row from the table: "normalized_type" */
	deleteNormalizedType?:ModelTypes["normalizedType"] | undefined,
	/** delete data from the table: "normalized_type" */
	deleteNormalizedTypes?:ModelTypes["normalizedType_mutation_response"] | undefined,
	/** delete single row from the table: "payment" */
	deletePayment?:ModelTypes["payment"] | undefined,
	/** delete single row from the table: "payment_status" */
	deletePaymentStatus?:ModelTypes["paymentStatus"] | undefined,
	/** delete data from the table: "payment_status" */
	deletePaymentStatuses?:ModelTypes["paymentStatus_mutation_response"] | undefined,
	/** delete single row from the table: "payment_type" */
	deletePaymentType?:ModelTypes["paymentType"] | undefined,
	/** delete data from the table: "payment_type" */
	deletePaymentTypes?:ModelTypes["paymentType_mutation_response"] | undefined,
	/** delete data from the table: "payment" */
	deletePayments?:ModelTypes["payment_mutation_response"] | undefined,
	/** delete single row from the table: "subclassification" */
	deleteSubclassification?:ModelTypes["subclassification"] | undefined,
	/** delete data from the table: "subclassification" */
	deleteSubclassifications?:ModelTypes["subclassification_mutation_response"] | undefined,
	/** delete single row from the table: "tag" */
	deleteTag?:ModelTypes["tag"] | undefined,
	/** delete data from the table: "tag" */
	deleteTags?:ModelTypes["tag_mutation_response"] | undefined,
	/** delete single row from the table: "team" */
	deleteTeam?:ModelTypes["team"] | undefined,
	/** delete single row from the table: "team_user" */
	deleteTeamUser?:ModelTypes["teamUser"] | undefined,
	/** delete data from the table: "team_user" */
	deleteTeamUsers?:ModelTypes["teamUser_mutation_response"] | undefined,
	/** delete data from the table: "team" */
	deleteTeams?:ModelTypes["team_mutation_response"] | undefined,
	/** delete single row from the table: "unit" */
	deleteUnit?:ModelTypes["unit"] | undefined,
	/** delete data from the table: "unit" */
	deleteUnits?:ModelTypes["unit_mutation_response"] | undefined,
	/** delete single row from the table: "user" */
	deleteUser?:ModelTypes["user"] | undefined,
	/** delete single row from the table: "user_status" */
	deleteUserStatus?:ModelTypes["userStatus"] | undefined,
	/** delete data from the table: "user_status" */
	deleteUserStatuses?:ModelTypes["userStatus_mutation_response"] | undefined,
	/** delete data from the table: "user" */
	deleteUsers?:ModelTypes["user_mutation_response"] | undefined,
	/** delete single row from the table: "webhook" */
	deleteWebhook?:ModelTypes["webhook"] | undefined,
	/** delete data from the table: "webhook" */
	deleteWebhooks?:ModelTypes["webhook_mutation_response"] | undefined,
	/** delete data from the table: "booking_channel" */
	delete_booking_channel?:ModelTypes["booking_channel_mutation_response"] | undefined,
	/** delete single row from the table: "booking_channel" */
	delete_booking_channel_by_pk?:ModelTypes["booking_channel"] | undefined,
	/** insert a single row into the table: "booking" */
	insertBooking?:ModelTypes["booking"] | undefined,
	/** insert a single row into the table: "booking_status" */
	insertBookingStatus?:ModelTypes["bookingStatus"] | undefined,
	/** insert data into the table: "booking_status" */
	insertBookingStatuses?:ModelTypes["bookingStatus_mutation_response"] | undefined,
	/** insert data into the table: "booking" */
	insertBookings?:ModelTypes["booking_mutation_response"] | undefined,
	/** insert a single row into the table: "classification" */
	insertClassification?:ModelTypes["classification"] | undefined,
	/** insert data into the table: "classification" */
	insertClassifications?:ModelTypes["classification_mutation_response"] | undefined,
	/** insert a single row into the table: "connection" */
	insertConnection?:ModelTypes["connection"] | undefined,
	/** insert data into the table: "connection" */
	insertConnections?:ModelTypes["connection_mutation_response"] | undefined,
	/** insert data into the table: "currency" */
	insertCurrencies?:ModelTypes["currency_mutation_response"] | undefined,
	/** insert a single row into the table: "currency" */
	insertCurrency?:ModelTypes["currency"] | undefined,
	/** insert data into the table: "entity" */
	insertEntities?:ModelTypes["entity_mutation_response"] | undefined,
	/** insert a single row into the table: "entity" */
	insertEntity?:ModelTypes["entity"] | undefined,
	/** insert a single row into the table: "entity_status" */
	insertEntityStatus?:ModelTypes["entityStatus"] | undefined,
	/** insert data into the table: "entity_status" */
	insertEntityStatuses?:ModelTypes["entityStatus_mutation_response"] | undefined,
	/** insert a single row into the table: "integration" */
	insertIntegration?:ModelTypes["integration"] | undefined,
	/** insert a single row into the table: "integration_type" */
	insertIntegrationType?:ModelTypes["integrationType"] | undefined,
	/** insert data into the table: "integration_type" */
	insertIntegrationTypes?:ModelTypes["integrationType_mutation_response"] | undefined,
	/** insert data into the table: "integration" */
	insertIntegrations?:ModelTypes["integration_mutation_response"] | undefined,
	/** insert a single row into the table: "issue" */
	insertIssue?:ModelTypes["issue"] | undefined,
	/** insert data into the table: "issue" */
	insertIssues?:ModelTypes["issue_mutation_response"] | undefined,
	/** insert a single row into the table: "job" */
	insertJob?:ModelTypes["job"] | undefined,
	/** insert a single row into the table: "job_method" */
	insertJobMethod?:ModelTypes["jobMethod"] | undefined,
	/** insert data into the table: "job_method" */
	insertJobMethods?:ModelTypes["jobMethod_mutation_response"] | undefined,
	/** insert a single row into the table: "job_status" */
	insertJobStatus?:ModelTypes["jobStatus"] | undefined,
	/** insert data into the table: "job_status" */
	insertJobStatuses?:ModelTypes["jobStatus_mutation_response"] | undefined,
	/** insert data into the table: "job" */
	insertJobs?:ModelTypes["job_mutation_response"] | undefined,
	/** insert a single row into the table: "line" */
	insertLine?:ModelTypes["line"] | undefined,
	/** insert data into the table: "line" */
	insertLines?:ModelTypes["line_mutation_response"] | undefined,
	/** insert a single row into the table: "metric" */
	insertMetric?:ModelTypes["metric"] | undefined,
	/** insert data into the table: "metric" */
	insertMetrics?:ModelTypes["metric_mutation_response"] | undefined,
	/** insert a single row into the table: "normalized_type" */
	insertNormalizedType?:ModelTypes["normalizedType"] | undefined,
	/** insert data into the table: "normalized_type" */
	insertNormalizedTypes?:ModelTypes["normalizedType_mutation_response"] | undefined,
	/** insert a single row into the table: "payment" */
	insertPayment?:ModelTypes["payment"] | undefined,
	/** insert a single row into the table: "payment_status" */
	insertPaymentStatus?:ModelTypes["paymentStatus"] | undefined,
	/** insert data into the table: "payment_status" */
	insertPaymentStatuses?:ModelTypes["paymentStatus_mutation_response"] | undefined,
	/** insert a single row into the table: "payment_type" */
	insertPaymentType?:ModelTypes["paymentType"] | undefined,
	/** insert data into the table: "payment_type" */
	insertPaymentTypes?:ModelTypes["paymentType_mutation_response"] | undefined,
	/** insert data into the table: "payment" */
	insertPayments?:ModelTypes["payment_mutation_response"] | undefined,
	/** insert a single row into the table: "subclassification" */
	insertSubclassification?:ModelTypes["subclassification"] | undefined,
	/** insert data into the table: "subclassification" */
	insertSubclassifications?:ModelTypes["subclassification_mutation_response"] | undefined,
	/** insert a single row into the table: "tag" */
	insertTag?:ModelTypes["tag"] | undefined,
	/** insert data into the table: "tag" */
	insertTags?:ModelTypes["tag_mutation_response"] | undefined,
	/** insert a single row into the table: "team" */
	insertTeam?:ModelTypes["team"] | undefined,
	/** insert a single row into the table: "team_user" */
	insertTeamUser?:ModelTypes["teamUser"] | undefined,
	/** insert data into the table: "team_user" */
	insertTeamUsers?:ModelTypes["teamUser_mutation_response"] | undefined,
	/** insert data into the table: "team" */
	insertTeams?:ModelTypes["team_mutation_response"] | undefined,
	/** insert a single row into the table: "unit" */
	insertUnit?:ModelTypes["unit"] | undefined,
	/** insert data into the table: "unit" */
	insertUnits?:ModelTypes["unit_mutation_response"] | undefined,
	/** insert a single row into the table: "user" */
	insertUser?:ModelTypes["user"] | undefined,
	/** insert a single row into the table: "user_status" */
	insertUserStatus?:ModelTypes["userStatus"] | undefined,
	/** insert data into the table: "user_status" */
	insertUserStatuses?:ModelTypes["userStatus_mutation_response"] | undefined,
	/** insert data into the table: "user" */
	insertUsers?:ModelTypes["user_mutation_response"] | undefined,
	/** insert a single row into the table: "webhook" */
	insertWebhook?:ModelTypes["webhook"] | undefined,
	/** insert data into the table: "webhook" */
	insertWebhooks?:ModelTypes["webhook_mutation_response"] | undefined,
	/** insert data into the table: "booking_channel" */
	insert_booking_channel?:ModelTypes["booking_channel_mutation_response"] | undefined,
	/** insert a single row into the table: "booking_channel" */
	insert_booking_channel_one?:ModelTypes["booking_channel"] | undefined,
	/** update single row of the table: "booking" */
	updateBooking?:ModelTypes["booking"] | undefined,
	/** update single row of the table: "booking_status" */
	updateBookingStatus?:ModelTypes["bookingStatus"] | undefined,
	/** update data of the table: "booking_status" */
	updateBookingStatuses?:ModelTypes["bookingStatus_mutation_response"] | undefined,
	/** update data of the table: "booking" */
	updateBookings?:ModelTypes["booking_mutation_response"] | undefined,
	/** update single row of the table: "classification" */
	updateClassification?:ModelTypes["classification"] | undefined,
	/** update data of the table: "classification" */
	updateClassifications?:ModelTypes["classification_mutation_response"] | undefined,
	/** update single row of the table: "connection" */
	updateConnection?:ModelTypes["connection"] | undefined,
	/** update data of the table: "connection" */
	updateConnections?:ModelTypes["connection_mutation_response"] | undefined,
	/** update data of the table: "currency" */
	updateCurrencies?:ModelTypes["currency_mutation_response"] | undefined,
	/** update single row of the table: "currency" */
	updateCurrency?:ModelTypes["currency"] | undefined,
	/** update data of the table: "entity" */
	updateEntities?:ModelTypes["entity_mutation_response"] | undefined,
	/** update single row of the table: "entity" */
	updateEntity?:ModelTypes["entity"] | undefined,
	/** update single row of the table: "entity_status" */
	updateEntityStatus?:ModelTypes["entityStatus"] | undefined,
	/** update data of the table: "entity_status" */
	updateEntityStatuses?:ModelTypes["entityStatus_mutation_response"] | undefined,
	/** update single row of the table: "integration" */
	updateIntegration?:ModelTypes["integration"] | undefined,
	/** update single row of the table: "integration_type" */
	updateIntegrationType?:ModelTypes["integrationType"] | undefined,
	/** update data of the table: "integration_type" */
	updateIntegrationTypes?:ModelTypes["integrationType_mutation_response"] | undefined,
	/** update data of the table: "integration" */
	updateIntegrations?:ModelTypes["integration_mutation_response"] | undefined,
	/** update single row of the table: "issue" */
	updateIssue?:ModelTypes["issue"] | undefined,
	/** update data of the table: "issue" */
	updateIssues?:ModelTypes["issue_mutation_response"] | undefined,
	/** update single row of the table: "job" */
	updateJob?:ModelTypes["job"] | undefined,
	/** update single row of the table: "job_method" */
	updateJobMethod?:ModelTypes["jobMethod"] | undefined,
	/** update data of the table: "job_method" */
	updateJobMethods?:ModelTypes["jobMethod_mutation_response"] | undefined,
	/** update single row of the table: "job_status" */
	updateJobStatus?:ModelTypes["jobStatus"] | undefined,
	/** update data of the table: "job_status" */
	updateJobStatuses?:ModelTypes["jobStatus_mutation_response"] | undefined,
	/** update data of the table: "job" */
	updateJobs?:ModelTypes["job_mutation_response"] | undefined,
	/** update single row of the table: "line" */
	updateLine?:ModelTypes["line"] | undefined,
	/** update data of the table: "line" */
	updateLines?:ModelTypes["line_mutation_response"] | undefined,
	/** update single row of the table: "metric" */
	updateMetric?:ModelTypes["metric"] | undefined,
	/** update data of the table: "metric" */
	updateMetrics?:ModelTypes["metric_mutation_response"] | undefined,
	/** update single row of the table: "normalized_type" */
	updateNormalizedType?:ModelTypes["normalizedType"] | undefined,
	/** update data of the table: "normalized_type" */
	updateNormalizedTypes?:ModelTypes["normalizedType_mutation_response"] | undefined,
	/** update single row of the table: "payment" */
	updatePayment?:ModelTypes["payment"] | undefined,
	/** update single row of the table: "payment_status" */
	updatePaymentStatus?:ModelTypes["paymentStatus"] | undefined,
	/** update data of the table: "payment_status" */
	updatePaymentStatuses?:ModelTypes["paymentStatus_mutation_response"] | undefined,
	/** update single row of the table: "payment_type" */
	updatePaymentType?:ModelTypes["paymentType"] | undefined,
	/** update data of the table: "payment_type" */
	updatePaymentTypes?:ModelTypes["paymentType_mutation_response"] | undefined,
	/** update data of the table: "payment" */
	updatePayments?:ModelTypes["payment_mutation_response"] | undefined,
	/** update single row of the table: "subclassification" */
	updateSubclassification?:ModelTypes["subclassification"] | undefined,
	/** update data of the table: "subclassification" */
	updateSubclassifications?:ModelTypes["subclassification_mutation_response"] | undefined,
	/** update single row of the table: "tag" */
	updateTag?:ModelTypes["tag"] | undefined,
	/** update data of the table: "tag" */
	updateTags?:ModelTypes["tag_mutation_response"] | undefined,
	/** update single row of the table: "team" */
	updateTeam?:ModelTypes["team"] | undefined,
	/** update single row of the table: "team_user" */
	updateTeamUser?:ModelTypes["teamUser"] | undefined,
	/** update data of the table: "team_user" */
	updateTeamUsers?:ModelTypes["teamUser_mutation_response"] | undefined,
	/** update data of the table: "team" */
	updateTeams?:ModelTypes["team_mutation_response"] | undefined,
	/** update single row of the table: "unit" */
	updateUnit?:ModelTypes["unit"] | undefined,
	/** update data of the table: "unit" */
	updateUnits?:ModelTypes["unit_mutation_response"] | undefined,
	/** update single row of the table: "user" */
	updateUser?:ModelTypes["user"] | undefined,
	/** update single row of the table: "user_status" */
	updateUserStatus?:ModelTypes["userStatus"] | undefined,
	/** update data of the table: "user_status" */
	updateUserStatuses?:ModelTypes["userStatus_mutation_response"] | undefined,
	/** update data of the table: "user" */
	updateUsers?:ModelTypes["user_mutation_response"] | undefined,
	/** update single row of the table: "webhook" */
	updateWebhook?:ModelTypes["webhook"] | undefined,
	/** update data of the table: "webhook" */
	updateWebhooks?:ModelTypes["webhook_mutation_response"] | undefined,
	/** update data of the table: "booking_channel" */
	update_booking_channel?:ModelTypes["booking_channel_mutation_response"] | undefined,
	/** update single row of the table: "booking_channel" */
	update_booking_channel_by_pk?:ModelTypes["booking_channel"] | undefined
};
	["normalized_type_enum"]: GraphQLTypes["normalized_type_enum"];
	/** Boolean expression to compare columns of type "normalized_type_enum". All fields are combined with logical 'AND'. */
["normalized_type_enum_comparison_exp"]: GraphQLTypes["normalized_type_enum_comparison_exp"];
	/** columns and relationships of "normalized_type" */
["normalizedType"]: {
		name:string
};
	/** aggregated selection of "normalized_type" */
["normalizedType_aggregate"]: {
		aggregate?:ModelTypes["normalizedType_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["normalizedType"]> | undefined
};
	/** aggregate fields of "normalized_type" */
["normalizedType_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["normalizedType_max_fields"] | undefined,
	min?:ModelTypes["normalizedType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "normalized_type". All fields are combined with a logical 'AND'. */
["normalizedType_bool_exp"]: GraphQLTypes["normalizedType_bool_exp"];
	/** unique or primary key constraints on table "normalized_type" */
["normalizedType_constraint"]: GraphQLTypes["normalizedType_constraint"];
	/** input type for inserting data into table "normalized_type" */
["normalizedType_insert_input"]: GraphQLTypes["normalizedType_insert_input"];
	/** aggregate max on columns */
["normalizedType_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["normalizedType_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "normalized_type" */
["normalizedType_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["normalizedType"]> | undefined
};
	/** on conflict condition type for table "normalized_type" */
["normalizedType_on_conflict"]: GraphQLTypes["normalizedType_on_conflict"];
	/** Ordering options when selecting data from "normalized_type". */
["normalizedType_order_by"]: GraphQLTypes["normalizedType_order_by"];
	/** primary key columns input for table: normalizedType */
["normalizedType_pk_columns_input"]: GraphQLTypes["normalizedType_pk_columns_input"];
	/** select columns of table "normalized_type" */
["normalizedType_select_column"]: GraphQLTypes["normalizedType_select_column"];
	/** input type for updating data in table "normalized_type" */
["normalizedType_set_input"]: GraphQLTypes["normalizedType_set_input"];
	/** update columns of table "normalized_type" */
["normalizedType_update_column"]: GraphQLTypes["normalizedType_update_column"];
	["numeric"]:any;
	/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
["numeric_comparison_exp"]: GraphQLTypes["numeric_comparison_exp"];
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	/** columns and relationships of "payment" */
["payment"]: {
		arrivesAt?:ModelTypes["timestamptz"] | undefined,
	centTotal?:number | undefined,
	/** An object relationship */
	connection?:ModelTypes["connection"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	currency?:ModelTypes["currency_enum"] | undefined,
	description?:string | undefined,
	/** An object relationship */
	entity?:ModelTypes["entity"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id:ModelTypes["uuid"],
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate:ModelTypes["line_aggregate"],
	metadata?:ModelTypes["jsonb"] | undefined,
	paidAt?:ModelTypes["timestamptz"] | undefined,
	status?:ModelTypes["payment_status_enum"] | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate:ModelTypes["tag_aggregate"],
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregated selection of "payment" */
["payment_aggregate"]: {
		aggregate?:ModelTypes["payment_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["payment"]> | undefined
};
	/** aggregate fields of "payment" */
["payment_aggregate_fields"]: {
		avg?:ModelTypes["payment_avg_fields"] | undefined,
	count:number,
	max?:ModelTypes["payment_max_fields"] | undefined,
	min?:ModelTypes["payment_min_fields"] | undefined,
	stddev?:ModelTypes["payment_stddev_fields"] | undefined,
	stddev_pop?:ModelTypes["payment_stddev_pop_fields"] | undefined,
	stddev_samp?:ModelTypes["payment_stddev_samp_fields"] | undefined,
	sum?:ModelTypes["payment_sum_fields"] | undefined,
	var_pop?:ModelTypes["payment_var_pop_fields"] | undefined,
	var_samp?:ModelTypes["payment_var_samp_fields"] | undefined,
	variance?:ModelTypes["payment_variance_fields"] | undefined
};
	/** order by aggregate values of table "payment" */
["payment_aggregate_order_by"]: GraphQLTypes["payment_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["payment_append_input"]: GraphQLTypes["payment_append_input"];
	/** input type for inserting array relation for remote table "payment" */
["payment_arr_rel_insert_input"]: GraphQLTypes["payment_arr_rel_insert_input"];
	/** aggregate avg on columns */
["payment_avg_fields"]: {
		centTotal?:number | undefined
};
	/** order by avg() on columns of table "payment" */
["payment_avg_order_by"]: GraphQLTypes["payment_avg_order_by"];
	/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
["payment_bool_exp"]: GraphQLTypes["payment_bool_exp"];
	/** unique or primary key constraints on table "payment" */
["payment_constraint"]: GraphQLTypes["payment_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["payment_delete_at_path_input"]: GraphQLTypes["payment_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["payment_delete_elem_input"]: GraphQLTypes["payment_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["payment_delete_key_input"]: GraphQLTypes["payment_delete_key_input"];
	/** input type for incrementing numeric columns in table "payment" */
["payment_inc_input"]: GraphQLTypes["payment_inc_input"];
	/** input type for inserting data into table "payment" */
["payment_insert_input"]: GraphQLTypes["payment_insert_input"];
	/** aggregate max on columns */
["payment_max_fields"]: {
		arrivesAt?:ModelTypes["timestamptz"] | undefined,
	centTotal?:number | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	paidAt?:ModelTypes["timestamptz"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "payment" */
["payment_max_order_by"]: GraphQLTypes["payment_max_order_by"];
	/** aggregate min on columns */
["payment_min_fields"]: {
		arrivesAt?:ModelTypes["timestamptz"] | undefined,
	centTotal?:number | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	description?:string | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	paidAt?:ModelTypes["timestamptz"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "payment" */
["payment_min_order_by"]: GraphQLTypes["payment_min_order_by"];
	/** response of any mutation on the table "payment" */
["payment_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["payment"]> | undefined
};
	/** input type for inserting object relation for remote table "payment" */
["payment_obj_rel_insert_input"]: GraphQLTypes["payment_obj_rel_insert_input"];
	/** on conflict condition type for table "payment" */
["payment_on_conflict"]: GraphQLTypes["payment_on_conflict"];
	/** Ordering options when selecting data from "payment". */
["payment_order_by"]: GraphQLTypes["payment_order_by"];
	/** primary key columns input for table: payment */
["payment_pk_columns_input"]: GraphQLTypes["payment_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["payment_prepend_input"]: GraphQLTypes["payment_prepend_input"];
	/** select columns of table "payment" */
["payment_select_column"]: GraphQLTypes["payment_select_column"];
	/** input type for updating data in table "payment" */
["payment_set_input"]: GraphQLTypes["payment_set_input"];
	["payment_status_enum"]: GraphQLTypes["payment_status_enum"];
	/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
["payment_status_enum_comparison_exp"]: GraphQLTypes["payment_status_enum_comparison_exp"];
	/** aggregate stddev on columns */
["payment_stddev_fields"]: {
		centTotal?:number | undefined
};
	/** order by stddev() on columns of table "payment" */
["payment_stddev_order_by"]: GraphQLTypes["payment_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["payment_stddev_pop_fields"]: {
		centTotal?:number | undefined
};
	/** order by stddev_pop() on columns of table "payment" */
["payment_stddev_pop_order_by"]: GraphQLTypes["payment_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["payment_stddev_samp_fields"]: {
		centTotal?:number | undefined
};
	/** order by stddev_samp() on columns of table "payment" */
["payment_stddev_samp_order_by"]: GraphQLTypes["payment_stddev_samp_order_by"];
	/** aggregate sum on columns */
["payment_sum_fields"]: {
		centTotal?:number | undefined
};
	/** order by sum() on columns of table "payment" */
["payment_sum_order_by"]: GraphQLTypes["payment_sum_order_by"];
	/** update columns of table "payment" */
["payment_update_column"]: GraphQLTypes["payment_update_column"];
	/** aggregate var_pop on columns */
["payment_var_pop_fields"]: {
		centTotal?:number | undefined
};
	/** order by var_pop() on columns of table "payment" */
["payment_var_pop_order_by"]: GraphQLTypes["payment_var_pop_order_by"];
	/** aggregate var_samp on columns */
["payment_var_samp_fields"]: {
		centTotal?:number | undefined
};
	/** order by var_samp() on columns of table "payment" */
["payment_var_samp_order_by"]: GraphQLTypes["payment_var_samp_order_by"];
	/** aggregate variance on columns */
["payment_variance_fields"]: {
		centTotal?:number | undefined
};
	/** order by variance() on columns of table "payment" */
["payment_variance_order_by"]: GraphQLTypes["payment_variance_order_by"];
	/** columns and relationships of "payment_status" */
["paymentStatus"]: {
		name:string
};
	/** aggregated selection of "payment_status" */
["paymentStatus_aggregate"]: {
		aggregate?:ModelTypes["paymentStatus_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["paymentStatus"]> | undefined
};
	/** aggregate fields of "payment_status" */
["paymentStatus_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["paymentStatus_max_fields"] | undefined,
	min?:ModelTypes["paymentStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
["paymentStatus_bool_exp"]: GraphQLTypes["paymentStatus_bool_exp"];
	/** unique or primary key constraints on table "payment_status" */
["paymentStatus_constraint"]: GraphQLTypes["paymentStatus_constraint"];
	/** input type for inserting data into table "payment_status" */
["paymentStatus_insert_input"]: GraphQLTypes["paymentStatus_insert_input"];
	/** aggregate max on columns */
["paymentStatus_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["paymentStatus_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "payment_status" */
["paymentStatus_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["paymentStatus"]> | undefined
};
	/** on conflict condition type for table "payment_status" */
["paymentStatus_on_conflict"]: GraphQLTypes["paymentStatus_on_conflict"];
	/** Ordering options when selecting data from "payment_status". */
["paymentStatus_order_by"]: GraphQLTypes["paymentStatus_order_by"];
	/** primary key columns input for table: paymentStatus */
["paymentStatus_pk_columns_input"]: GraphQLTypes["paymentStatus_pk_columns_input"];
	/** select columns of table "payment_status" */
["paymentStatus_select_column"]: GraphQLTypes["paymentStatus_select_column"];
	/** input type for updating data in table "payment_status" */
["paymentStatus_set_input"]: GraphQLTypes["paymentStatus_set_input"];
	/** update columns of table "payment_status" */
["paymentStatus_update_column"]: GraphQLTypes["paymentStatus_update_column"];
	/** columns and relationships of "payment_type" */
["paymentType"]: {
		name:string
};
	/** aggregated selection of "payment_type" */
["paymentType_aggregate"]: {
		aggregate?:ModelTypes["paymentType_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["paymentType"]> | undefined
};
	/** aggregate fields of "payment_type" */
["paymentType_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["paymentType_max_fields"] | undefined,
	min?:ModelTypes["paymentType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "payment_type". All fields are combined with a logical 'AND'. */
["paymentType_bool_exp"]: GraphQLTypes["paymentType_bool_exp"];
	/** unique or primary key constraints on table "payment_type" */
["paymentType_constraint"]: GraphQLTypes["paymentType_constraint"];
	/** input type for inserting data into table "payment_type" */
["paymentType_insert_input"]: GraphQLTypes["paymentType_insert_input"];
	/** aggregate max on columns */
["paymentType_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["paymentType_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "payment_type" */
["paymentType_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["paymentType"]> | undefined
};
	/** on conflict condition type for table "payment_type" */
["paymentType_on_conflict"]: GraphQLTypes["paymentType_on_conflict"];
	/** Ordering options when selecting data from "payment_type". */
["paymentType_order_by"]: GraphQLTypes["paymentType_order_by"];
	/** primary key columns input for table: paymentType */
["paymentType_pk_columns_input"]: GraphQLTypes["paymentType_pk_columns_input"];
	/** select columns of table "payment_type" */
["paymentType_select_column"]: GraphQLTypes["paymentType_select_column"];
	/** input type for updating data in table "payment_type" */
["paymentType_set_input"]: GraphQLTypes["paymentType_set_input"];
	/** update columns of table "payment_type" */
["paymentType_update_column"]: GraphQLTypes["paymentType_update_column"];
	["query_root"]: {
		/** fetch aggregated fields from the table: "booking_status" */
	aggregateBookingStatuses:ModelTypes["bookingStatus_aggregate"],
	/** fetch aggregated fields from the table: "booking" */
	aggregateBookings:ModelTypes["booking_aggregate"],
	/** fetch aggregated fields from the table: "classification" */
	aggregateClassifications:ModelTypes["classification_aggregate"],
	/** fetch aggregated fields from the table: "connection" */
	aggregateConnections:ModelTypes["connection_aggregate"],
	/** fetch aggregated fields from the table: "currency" */
	aggregateCurrencies:ModelTypes["currency_aggregate"],
	/** fetch aggregated fields from the table: "entity" */
	aggregateEntities:ModelTypes["entity_aggregate"],
	/** fetch aggregated fields from the table: "entity_status" */
	aggregateEntityStatuses:ModelTypes["entityStatus_aggregate"],
	/** fetch aggregated fields from the table: "integration_type" */
	aggregateIntegrationTypes:ModelTypes["integrationType_aggregate"],
	/** fetch aggregated fields from the table: "integration" */
	aggregateIntegrations:ModelTypes["integration_aggregate"],
	/** fetch aggregated fields from the table: "issue" */
	aggregateIssues:ModelTypes["issue_aggregate"],
	/** fetch aggregated fields from the table: "job_method" */
	aggregateJobMethods:ModelTypes["jobMethod_aggregate"],
	/** fetch aggregated fields from the table: "job_status" */
	aggregateJobStatuses:ModelTypes["jobStatus_aggregate"],
	/** fetch aggregated fields from the table: "job" */
	aggregateJobs:ModelTypes["job_aggregate"],
	/** fetch aggregated fields from the table: "line" */
	aggregateLines:ModelTypes["line_aggregate"],
	/** fetch aggregated fields from the table: "metric" */
	aggregateMetrics:ModelTypes["metric_aggregate"],
	/** fetch aggregated fields from the table: "normalized_type" */
	aggregateNormalizedTypes:ModelTypes["normalizedType_aggregate"],
	/** fetch aggregated fields from the table: "payment_status" */
	aggregatePaymentStatuses:ModelTypes["paymentStatus_aggregate"],
	/** fetch aggregated fields from the table: "payment_type" */
	aggregatePaymentTypes:ModelTypes["paymentType_aggregate"],
	/** fetch aggregated fields from the table: "payment" */
	aggregatePayments:ModelTypes["payment_aggregate"],
	/** fetch aggregated fields from the table: "subclassification" */
	aggregateSubclassifications:ModelTypes["subclassification_aggregate"],
	/** fetch aggregated fields from the table: "tag" */
	aggregateTags:ModelTypes["tag_aggregate"],
	/** fetch aggregated fields from the table: "team_user" */
	aggregateTeamUsers:ModelTypes["teamUser_aggregate"],
	/** fetch aggregated fields from the table: "team" */
	aggregateTeams:ModelTypes["team_aggregate"],
	/** fetch aggregated fields from the table: "unit" */
	aggregateUnits:ModelTypes["unit_aggregate"],
	/** fetch aggregated fields from the table: "user_status" */
	aggregateUserStatuses:ModelTypes["userStatus_aggregate"],
	/** fetch aggregated fields from the table: "user" */
	aggregateUsers:ModelTypes["user_aggregate"],
	/** fetch aggregated fields from the table: "webhook" */
	aggregateWebhooks:ModelTypes["webhook_aggregate"],
	/** fetch data from the table: "booking" using primary key columns */
	booking?:ModelTypes["booking"] | undefined,
	/** fetch data from the table: "booking_status" using primary key columns */
	bookingStatus?:ModelTypes["bookingStatus"] | undefined,
	/** fetch data from the table: "booking_status" */
	bookingStatuses:Array<ModelTypes["bookingStatus"]> | undefined,
	/** fetch data from the table: "booking_channel" */
	booking_channel:Array<ModelTypes["booking_channel"]> | undefined,
	/** fetch aggregated fields from the table: "booking_channel" */
	booking_channel_aggregate:ModelTypes["booking_channel_aggregate"],
	/** fetch data from the table: "booking_channel" using primary key columns */
	booking_channel_by_pk?:ModelTypes["booking_channel"] | undefined,
	/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** fetch data from the table: "classification" using primary key columns */
	classification?:ModelTypes["classification"] | undefined,
	/** fetch data from the table: "classification" */
	classifications:Array<ModelTypes["classification"]> | undefined,
	/** fetch data from the table: "connection" using primary key columns */
	connection?:ModelTypes["connection"] | undefined,
	/** An array relationship */
	connections:Array<ModelTypes["connection"]> | undefined,
	/** fetch data from the table: "currency" */
	currencies:Array<ModelTypes["currency"]> | undefined,
	/** fetch data from the table: "currency" using primary key columns */
	currency?:ModelTypes["currency"] | undefined,
	/** An array relationship */
	entities:Array<ModelTypes["entity"]> | undefined,
	/** fetch data from the table: "entity" using primary key columns */
	entity?:ModelTypes["entity"] | undefined,
	/** fetch data from the table: "entity_status" using primary key columns */
	entityStatus?:ModelTypes["entityStatus"] | undefined,
	/** fetch data from the table: "entity_status" */
	entityStatuses:Array<ModelTypes["entityStatus"]> | undefined,
	/** fetch data from the table: "integration" using primary key columns */
	integration?:ModelTypes["integration"] | undefined,
	/** fetch data from the table: "integration_type" using primary key columns */
	integrationType?:ModelTypes["integrationType"] | undefined,
	/** fetch data from the table: "integration_type" */
	integrationTypes:Array<ModelTypes["integrationType"]> | undefined,
	/** An array relationship */
	integrations:Array<ModelTypes["integration"]> | undefined,
	/** fetch data from the table: "issue" using primary key columns */
	issue?:ModelTypes["issue"] | undefined,
	/** An array relationship */
	issues:Array<ModelTypes["issue"]> | undefined,
	/** fetch data from the table: "job" using primary key columns */
	job?:ModelTypes["job"] | undefined,
	/** fetch data from the table: "job_method" using primary key columns */
	jobMethod?:ModelTypes["jobMethod"] | undefined,
	/** fetch data from the table: "job_method" */
	jobMethods:Array<ModelTypes["jobMethod"]> | undefined,
	/** fetch data from the table: "job_status" using primary key columns */
	jobStatus?:ModelTypes["jobStatus"] | undefined,
	/** fetch data from the table: "job_status" */
	jobStatuses:Array<ModelTypes["jobStatus"]> | undefined,
	/** An array relationship */
	jobs:Array<ModelTypes["job"]> | undefined,
	/** fetch data from the table: "line" using primary key columns */
	line?:ModelTypes["line"] | undefined,
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** fetch data from the table: "metric" using primary key columns */
	metric?:ModelTypes["metric"] | undefined,
	/** An array relationship */
	metrics:Array<ModelTypes["metric"]> | undefined,
	/** fetch data from the table: "normalized_type" using primary key columns */
	normalizedType?:ModelTypes["normalizedType"] | undefined,
	/** fetch data from the table: "normalized_type" */
	normalizedTypes:Array<ModelTypes["normalizedType"]> | undefined,
	/** fetch data from the table: "payment" using primary key columns */
	payment?:ModelTypes["payment"] | undefined,
	/** fetch data from the table: "payment_status" using primary key columns */
	paymentStatus?:ModelTypes["paymentStatus"] | undefined,
	/** fetch data from the table: "payment_status" */
	paymentStatuses:Array<ModelTypes["paymentStatus"]> | undefined,
	/** fetch data from the table: "payment_type" using primary key columns */
	paymentType?:ModelTypes["paymentType"] | undefined,
	/** fetch data from the table: "payment_type" */
	paymentTypes:Array<ModelTypes["paymentType"]> | undefined,
	/** An array relationship */
	payments:Array<ModelTypes["payment"]> | undefined,
	/** fetch data from the table: "subclassification" using primary key columns */
	subclassification?:ModelTypes["subclassification"] | undefined,
	/** fetch data from the table: "subclassification" */
	subclassifications:Array<ModelTypes["subclassification"]> | undefined,
	/** fetch data from the table: "tag" using primary key columns */
	tag?:ModelTypes["tag"] | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** fetch data from the table: "team" using primary key columns */
	team?:ModelTypes["team"] | undefined,
	/** fetch data from the table: "team_user" using primary key columns */
	teamUser?:ModelTypes["teamUser"] | undefined,
	/** fetch data from the table: "team_user" */
	teamUsers:Array<ModelTypes["teamUser"]> | undefined,
	/** fetch data from the table: "team" */
	teams:Array<ModelTypes["team"]> | undefined,
	/** fetch data from the table: "unit" using primary key columns */
	unit?:ModelTypes["unit"] | undefined,
	/** An array relationship */
	units:Array<ModelTypes["unit"]> | undefined,
	/** fetch data from the table: "user" using primary key columns */
	user?:ModelTypes["user"] | undefined,
	/** fetch data from the table: "user_status" using primary key columns */
	userStatus?:ModelTypes["userStatus"] | undefined,
	/** fetch data from the table: "user_status" */
	userStatuses:Array<ModelTypes["userStatus"]> | undefined,
	/** fetch data from the table: "user" */
	users:Array<ModelTypes["user"]> | undefined,
	/** fetch data from the table: "webhook" using primary key columns */
	webhook?:ModelTypes["webhook"] | undefined,
	/** An array relationship */
	webhooks:Array<ModelTypes["webhook"]> | undefined
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** columns and relationships of "subclassification" */
["subclassification"]: {
		name:string
};
	/** aggregated selection of "subclassification" */
["subclassification_aggregate"]: {
		aggregate?:ModelTypes["subclassification_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["subclassification"]> | undefined
};
	/** aggregate fields of "subclassification" */
["subclassification_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["subclassification_max_fields"] | undefined,
	min?:ModelTypes["subclassification_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "subclassification". All fields are combined with a logical 'AND'. */
["subclassification_bool_exp"]: GraphQLTypes["subclassification_bool_exp"];
	/** unique or primary key constraints on table "subclassification" */
["subclassification_constraint"]: GraphQLTypes["subclassification_constraint"];
	["subclassification_enum"]: GraphQLTypes["subclassification_enum"];
	/** Boolean expression to compare columns of type "subclassification_enum". All fields are combined with logical 'AND'. */
["subclassification_enum_comparison_exp"]: GraphQLTypes["subclassification_enum_comparison_exp"];
	/** input type for inserting data into table "subclassification" */
["subclassification_insert_input"]: GraphQLTypes["subclassification_insert_input"];
	/** aggregate max on columns */
["subclassification_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["subclassification_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "subclassification" */
["subclassification_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["subclassification"]> | undefined
};
	/** on conflict condition type for table "subclassification" */
["subclassification_on_conflict"]: GraphQLTypes["subclassification_on_conflict"];
	/** Ordering options when selecting data from "subclassification". */
["subclassification_order_by"]: GraphQLTypes["subclassification_order_by"];
	/** primary key columns input for table: subclassification */
["subclassification_pk_columns_input"]: GraphQLTypes["subclassification_pk_columns_input"];
	/** select columns of table "subclassification" */
["subclassification_select_column"]: GraphQLTypes["subclassification_select_column"];
	/** input type for updating data in table "subclassification" */
["subclassification_set_input"]: GraphQLTypes["subclassification_set_input"];
	/** update columns of table "subclassification" */
["subclassification_update_column"]: GraphQLTypes["subclassification_update_column"];
	["subscription_root"]: {
		/** fetch aggregated fields from the table: "booking_status" */
	aggregateBookingStatuses:ModelTypes["bookingStatus_aggregate"],
	/** fetch aggregated fields from the table: "booking" */
	aggregateBookings:ModelTypes["booking_aggregate"],
	/** fetch aggregated fields from the table: "classification" */
	aggregateClassifications:ModelTypes["classification_aggregate"],
	/** fetch aggregated fields from the table: "connection" */
	aggregateConnections:ModelTypes["connection_aggregate"],
	/** fetch aggregated fields from the table: "currency" */
	aggregateCurrencies:ModelTypes["currency_aggregate"],
	/** fetch aggregated fields from the table: "entity" */
	aggregateEntities:ModelTypes["entity_aggregate"],
	/** fetch aggregated fields from the table: "entity_status" */
	aggregateEntityStatuses:ModelTypes["entityStatus_aggregate"],
	/** fetch aggregated fields from the table: "integration_type" */
	aggregateIntegrationTypes:ModelTypes["integrationType_aggregate"],
	/** fetch aggregated fields from the table: "integration" */
	aggregateIntegrations:ModelTypes["integration_aggregate"],
	/** fetch aggregated fields from the table: "issue" */
	aggregateIssues:ModelTypes["issue_aggregate"],
	/** fetch aggregated fields from the table: "job_method" */
	aggregateJobMethods:ModelTypes["jobMethod_aggregate"],
	/** fetch aggregated fields from the table: "job_status" */
	aggregateJobStatuses:ModelTypes["jobStatus_aggregate"],
	/** fetch aggregated fields from the table: "job" */
	aggregateJobs:ModelTypes["job_aggregate"],
	/** fetch aggregated fields from the table: "line" */
	aggregateLines:ModelTypes["line_aggregate"],
	/** fetch aggregated fields from the table: "metric" */
	aggregateMetrics:ModelTypes["metric_aggregate"],
	/** fetch aggregated fields from the table: "normalized_type" */
	aggregateNormalizedTypes:ModelTypes["normalizedType_aggregate"],
	/** fetch aggregated fields from the table: "payment_status" */
	aggregatePaymentStatuses:ModelTypes["paymentStatus_aggregate"],
	/** fetch aggregated fields from the table: "payment_type" */
	aggregatePaymentTypes:ModelTypes["paymentType_aggregate"],
	/** fetch aggregated fields from the table: "payment" */
	aggregatePayments:ModelTypes["payment_aggregate"],
	/** fetch aggregated fields from the table: "subclassification" */
	aggregateSubclassifications:ModelTypes["subclassification_aggregate"],
	/** fetch aggregated fields from the table: "tag" */
	aggregateTags:ModelTypes["tag_aggregate"],
	/** fetch aggregated fields from the table: "team_user" */
	aggregateTeamUsers:ModelTypes["teamUser_aggregate"],
	/** fetch aggregated fields from the table: "team" */
	aggregateTeams:ModelTypes["team_aggregate"],
	/** fetch aggregated fields from the table: "unit" */
	aggregateUnits:ModelTypes["unit_aggregate"],
	/** fetch aggregated fields from the table: "user_status" */
	aggregateUserStatuses:ModelTypes["userStatus_aggregate"],
	/** fetch aggregated fields from the table: "user" */
	aggregateUsers:ModelTypes["user_aggregate"],
	/** fetch aggregated fields from the table: "webhook" */
	aggregateWebhooks:ModelTypes["webhook_aggregate"],
	/** fetch data from the table: "booking" using primary key columns */
	booking?:ModelTypes["booking"] | undefined,
	/** fetch data from the table: "booking_status" using primary key columns */
	bookingStatus?:ModelTypes["bookingStatus"] | undefined,
	/** fetch data from the table: "booking_status" */
	bookingStatuses:Array<ModelTypes["bookingStatus"]> | undefined,
	/** fetch data from the table: "booking_channel" */
	booking_channel:Array<ModelTypes["booking_channel"]> | undefined,
	/** fetch aggregated fields from the table: "booking_channel" */
	booking_channel_aggregate:ModelTypes["booking_channel_aggregate"],
	/** fetch data from the table: "booking_channel" using primary key columns */
	booking_channel_by_pk?:ModelTypes["booking_channel"] | undefined,
	/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** fetch data from the table: "classification" using primary key columns */
	classification?:ModelTypes["classification"] | undefined,
	/** fetch data from the table: "classification" */
	classifications:Array<ModelTypes["classification"]> | undefined,
	/** fetch data from the table: "connection" using primary key columns */
	connection?:ModelTypes["connection"] | undefined,
	/** An array relationship */
	connections:Array<ModelTypes["connection"]> | undefined,
	/** fetch data from the table: "currency" */
	currencies:Array<ModelTypes["currency"]> | undefined,
	/** fetch data from the table: "currency" using primary key columns */
	currency?:ModelTypes["currency"] | undefined,
	/** An array relationship */
	entities:Array<ModelTypes["entity"]> | undefined,
	/** fetch data from the table: "entity" using primary key columns */
	entity?:ModelTypes["entity"] | undefined,
	/** fetch data from the table: "entity_status" using primary key columns */
	entityStatus?:ModelTypes["entityStatus"] | undefined,
	/** fetch data from the table: "entity_status" */
	entityStatuses:Array<ModelTypes["entityStatus"]> | undefined,
	/** fetch data from the table: "integration" using primary key columns */
	integration?:ModelTypes["integration"] | undefined,
	/** fetch data from the table: "integration_type" using primary key columns */
	integrationType?:ModelTypes["integrationType"] | undefined,
	/** fetch data from the table: "integration_type" */
	integrationTypes:Array<ModelTypes["integrationType"]> | undefined,
	/** An array relationship */
	integrations:Array<ModelTypes["integration"]> | undefined,
	/** fetch data from the table: "issue" using primary key columns */
	issue?:ModelTypes["issue"] | undefined,
	/** An array relationship */
	issues:Array<ModelTypes["issue"]> | undefined,
	/** fetch data from the table: "job" using primary key columns */
	job?:ModelTypes["job"] | undefined,
	/** fetch data from the table: "job_method" using primary key columns */
	jobMethod?:ModelTypes["jobMethod"] | undefined,
	/** fetch data from the table: "job_method" */
	jobMethods:Array<ModelTypes["jobMethod"]> | undefined,
	/** fetch data from the table: "job_status" using primary key columns */
	jobStatus?:ModelTypes["jobStatus"] | undefined,
	/** fetch data from the table: "job_status" */
	jobStatuses:Array<ModelTypes["jobStatus"]> | undefined,
	/** An array relationship */
	jobs:Array<ModelTypes["job"]> | undefined,
	/** fetch data from the table: "line" using primary key columns */
	line?:ModelTypes["line"] | undefined,
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** fetch data from the table: "metric" using primary key columns */
	metric?:ModelTypes["metric"] | undefined,
	/** An array relationship */
	metrics:Array<ModelTypes["metric"]> | undefined,
	/** fetch data from the table: "normalized_type" using primary key columns */
	normalizedType?:ModelTypes["normalizedType"] | undefined,
	/** fetch data from the table: "normalized_type" */
	normalizedTypes:Array<ModelTypes["normalizedType"]> | undefined,
	/** fetch data from the table: "payment" using primary key columns */
	payment?:ModelTypes["payment"] | undefined,
	/** fetch data from the table: "payment_status" using primary key columns */
	paymentStatus?:ModelTypes["paymentStatus"] | undefined,
	/** fetch data from the table: "payment_status" */
	paymentStatuses:Array<ModelTypes["paymentStatus"]> | undefined,
	/** fetch data from the table: "payment_type" using primary key columns */
	paymentType?:ModelTypes["paymentType"] | undefined,
	/** fetch data from the table: "payment_type" */
	paymentTypes:Array<ModelTypes["paymentType"]> | undefined,
	/** An array relationship */
	payments:Array<ModelTypes["payment"]> | undefined,
	/** fetch data from the table: "subclassification" using primary key columns */
	subclassification?:ModelTypes["subclassification"] | undefined,
	/** fetch data from the table: "subclassification" */
	subclassifications:Array<ModelTypes["subclassification"]> | undefined,
	/** fetch data from the table: "tag" using primary key columns */
	tag?:ModelTypes["tag"] | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** fetch data from the table: "team" using primary key columns */
	team?:ModelTypes["team"] | undefined,
	/** fetch data from the table: "team_user" using primary key columns */
	teamUser?:ModelTypes["teamUser"] | undefined,
	/** fetch data from the table: "team_user" */
	teamUsers:Array<ModelTypes["teamUser"]> | undefined,
	/** fetch data from the table: "team" */
	teams:Array<ModelTypes["team"]> | undefined,
	/** fetch data from the table: "unit" using primary key columns */
	unit?:ModelTypes["unit"] | undefined,
	/** An array relationship */
	units:Array<ModelTypes["unit"]> | undefined,
	/** fetch data from the table: "user" using primary key columns */
	user?:ModelTypes["user"] | undefined,
	/** fetch data from the table: "user_status" using primary key columns */
	userStatus?:ModelTypes["userStatus"] | undefined,
	/** fetch data from the table: "user_status" */
	userStatuses:Array<ModelTypes["userStatus"]> | undefined,
	/** fetch data from the table: "user" */
	users:Array<ModelTypes["user"]> | undefined,
	/** fetch data from the table: "webhook" using primary key columns */
	webhook?:ModelTypes["webhook"] | undefined,
	/** An array relationship */
	webhooks:Array<ModelTypes["webhook"]> | undefined
};
	/** columns and relationships of "tag" */
["tag"]: {
		/** An object relationship */
	booking:ModelTypes["booking"],
	bookingId:ModelTypes["uuid"],
	/** An object relationship */
	connection:ModelTypes["connection"],
	connectionId:ModelTypes["uuid"],
	createdAt?:ModelTypes["timestamptz"] | undefined,
	id:ModelTypes["uuid"],
	json:ModelTypes["jsonb"],
	/** An object relationship */
	payment:ModelTypes["payment"],
	paymentId:ModelTypes["uuid"],
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	type:string,
	uniqueRef:string,
	/** An object relationship */
	unit:ModelTypes["unit"],
	unitId:ModelTypes["uuid"],
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregated selection of "tag" */
["tag_aggregate"]: {
		aggregate?:ModelTypes["tag_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["tag"]> | undefined
};
	/** aggregate fields of "tag" */
["tag_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["tag_max_fields"] | undefined,
	min?:ModelTypes["tag_min_fields"] | undefined
};
	/** order by aggregate values of table "tag" */
["tag_aggregate_order_by"]: GraphQLTypes["tag_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["tag_append_input"]: GraphQLTypes["tag_append_input"];
	/** input type for inserting array relation for remote table "tag" */
["tag_arr_rel_insert_input"]: GraphQLTypes["tag_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
["tag_bool_exp"]: GraphQLTypes["tag_bool_exp"];
	/** unique or primary key constraints on table "tag" */
["tag_constraint"]: GraphQLTypes["tag_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["tag_delete_at_path_input"]: GraphQLTypes["tag_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["tag_delete_elem_input"]: GraphQLTypes["tag_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["tag_delete_key_input"]: GraphQLTypes["tag_delete_key_input"];
	/** input type for inserting data into table "tag" */
["tag_insert_input"]: GraphQLTypes["tag_insert_input"];
	/** aggregate max on columns */
["tag_max_fields"]: {
		bookingId?:ModelTypes["uuid"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	paymentId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "tag" */
["tag_max_order_by"]: GraphQLTypes["tag_max_order_by"];
	/** aggregate min on columns */
["tag_min_fields"]: {
		bookingId?:ModelTypes["uuid"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	paymentId?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	type?:string | undefined,
	uniqueRef?:string | undefined,
	unitId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "tag" */
["tag_min_order_by"]: GraphQLTypes["tag_min_order_by"];
	/** response of any mutation on the table "tag" */
["tag_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["tag"]> | undefined
};
	/** on conflict condition type for table "tag" */
["tag_on_conflict"]: GraphQLTypes["tag_on_conflict"];
	/** Ordering options when selecting data from "tag". */
["tag_order_by"]: GraphQLTypes["tag_order_by"];
	/** primary key columns input for table: tag */
["tag_pk_columns_input"]: GraphQLTypes["tag_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["tag_prepend_input"]: GraphQLTypes["tag_prepend_input"];
	/** select columns of table "tag" */
["tag_select_column"]: GraphQLTypes["tag_select_column"];
	/** input type for updating data in table "tag" */
["tag_set_input"]: GraphQLTypes["tag_set_input"];
	/** update columns of table "tag" */
["tag_update_column"]: GraphQLTypes["tag_update_column"];
	/** columns and relationships of "team" */
["team"]: {
		address?:string | undefined,
	/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate:ModelTypes["booking_aggregate"],
	commissionPercentage?:ModelTypes["numeric"] | undefined,
	/** An array relationship */
	connections:Array<ModelTypes["connection"]> | undefined,
	/** An aggregate relationship */
	connections_aggregate:ModelTypes["connection_aggregate"],
	createdAt:ModelTypes["timestamptz"],
	email?:string | undefined,
	/** An array relationship */
	entities:Array<ModelTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate:ModelTypes["entity_aggregate"],
	id:ModelTypes["uuid"],
	/** An array relationship */
	integrations:Array<ModelTypes["integration"]> | undefined,
	/** An aggregate relationship */
	integrations_aggregate:ModelTypes["integration_aggregate"],
	isActive?:boolean | undefined,
	isTest?:boolean | undefined,
	/** An array relationship */
	issues:Array<ModelTypes["issue"]> | undefined,
	/** An aggregate relationship */
	issues_aggregate:ModelTypes["issue_aggregate"],
	/** An array relationship */
	jobs:Array<ModelTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate:ModelTypes["job_aggregate"],
	/** An array relationship */
	lines:Array<ModelTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate:ModelTypes["line_aggregate"],
	/** An array relationship */
	members:Array<ModelTypes["teamUser"]> | undefined,
	/** An aggregate relationship */
	members_aggregate:ModelTypes["teamUser_aggregate"],
	/** An array relationship */
	metrics:Array<ModelTypes["metric"]> | undefined,
	/** An aggregate relationship */
	metrics_aggregate:ModelTypes["metric_aggregate"],
	name:string,
	/** An array relationship */
	payments:Array<ModelTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate:ModelTypes["payment_aggregate"],
	stripeId?:string | undefined,
	stripeSubscriptionItemId?:string | undefined,
	supportEmail?:string | undefined,
	supportPhone?:string | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate:ModelTypes["tag_aggregate"],
	/** An array relationship */
	units:Array<ModelTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate:ModelTypes["unit_aggregate"],
	/** An array relationship */
	webhooks:Array<ModelTypes["webhook"]> | undefined,
	/** An aggregate relationship */
	webhooks_aggregate:ModelTypes["webhook_aggregate"],
	website?:string | undefined
};
	/** aggregated selection of "team" */
["team_aggregate"]: {
		aggregate?:ModelTypes["team_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["team"]> | undefined
};
	/** aggregate fields of "team" */
["team_aggregate_fields"]: {
		avg?:ModelTypes["team_avg_fields"] | undefined,
	count:number,
	max?:ModelTypes["team_max_fields"] | undefined,
	min?:ModelTypes["team_min_fields"] | undefined,
	stddev?:ModelTypes["team_stddev_fields"] | undefined,
	stddev_pop?:ModelTypes["team_stddev_pop_fields"] | undefined,
	stddev_samp?:ModelTypes["team_stddev_samp_fields"] | undefined,
	sum?:ModelTypes["team_sum_fields"] | undefined,
	var_pop?:ModelTypes["team_var_pop_fields"] | undefined,
	var_samp?:ModelTypes["team_var_samp_fields"] | undefined,
	variance?:ModelTypes["team_variance_fields"] | undefined
};
	/** aggregate avg on columns */
["team_avg_fields"]: {
		commissionPercentage?:number | undefined
};
	/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
["team_bool_exp"]: GraphQLTypes["team_bool_exp"];
	/** unique or primary key constraints on table "team" */
["team_constraint"]: GraphQLTypes["team_constraint"];
	/** input type for incrementing numeric columns in table "team" */
["team_inc_input"]: GraphQLTypes["team_inc_input"];
	/** input type for inserting data into table "team" */
["team_insert_input"]: GraphQLTypes["team_insert_input"];
	/** aggregate max on columns */
["team_max_fields"]: {
		address?:string | undefined,
	commissionPercentage?:ModelTypes["numeric"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	email?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	stripeId?:string | undefined,
	stripeSubscriptionItemId?:string | undefined,
	supportEmail?:string | undefined,
	supportPhone?:string | undefined,
	website?:string | undefined
};
	/** aggregate min on columns */
["team_min_fields"]: {
		address?:string | undefined,
	commissionPercentage?:ModelTypes["numeric"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	email?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	stripeId?:string | undefined,
	stripeSubscriptionItemId?:string | undefined,
	supportEmail?:string | undefined,
	supportPhone?:string | undefined,
	website?:string | undefined
};
	/** response of any mutation on the table "team" */
["team_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["team"]> | undefined
};
	/** input type for inserting object relation for remote table "team" */
["team_obj_rel_insert_input"]: GraphQLTypes["team_obj_rel_insert_input"];
	/** on conflict condition type for table "team" */
["team_on_conflict"]: GraphQLTypes["team_on_conflict"];
	/** Ordering options when selecting data from "team". */
["team_order_by"]: GraphQLTypes["team_order_by"];
	/** primary key columns input for table: team */
["team_pk_columns_input"]: GraphQLTypes["team_pk_columns_input"];
	/** select columns of table "team" */
["team_select_column"]: GraphQLTypes["team_select_column"];
	/** input type for updating data in table "team" */
["team_set_input"]: GraphQLTypes["team_set_input"];
	/** aggregate stddev on columns */
["team_stddev_fields"]: {
		commissionPercentage?:number | undefined
};
	/** aggregate stddev_pop on columns */
["team_stddev_pop_fields"]: {
		commissionPercentage?:number | undefined
};
	/** aggregate stddev_samp on columns */
["team_stddev_samp_fields"]: {
		commissionPercentage?:number | undefined
};
	/** aggregate sum on columns */
["team_sum_fields"]: {
		commissionPercentage?:ModelTypes["numeric"] | undefined
};
	/** update columns of table "team" */
["team_update_column"]: GraphQLTypes["team_update_column"];
	/** aggregate var_pop on columns */
["team_var_pop_fields"]: {
		commissionPercentage?:number | undefined
};
	/** aggregate var_samp on columns */
["team_var_samp_fields"]: {
		commissionPercentage?:number | undefined
};
	/** aggregate variance on columns */
["team_variance_fields"]: {
		commissionPercentage?:number | undefined
};
	/** columns and relationships of "team_user" */
["teamUser"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id:ModelTypes["uuid"],
	role?:string | undefined,
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	updatedAt?:ModelTypes["timestamptz"] | undefined,
	/** An object relationship */
	user:ModelTypes["user"],
	userId:ModelTypes["uuid"]
};
	/** aggregated selection of "team_user" */
["teamUser_aggregate"]: {
		aggregate?:ModelTypes["teamUser_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["teamUser"]> | undefined
};
	/** aggregate fields of "team_user" */
["teamUser_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["teamUser_max_fields"] | undefined,
	min?:ModelTypes["teamUser_min_fields"] | undefined
};
	/** order by aggregate values of table "team_user" */
["teamUser_aggregate_order_by"]: GraphQLTypes["teamUser_aggregate_order_by"];
	/** input type for inserting array relation for remote table "team_user" */
["teamUser_arr_rel_insert_input"]: GraphQLTypes["teamUser_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "team_user". All fields are combined with a logical 'AND'. */
["teamUser_bool_exp"]: GraphQLTypes["teamUser_bool_exp"];
	/** unique or primary key constraints on table "team_user" */
["teamUser_constraint"]: GraphQLTypes["teamUser_constraint"];
	/** input type for inserting data into table "team_user" */
["teamUser_insert_input"]: GraphQLTypes["teamUser_insert_input"];
	/** aggregate max on columns */
["teamUser_max_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	role?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined,
	userId?:ModelTypes["uuid"] | undefined
};
	/** order by max() on columns of table "team_user" */
["teamUser_max_order_by"]: GraphQLTypes["teamUser_max_order_by"];
	/** aggregate min on columns */
["teamUser_min_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	role?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined,
	userId?:ModelTypes["uuid"] | undefined
};
	/** order by min() on columns of table "team_user" */
["teamUser_min_order_by"]: GraphQLTypes["teamUser_min_order_by"];
	/** response of any mutation on the table "team_user" */
["teamUser_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["teamUser"]> | undefined
};
	/** on conflict condition type for table "team_user" */
["teamUser_on_conflict"]: GraphQLTypes["teamUser_on_conflict"];
	/** Ordering options when selecting data from "team_user". */
["teamUser_order_by"]: GraphQLTypes["teamUser_order_by"];
	/** primary key columns input for table: teamUser */
["teamUser_pk_columns_input"]: GraphQLTypes["teamUser_pk_columns_input"];
	/** select columns of table "team_user" */
["teamUser_select_column"]: GraphQLTypes["teamUser_select_column"];
	/** input type for updating data in table "team_user" */
["teamUser_set_input"]: GraphQLTypes["teamUser_set_input"];
	/** update columns of table "team_user" */
["teamUser_update_column"]: GraphQLTypes["teamUser_update_column"];
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	/** columns and relationships of "unit" */
["unit"]: {
		/** An array relationship */
	bookings:Array<ModelTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate:ModelTypes["booking_aggregate"],
	/** An object relationship */
	connection?:ModelTypes["connection"] | undefined,
	connectionId?:ModelTypes["uuid"] | undefined,
	createdAt:ModelTypes["timestamptz"],
	/** An object relationship */
	entity?:ModelTypes["entity"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id:ModelTypes["uuid"],
	metadata?:ModelTypes["jsonb"] | undefined,
	name?:string | undefined,
	status?:string | undefined,
	/** An array relationship */
	tags:Array<ModelTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate:ModelTypes["tag_aggregate"],
	/** An object relationship */
	team?:ModelTypes["team"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	updatedAt:ModelTypes["timestamptz"]
};
	/** aggregated selection of "unit" */
["unit_aggregate"]: {
		aggregate?:ModelTypes["unit_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["unit"]> | undefined
};
	/** aggregate fields of "unit" */
["unit_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["unit_max_fields"] | undefined,
	min?:ModelTypes["unit_min_fields"] | undefined
};
	/** order by aggregate values of table "unit" */
["unit_aggregate_order_by"]: GraphQLTypes["unit_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["unit_append_input"]: GraphQLTypes["unit_append_input"];
	/** input type for inserting array relation for remote table "unit" */
["unit_arr_rel_insert_input"]: GraphQLTypes["unit_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "unit". All fields are combined with a logical 'AND'. */
["unit_bool_exp"]: GraphQLTypes["unit_bool_exp"];
	/** unique or primary key constraints on table "unit" */
["unit_constraint"]: GraphQLTypes["unit_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["unit_delete_at_path_input"]: GraphQLTypes["unit_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["unit_delete_elem_input"]: GraphQLTypes["unit_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["unit_delete_key_input"]: GraphQLTypes["unit_delete_key_input"];
	/** input type for inserting data into table "unit" */
["unit_insert_input"]: GraphQLTypes["unit_insert_input"];
	/** aggregate max on columns */
["unit_max_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	status?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "unit" */
["unit_max_order_by"]: GraphQLTypes["unit_max_order_by"];
	/** aggregate min on columns */
["unit_min_fields"]: {
		connectionId?:ModelTypes["uuid"] | undefined,
	createdAt?:ModelTypes["timestamptz"] | undefined,
	entityId?:ModelTypes["uuid"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	status?:string | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	uniqueRef?:string | undefined,
	updatedAt?:ModelTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "unit" */
["unit_min_order_by"]: GraphQLTypes["unit_min_order_by"];
	/** response of any mutation on the table "unit" */
["unit_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["unit"]> | undefined
};
	/** input type for inserting object relation for remote table "unit" */
["unit_obj_rel_insert_input"]: GraphQLTypes["unit_obj_rel_insert_input"];
	/** on conflict condition type for table "unit" */
["unit_on_conflict"]: GraphQLTypes["unit_on_conflict"];
	/** Ordering options when selecting data from "unit". */
["unit_order_by"]: GraphQLTypes["unit_order_by"];
	/** primary key columns input for table: unit */
["unit_pk_columns_input"]: GraphQLTypes["unit_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["unit_prepend_input"]: GraphQLTypes["unit_prepend_input"];
	/** select columns of table "unit" */
["unit_select_column"]: GraphQLTypes["unit_select_column"];
	/** input type for updating data in table "unit" */
["unit_set_input"]: GraphQLTypes["unit_set_input"];
	/** update columns of table "unit" */
["unit_update_column"]: GraphQLTypes["unit_update_column"];
	/** columns and relationships of "user" */
["user"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	email:string,
	id:ModelTypes["uuid"],
	isAdmin:boolean,
	/** An array relationship */
	memberships:Array<ModelTypes["teamUser"]> | undefined,
	/** An aggregate relationship */
	memberships_aggregate:ModelTypes["teamUser_aggregate"],
	name?:string | undefined,
	status?:ModelTypes["user_status_enum"] | undefined,
	sub?:string | undefined,
	trialExpiryAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
		aggregate?:ModelTypes["user_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["user"]> | undefined
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["user_max_fields"] | undefined,
	min?:ModelTypes["user_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: GraphQLTypes["user_bool_exp"];
	/** unique or primary key constraints on table "user" */
["user_constraint"]: GraphQLTypes["user_constraint"];
	/** input type for inserting data into table "user" */
["user_insert_input"]: GraphQLTypes["user_insert_input"];
	/** aggregate max on columns */
["user_max_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	email?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	sub?:string | undefined,
	trialExpiryAt?:ModelTypes["timestamptz"] | undefined
};
	/** aggregate min on columns */
["user_min_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	email?:string | undefined,
	id?:ModelTypes["uuid"] | undefined,
	name?:string | undefined,
	sub?:string | undefined,
	trialExpiryAt?:ModelTypes["timestamptz"] | undefined
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["user"]> | undefined
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: GraphQLTypes["user_obj_rel_insert_input"];
	/** on conflict condition type for table "user" */
["user_on_conflict"]: GraphQLTypes["user_on_conflict"];
	/** Ordering options when selecting data from "user". */
["user_order_by"]: GraphQLTypes["user_order_by"];
	/** primary key columns input for table: user */
["user_pk_columns_input"]: GraphQLTypes["user_pk_columns_input"];
	/** select columns of table "user" */
["user_select_column"]: GraphQLTypes["user_select_column"];
	/** input type for updating data in table "user" */
["user_set_input"]: GraphQLTypes["user_set_input"];
	["user_status_enum"]: GraphQLTypes["user_status_enum"];
	/** Boolean expression to compare columns of type "user_status_enum". All fields are combined with logical 'AND'. */
["user_status_enum_comparison_exp"]: GraphQLTypes["user_status_enum_comparison_exp"];
	/** update columns of table "user" */
["user_update_column"]: GraphQLTypes["user_update_column"];
	/** columns and relationships of "user_status" */
["userStatus"]: {
		name:string
};
	/** aggregated selection of "user_status" */
["userStatus_aggregate"]: {
		aggregate?:ModelTypes["userStatus_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["userStatus"]> | undefined
};
	/** aggregate fields of "user_status" */
["userStatus_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["userStatus_max_fields"] | undefined,
	min?:ModelTypes["userStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
["userStatus_bool_exp"]: GraphQLTypes["userStatus_bool_exp"];
	/** unique or primary key constraints on table "user_status" */
["userStatus_constraint"]: GraphQLTypes["userStatus_constraint"];
	/** input type for inserting data into table "user_status" */
["userStatus_insert_input"]: GraphQLTypes["userStatus_insert_input"];
	/** aggregate max on columns */
["userStatus_max_fields"]: {
		name?:string | undefined
};
	/** aggregate min on columns */
["userStatus_min_fields"]: {
		name?:string | undefined
};
	/** response of any mutation on the table "user_status" */
["userStatus_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["userStatus"]> | undefined
};
	/** on conflict condition type for table "user_status" */
["userStatus_on_conflict"]: GraphQLTypes["userStatus_on_conflict"];
	/** Ordering options when selecting data from "user_status". */
["userStatus_order_by"]: GraphQLTypes["userStatus_order_by"];
	/** primary key columns input for table: userStatus */
["userStatus_pk_columns_input"]: GraphQLTypes["userStatus_pk_columns_input"];
	/** select columns of table "user_status" */
["userStatus_select_column"]: GraphQLTypes["userStatus_select_column"];
	/** input type for updating data in table "user_status" */
["userStatus_set_input"]: GraphQLTypes["userStatus_set_input"];
	/** update columns of table "user_status" */
["userStatus_update_column"]: GraphQLTypes["userStatus_update_column"];
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: GraphQLTypes["uuid_comparison_exp"];
	/** columns and relationships of "webhook" */
["webhook"]: {
		createdAt:ModelTypes["timestamptz"],
	headers?:ModelTypes["jsonb"] | undefined,
	id:ModelTypes["uuid"],
	/** An object relationship */
	team:ModelTypes["team"],
	teamId:ModelTypes["uuid"],
	types:ModelTypes["jsonb"],
	types2?:ModelTypes["_text"] | undefined,
	url:string
};
	/** aggregated selection of "webhook" */
["webhook_aggregate"]: {
		aggregate?:ModelTypes["webhook_aggregate_fields"] | undefined,
	nodes:Array<ModelTypes["webhook"]> | undefined
};
	/** aggregate fields of "webhook" */
["webhook_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["webhook_max_fields"] | undefined,
	min?:ModelTypes["webhook_min_fields"] | undefined
};
	/** order by aggregate values of table "webhook" */
["webhook_aggregate_order_by"]: GraphQLTypes["webhook_aggregate_order_by"];
	/** append existing jsonb value of filtered columns with new jsonb value */
["webhook_append_input"]: GraphQLTypes["webhook_append_input"];
	/** input type for inserting array relation for remote table "webhook" */
["webhook_arr_rel_insert_input"]: GraphQLTypes["webhook_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "webhook". All fields are combined with a logical 'AND'. */
["webhook_bool_exp"]: GraphQLTypes["webhook_bool_exp"];
	/** unique or primary key constraints on table "webhook" */
["webhook_constraint"]: GraphQLTypes["webhook_constraint"];
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["webhook_delete_at_path_input"]: GraphQLTypes["webhook_delete_at_path_input"];
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["webhook_delete_elem_input"]: GraphQLTypes["webhook_delete_elem_input"];
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["webhook_delete_key_input"]: GraphQLTypes["webhook_delete_key_input"];
	/** input type for inserting data into table "webhook" */
["webhook_insert_input"]: GraphQLTypes["webhook_insert_input"];
	/** aggregate max on columns */
["webhook_max_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	url?:string | undefined
};
	/** order by max() on columns of table "webhook" */
["webhook_max_order_by"]: GraphQLTypes["webhook_max_order_by"];
	/** aggregate min on columns */
["webhook_min_fields"]: {
		createdAt?:ModelTypes["timestamptz"] | undefined,
	id?:ModelTypes["uuid"] | undefined,
	teamId?:ModelTypes["uuid"] | undefined,
	url?:string | undefined
};
	/** order by min() on columns of table "webhook" */
["webhook_min_order_by"]: GraphQLTypes["webhook_min_order_by"];
	/** response of any mutation on the table "webhook" */
["webhook_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:Array<ModelTypes["webhook"]> | undefined
};
	/** on conflict condition type for table "webhook" */
["webhook_on_conflict"]: GraphQLTypes["webhook_on_conflict"];
	/** Ordering options when selecting data from "webhook". */
["webhook_order_by"]: GraphQLTypes["webhook_order_by"];
	/** primary key columns input for table: webhook */
["webhook_pk_columns_input"]: GraphQLTypes["webhook_pk_columns_input"];
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["webhook_prepend_input"]: GraphQLTypes["webhook_prepend_input"];
	/** select columns of table "webhook" */
["webhook_select_column"]: GraphQLTypes["webhook_select_column"];
	/** input type for updating data in table "webhook" */
["webhook_set_input"]: GraphQLTypes["webhook_set_input"];
	/** update columns of table "webhook" */
["webhook_update_column"]: GraphQLTypes["webhook_update_column"]
    }

export type GraphQLTypes = {
    ["_text"]:any;
	/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
["_text_comparison_exp"]: {
		_eq?: GraphQLTypes["_text"] | undefined,
	_gt?: GraphQLTypes["_text"] | undefined,
	_gte?: GraphQLTypes["_text"] | undefined,
	_in?: Array<GraphQLTypes["_text"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["_text"] | undefined,
	_lte?: GraphQLTypes["_text"] | undefined,
	_neq?: GraphQLTypes["_text"] | undefined,
	_nin?: Array<GraphQLTypes["_text"]>
};
	/** columns and relationships of "booking" */
["booking"]: {
	__typename: "booking",
	bookedAt?: GraphQLTypes["timestamptz"] | undefined,
	bookerName?: string | undefined,
	bookingChannel?: GraphQLTypes["booking_channel_enum"] | undefined,
	checkIn?: GraphQLTypes["timestamptz"] | undefined,
	checkOut?: GraphQLTypes["timestamptz"] | undefined,
	confirmationCode?: string | undefined,
	/** An object relationship */
	connection?: GraphQLTypes["connection"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	/** An object relationship */
	entity?: GraphQLTypes["entity"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	guestName?: string | undefined,
	guests?: number | undefined,
	id: GraphQLTypes["uuid"],
	isOTA?: boolean | undefined,
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate: GraphQLTypes["line_aggregate"],
	metadata?: GraphQLTypes["jsonb"] | undefined,
	nights?: number | undefined,
	/** An object relationship */
	otaBooking?: GraphQLTypes["booking"] | undefined,
	otaBookingId?: GraphQLTypes["uuid"] | undefined,
	/** An array relationship */
	relatedBookings: Array<GraphQLTypes["booking"]> | undefined,
	/** An aggregate relationship */
	relatedBookings_aggregate: GraphQLTypes["booking_aggregate"],
	status?: GraphQLTypes["booking_status_enum"] | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate: GraphQLTypes["tag_aggregate"],
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	/** An object relationship */
	unit?: GraphQLTypes["unit"] | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregated selection of "booking" */
["booking_aggregate"]: {
	__typename: "booking_aggregate",
	aggregate?: GraphQLTypes["booking_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["booking"]> | undefined
};
	/** aggregate fields of "booking" */
["booking_aggregate_fields"]: {
	__typename: "booking_aggregate_fields",
	avg?: GraphQLTypes["booking_avg_fields"] | undefined,
	count: number,
	max?: GraphQLTypes["booking_max_fields"] | undefined,
	min?: GraphQLTypes["booking_min_fields"] | undefined,
	stddev?: GraphQLTypes["booking_stddev_fields"] | undefined,
	stddev_pop?: GraphQLTypes["booking_stddev_pop_fields"] | undefined,
	stddev_samp?: GraphQLTypes["booking_stddev_samp_fields"] | undefined,
	sum?: GraphQLTypes["booking_sum_fields"] | undefined,
	var_pop?: GraphQLTypes["booking_var_pop_fields"] | undefined,
	var_samp?: GraphQLTypes["booking_var_samp_fields"] | undefined,
	variance?: GraphQLTypes["booking_variance_fields"] | undefined
};
	/** order by aggregate values of table "booking" */
["booking_aggregate_order_by"]: {
		avg?: GraphQLTypes["booking_avg_order_by"] | undefined,
	count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["booking_max_order_by"] | undefined,
	min?: GraphQLTypes["booking_min_order_by"] | undefined,
	stddev?: GraphQLTypes["booking_stddev_order_by"] | undefined,
	stddev_pop?: GraphQLTypes["booking_stddev_pop_order_by"] | undefined,
	stddev_samp?: GraphQLTypes["booking_stddev_samp_order_by"] | undefined,
	sum?: GraphQLTypes["booking_sum_order_by"] | undefined,
	var_pop?: GraphQLTypes["booking_var_pop_order_by"] | undefined,
	var_samp?: GraphQLTypes["booking_var_samp_order_by"] | undefined,
	variance?: GraphQLTypes["booking_variance_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["booking_append_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "booking" */
["booking_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["booking_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["booking_on_conflict"] | undefined
};
	/** aggregate avg on columns */
["booking_avg_fields"]: {
	__typename: "booking_avg_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by avg() on columns of table "booking" */
["booking_avg_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
["booking_bool_exp"]: {
		_and?: Array<GraphQLTypes["booking_bool_exp"]>,
	_not?: GraphQLTypes["booking_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["booking_bool_exp"]>,
	bookedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	bookerName?: GraphQLTypes["String_comparison_exp"] | undefined,
	bookingChannel?: GraphQLTypes["booking_channel_enum_comparison_exp"] | undefined,
	checkIn?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	checkOut?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	confirmationCode?: GraphQLTypes["String_comparison_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	currency?: GraphQLTypes["currency_enum_comparison_exp"] | undefined,
	entity?: GraphQLTypes["entity_bool_exp"] | undefined,
	entityId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	guestName?: GraphQLTypes["String_comparison_exp"] | undefined,
	guests?: GraphQLTypes["Int_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	isOTA?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	lines?: GraphQLTypes["line_bool_exp"] | undefined,
	metadata?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	nights?: GraphQLTypes["Int_comparison_exp"] | undefined,
	otaBooking?: GraphQLTypes["booking_bool_exp"] | undefined,
	otaBookingId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	relatedBookings?: GraphQLTypes["booking_bool_exp"] | undefined,
	status?: GraphQLTypes["booking_status_enum_comparison_exp"] | undefined,
	tags?: GraphQLTypes["tag_bool_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	unit?: GraphQLTypes["unit_bool_exp"] | undefined,
	unitId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** columns and relationships of "booking_channel" */
["booking_channel"]: {
	__typename: "booking_channel",
	name: string
};
	/** aggregated selection of "booking_channel" */
["booking_channel_aggregate"]: {
	__typename: "booking_channel_aggregate",
	aggregate?: GraphQLTypes["booking_channel_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["booking_channel"]> | undefined
};
	/** aggregate fields of "booking_channel" */
["booking_channel_aggregate_fields"]: {
	__typename: "booking_channel_aggregate_fields",
	count: number,
	max?: GraphQLTypes["booking_channel_max_fields"] | undefined,
	min?: GraphQLTypes["booking_channel_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "booking_channel". All fields are combined with a logical 'AND'. */
["booking_channel_bool_exp"]: {
		_and?: Array<GraphQLTypes["booking_channel_bool_exp"]>,
	_not?: GraphQLTypes["booking_channel_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["booking_channel_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "booking_channel" */
["booking_channel_constraint"]: booking_channel_constraint;
	["booking_channel_enum"]: booking_channel_enum;
	/** Boolean expression to compare columns of type "booking_channel_enum". All fields are combined with logical 'AND'. */
["booking_channel_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["booking_channel_enum"] | undefined,
	_in?: Array<GraphQLTypes["booking_channel_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["booking_channel_enum"] | undefined,
	_nin?: Array<GraphQLTypes["booking_channel_enum"]>
};
	/** input type for inserting data into table "booking_channel" */
["booking_channel_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["booking_channel_max_fields"]: {
	__typename: "booking_channel_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["booking_channel_min_fields"]: {
	__typename: "booking_channel_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "booking_channel" */
["booking_channel_mutation_response"]: {
	__typename: "booking_channel_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["booking_channel"]> | undefined
};
	/** on conflict condition type for table "booking_channel" */
["booking_channel_on_conflict"]: {
		constraint: GraphQLTypes["booking_channel_constraint"],
	update_columns: Array<GraphQLTypes["booking_channel_update_column"]> | undefined,
	where?: GraphQLTypes["booking_channel_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "booking_channel". */
["booking_channel_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: booking_channel */
["booking_channel_pk_columns_input"]: {
		name: string
};
	/** select columns of table "booking_channel" */
["booking_channel_select_column"]: booking_channel_select_column;
	/** input type for updating data in table "booking_channel" */
["booking_channel_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "booking_channel" */
["booking_channel_update_column"]: booking_channel_update_column;
	/** unique or primary key constraints on table "booking" */
["booking_constraint"]: booking_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["booking_delete_at_path_input"]: {
		metadata?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["booking_delete_elem_input"]: {
		metadata?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["booking_delete_key_input"]: {
		metadata?: string | undefined
};
	/** input type for incrementing numeric columns in table "booking" */
["booking_inc_input"]: {
		guests?: number | undefined,
	nights?: number | undefined
};
	/** input type for inserting data into table "booking" */
["booking_insert_input"]: {
		bookedAt?: GraphQLTypes["timestamptz"] | undefined,
	bookerName?: string | undefined,
	bookingChannel?: GraphQLTypes["booking_channel_enum"] | undefined,
	checkIn?: GraphQLTypes["timestamptz"] | undefined,
	checkOut?: GraphQLTypes["timestamptz"] | undefined,
	confirmationCode?: string | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	entity?: GraphQLTypes["entity_obj_rel_insert_input"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	guestName?: string | undefined,
	guests?: number | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isOTA?: boolean | undefined,
	lines?: GraphQLTypes["line_arr_rel_insert_input"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	nights?: number | undefined,
	otaBooking?: GraphQLTypes["booking_obj_rel_insert_input"] | undefined,
	otaBookingId?: GraphQLTypes["uuid"] | undefined,
	relatedBookings?: GraphQLTypes["booking_arr_rel_insert_input"] | undefined,
	status?: GraphQLTypes["booking_status_enum"] | undefined,
	tags?: GraphQLTypes["tag_arr_rel_insert_input"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	unit?: GraphQLTypes["unit_obj_rel_insert_input"] | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["booking_max_fields"]: {
	__typename: "booking_max_fields",
	bookedAt?: GraphQLTypes["timestamptz"] | undefined,
	bookerName?: string | undefined,
	checkIn?: GraphQLTypes["timestamptz"] | undefined,
	checkOut?: GraphQLTypes["timestamptz"] | undefined,
	confirmationCode?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	guestName?: string | undefined,
	guests?: number | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	nights?: number | undefined,
	otaBookingId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "booking" */
["booking_max_order_by"]: {
		bookedAt?: GraphQLTypes["order_by"] | undefined,
	bookerName?: GraphQLTypes["order_by"] | undefined,
	checkIn?: GraphQLTypes["order_by"] | undefined,
	checkOut?: GraphQLTypes["order_by"] | undefined,
	confirmationCode?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	guestName?: GraphQLTypes["order_by"] | undefined,
	guests?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined,
	otaBookingId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["booking_min_fields"]: {
	__typename: "booking_min_fields",
	bookedAt?: GraphQLTypes["timestamptz"] | undefined,
	bookerName?: string | undefined,
	checkIn?: GraphQLTypes["timestamptz"] | undefined,
	checkOut?: GraphQLTypes["timestamptz"] | undefined,
	confirmationCode?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	guestName?: string | undefined,
	guests?: number | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	nights?: number | undefined,
	otaBookingId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "booking" */
["booking_min_order_by"]: {
		bookedAt?: GraphQLTypes["order_by"] | undefined,
	bookerName?: GraphQLTypes["order_by"] | undefined,
	checkIn?: GraphQLTypes["order_by"] | undefined,
	checkOut?: GraphQLTypes["order_by"] | undefined,
	confirmationCode?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	guestName?: GraphQLTypes["order_by"] | undefined,
	guests?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined,
	otaBookingId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "booking" */
["booking_mutation_response"]: {
	__typename: "booking_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["booking"]> | undefined
};
	/** input type for inserting object relation for remote table "booking" */
["booking_obj_rel_insert_input"]: {
		data: GraphQLTypes["booking_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["booking_on_conflict"] | undefined
};
	/** on conflict condition type for table "booking" */
["booking_on_conflict"]: {
		constraint: GraphQLTypes["booking_constraint"],
	update_columns: Array<GraphQLTypes["booking_update_column"]> | undefined,
	where?: GraphQLTypes["booking_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "booking". */
["booking_order_by"]: {
		bookedAt?: GraphQLTypes["order_by"] | undefined,
	bookerName?: GraphQLTypes["order_by"] | undefined,
	bookingChannel?: GraphQLTypes["order_by"] | undefined,
	checkIn?: GraphQLTypes["order_by"] | undefined,
	checkOut?: GraphQLTypes["order_by"] | undefined,
	confirmationCode?: GraphQLTypes["order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	currency?: GraphQLTypes["order_by"] | undefined,
	entity?: GraphQLTypes["entity_order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	guestName?: GraphQLTypes["order_by"] | undefined,
	guests?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	isOTA?: GraphQLTypes["order_by"] | undefined,
	lines_aggregate?: GraphQLTypes["line_aggregate_order_by"] | undefined,
	metadata?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined,
	otaBooking?: GraphQLTypes["booking_order_by"] | undefined,
	otaBookingId?: GraphQLTypes["order_by"] | undefined,
	relatedBookings_aggregate?: GraphQLTypes["booking_aggregate_order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	tags_aggregate?: GraphQLTypes["tag_aggregate_order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unit?: GraphQLTypes["unit_order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: booking */
["booking_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["booking_prepend_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "booking" */
["booking_select_column"]: booking_select_column;
	/** input type for updating data in table "booking" */
["booking_set_input"]: {
		bookedAt?: GraphQLTypes["timestamptz"] | undefined,
	bookerName?: string | undefined,
	bookingChannel?: GraphQLTypes["booking_channel_enum"] | undefined,
	checkIn?: GraphQLTypes["timestamptz"] | undefined,
	checkOut?: GraphQLTypes["timestamptz"] | undefined,
	confirmationCode?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	guestName?: string | undefined,
	guests?: number | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isOTA?: boolean | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	nights?: number | undefined,
	otaBookingId?: GraphQLTypes["uuid"] | undefined,
	status?: GraphQLTypes["booking_status_enum"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	["booking_status_enum"]: booking_status_enum;
	/** Boolean expression to compare columns of type "booking_status_enum". All fields are combined with logical 'AND'. */
["booking_status_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["booking_status_enum"] | undefined,
	_in?: Array<GraphQLTypes["booking_status_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["booking_status_enum"] | undefined,
	_nin?: Array<GraphQLTypes["booking_status_enum"]>
};
	/** aggregate stddev on columns */
["booking_stddev_fields"]: {
	__typename: "booking_stddev_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by stddev() on columns of table "booking" */
["booking_stddev_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_pop on columns */
["booking_stddev_pop_fields"]: {
	__typename: "booking_stddev_pop_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by stddev_pop() on columns of table "booking" */
["booking_stddev_pop_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_samp on columns */
["booking_stddev_samp_fields"]: {
	__typename: "booking_stddev_samp_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by stddev_samp() on columns of table "booking" */
["booking_stddev_samp_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate sum on columns */
["booking_sum_fields"]: {
	__typename: "booking_sum_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by sum() on columns of table "booking" */
["booking_sum_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** update columns of table "booking" */
["booking_update_column"]: booking_update_column;
	/** aggregate var_pop on columns */
["booking_var_pop_fields"]: {
	__typename: "booking_var_pop_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by var_pop() on columns of table "booking" */
["booking_var_pop_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate var_samp on columns */
["booking_var_samp_fields"]: {
	__typename: "booking_var_samp_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by var_samp() on columns of table "booking" */
["booking_var_samp_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate variance on columns */
["booking_variance_fields"]: {
	__typename: "booking_variance_fields",
	guests?: number | undefined,
	nights?: number | undefined
};
	/** order by variance() on columns of table "booking" */
["booking_variance_order_by"]: {
		guests?: GraphQLTypes["order_by"] | undefined,
	nights?: GraphQLTypes["order_by"] | undefined
};
	/** columns and relationships of "booking_status" */
["bookingStatus"]: {
	__typename: "bookingStatus",
	name: string
};
	/** aggregated selection of "booking_status" */
["bookingStatus_aggregate"]: {
	__typename: "bookingStatus_aggregate",
	aggregate?: GraphQLTypes["bookingStatus_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["bookingStatus"]> | undefined
};
	/** aggregate fields of "booking_status" */
["bookingStatus_aggregate_fields"]: {
	__typename: "bookingStatus_aggregate_fields",
	count: number,
	max?: GraphQLTypes["bookingStatus_max_fields"] | undefined,
	min?: GraphQLTypes["bookingStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "booking_status". All fields are combined with a logical 'AND'. */
["bookingStatus_bool_exp"]: {
		_and?: Array<GraphQLTypes["bookingStatus_bool_exp"]>,
	_not?: GraphQLTypes["bookingStatus_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["bookingStatus_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "booking_status" */
["bookingStatus_constraint"]: bookingStatus_constraint;
	/** input type for inserting data into table "booking_status" */
["bookingStatus_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["bookingStatus_max_fields"]: {
	__typename: "bookingStatus_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["bookingStatus_min_fields"]: {
	__typename: "bookingStatus_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "booking_status" */
["bookingStatus_mutation_response"]: {
	__typename: "bookingStatus_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["bookingStatus"]> | undefined
};
	/** on conflict condition type for table "booking_status" */
["bookingStatus_on_conflict"]: {
		constraint: GraphQLTypes["bookingStatus_constraint"],
	update_columns: Array<GraphQLTypes["bookingStatus_update_column"]> | undefined,
	where?: GraphQLTypes["bookingStatus_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "booking_status". */
["bookingStatus_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: bookingStatus */
["bookingStatus_pk_columns_input"]: {
		name: string
};
	/** select columns of table "booking_status" */
["bookingStatus_select_column"]: bookingStatus_select_column;
	/** input type for updating data in table "booking_status" */
["bookingStatus_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "booking_status" */
["bookingStatus_update_column"]: bookingStatus_update_column;
	/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
		_eq?: boolean | undefined,
	_gt?: boolean | undefined,
	_gte?: boolean | undefined,
	_in?: Array<boolean>,
	_is_null?: boolean | undefined,
	_lt?: boolean | undefined,
	_lte?: boolean | undefined,
	_neq?: boolean | undefined,
	_nin?: Array<boolean>
};
	/** columns and relationships of "classification" */
["classification"]: {
	__typename: "classification",
	name: string
};
	/** aggregated selection of "classification" */
["classification_aggregate"]: {
	__typename: "classification_aggregate",
	aggregate?: GraphQLTypes["classification_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["classification"]> | undefined
};
	/** aggregate fields of "classification" */
["classification_aggregate_fields"]: {
	__typename: "classification_aggregate_fields",
	count: number,
	max?: GraphQLTypes["classification_max_fields"] | undefined,
	min?: GraphQLTypes["classification_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "classification". All fields are combined with a logical 'AND'. */
["classification_bool_exp"]: {
		_and?: Array<GraphQLTypes["classification_bool_exp"]>,
	_not?: GraphQLTypes["classification_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["classification_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "classification" */
["classification_constraint"]: classification_constraint;
	["classification_enum"]: classification_enum;
	/** Boolean expression to compare columns of type "classification_enum". All fields are combined with logical 'AND'. */
["classification_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["classification_enum"] | undefined,
	_in?: Array<GraphQLTypes["classification_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["classification_enum"] | undefined,
	_nin?: Array<GraphQLTypes["classification_enum"]>
};
	/** input type for inserting data into table "classification" */
["classification_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["classification_max_fields"]: {
	__typename: "classification_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["classification_min_fields"]: {
	__typename: "classification_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "classification" */
["classification_mutation_response"]: {
	__typename: "classification_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["classification"]> | undefined
};
	/** on conflict condition type for table "classification" */
["classification_on_conflict"]: {
		constraint: GraphQLTypes["classification_constraint"],
	update_columns: Array<GraphQLTypes["classification_update_column"]> | undefined,
	where?: GraphQLTypes["classification_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "classification". */
["classification_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: classification */
["classification_pk_columns_input"]: {
		name: string
};
	/** select columns of table "classification" */
["classification_select_column"]: classification_select_column;
	/** input type for updating data in table "classification" */
["classification_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "classification" */
["classification_update_column"]: classification_update_column;
	/** columns and relationships of "connection" */
["connection"]: {
	__typename: "connection",
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate: GraphQLTypes["booking_aggregate"],
	createdAt: GraphQLTypes["timestamptz"],
	credentials?: GraphQLTypes["jsonb"] | undefined,
	/** An array relationship */
	entities: Array<GraphQLTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate: GraphQLTypes["entity_aggregate"],
	id: GraphQLTypes["uuid"],
	/** An object relationship */
	integration: GraphQLTypes["integration"],
	integrationId: GraphQLTypes["uuid"],
	/** An array relationship */
	jobs: Array<GraphQLTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate: GraphQLTypes["job_aggregate"],
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate: GraphQLTypes["line_aggregate"],
	/** An array relationship */
	metrics: Array<GraphQLTypes["metric"]> | undefined,
	/** An aggregate relationship */
	metrics_aggregate: GraphQLTypes["metric_aggregate"],
	name: string,
	/** An array relationship */
	payments: Array<GraphQLTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate: GraphQLTypes["payment_aggregate"],
	persistentState?: GraphQLTypes["jsonb"] | undefined,
	status?: string | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate: GraphQLTypes["tag_aggregate"],
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	/** An array relationship */
	units: Array<GraphQLTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate: GraphQLTypes["unit_aggregate"],
	webhookKey?: string | undefined
};
	/** aggregated selection of "connection" */
["connection_aggregate"]: {
	__typename: "connection_aggregate",
	aggregate?: GraphQLTypes["connection_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["connection"]> | undefined
};
	/** aggregate fields of "connection" */
["connection_aggregate_fields"]: {
	__typename: "connection_aggregate_fields",
	count: number,
	max?: GraphQLTypes["connection_max_fields"] | undefined,
	min?: GraphQLTypes["connection_min_fields"] | undefined
};
	/** order by aggregate values of table "connection" */
["connection_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["connection_max_order_by"] | undefined,
	min?: GraphQLTypes["connection_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["connection_append_input"]: {
		credentials?: GraphQLTypes["jsonb"] | undefined,
	persistentState?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "connection" */
["connection_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["connection_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["connection_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "connection". All fields are combined with a logical 'AND'. */
["connection_bool_exp"]: {
		_and?: Array<GraphQLTypes["connection_bool_exp"]>,
	_not?: GraphQLTypes["connection_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["connection_bool_exp"]>,
	bookings?: GraphQLTypes["booking_bool_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	credentials?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	entities?: GraphQLTypes["entity_bool_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	integration?: GraphQLTypes["integration_bool_exp"] | undefined,
	integrationId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	jobs?: GraphQLTypes["job_bool_exp"] | undefined,
	lines?: GraphQLTypes["line_bool_exp"] | undefined,
	metrics?: GraphQLTypes["metric_bool_exp"] | undefined,
	name?: GraphQLTypes["String_comparison_exp"] | undefined,
	payments?: GraphQLTypes["payment_bool_exp"] | undefined,
	persistentState?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	status?: GraphQLTypes["String_comparison_exp"] | undefined,
	tags?: GraphQLTypes["tag_bool_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	units?: GraphQLTypes["unit_bool_exp"] | undefined,
	webhookKey?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "connection" */
["connection_constraint"]: connection_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["connection_delete_at_path_input"]: {
		credentials?: Array<string>,
	persistentState?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["connection_delete_elem_input"]: {
		credentials?: number | undefined,
	persistentState?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["connection_delete_key_input"]: {
		credentials?: string | undefined,
	persistentState?: string | undefined
};
	/** input type for inserting data into table "connection" */
["connection_insert_input"]: {
		bookings?: GraphQLTypes["booking_arr_rel_insert_input"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	credentials?: GraphQLTypes["jsonb"] | undefined,
	entities?: GraphQLTypes["entity_arr_rel_insert_input"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integration?: GraphQLTypes["integration_obj_rel_insert_input"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	jobs?: GraphQLTypes["job_arr_rel_insert_input"] | undefined,
	lines?: GraphQLTypes["line_arr_rel_insert_input"] | undefined,
	metrics?: GraphQLTypes["metric_arr_rel_insert_input"] | undefined,
	name?: string | undefined,
	payments?: GraphQLTypes["payment_arr_rel_insert_input"] | undefined,
	persistentState?: GraphQLTypes["jsonb"] | undefined,
	status?: string | undefined,
	tags?: GraphQLTypes["tag_arr_rel_insert_input"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	units?: GraphQLTypes["unit_arr_rel_insert_input"] | undefined,
	webhookKey?: string | undefined
};
	/** aggregate max on columns */
["connection_max_fields"]: {
	__typename: "connection_max_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	webhookKey?: string | undefined
};
	/** order by max() on columns of table "connection" */
["connection_max_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	webhookKey?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["connection_min_fields"]: {
	__typename: "connection_min_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	webhookKey?: string | undefined
};
	/** order by min() on columns of table "connection" */
["connection_min_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	webhookKey?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "connection" */
["connection_mutation_response"]: {
	__typename: "connection_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["connection"]> | undefined
};
	/** input type for inserting object relation for remote table "connection" */
["connection_obj_rel_insert_input"]: {
		data: GraphQLTypes["connection_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["connection_on_conflict"] | undefined
};
	/** on conflict condition type for table "connection" */
["connection_on_conflict"]: {
		constraint: GraphQLTypes["connection_constraint"],
	update_columns: Array<GraphQLTypes["connection_update_column"]> | undefined,
	where?: GraphQLTypes["connection_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "connection". */
["connection_order_by"]: {
		bookings_aggregate?: GraphQLTypes["booking_aggregate_order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	credentials?: GraphQLTypes["order_by"] | undefined,
	entities_aggregate?: GraphQLTypes["entity_aggregate_order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integration?: GraphQLTypes["integration_order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	jobs_aggregate?: GraphQLTypes["job_aggregate_order_by"] | undefined,
	lines_aggregate?: GraphQLTypes["line_aggregate_order_by"] | undefined,
	metrics_aggregate?: GraphQLTypes["metric_aggregate_order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	payments_aggregate?: GraphQLTypes["payment_aggregate_order_by"] | undefined,
	persistentState?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	tags_aggregate?: GraphQLTypes["tag_aggregate_order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	units_aggregate?: GraphQLTypes["unit_aggregate_order_by"] | undefined,
	webhookKey?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: connection */
["connection_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["connection_prepend_input"]: {
		credentials?: GraphQLTypes["jsonb"] | undefined,
	persistentState?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "connection" */
["connection_select_column"]: connection_select_column;
	/** input type for updating data in table "connection" */
["connection_set_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	credentials?: GraphQLTypes["jsonb"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	persistentState?: GraphQLTypes["jsonb"] | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	webhookKey?: string | undefined
};
	/** update columns of table "connection" */
["connection_update_column"]: connection_update_column;
	/** columns and relationships of "currency" */
["currency"]: {
	__typename: "currency",
	name: string
};
	/** aggregated selection of "currency" */
["currency_aggregate"]: {
	__typename: "currency_aggregate",
	aggregate?: GraphQLTypes["currency_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["currency"]> | undefined
};
	/** aggregate fields of "currency" */
["currency_aggregate_fields"]: {
	__typename: "currency_aggregate_fields",
	count: number,
	max?: GraphQLTypes["currency_max_fields"] | undefined,
	min?: GraphQLTypes["currency_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
["currency_bool_exp"]: {
		_and?: Array<GraphQLTypes["currency_bool_exp"]>,
	_not?: GraphQLTypes["currency_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["currency_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "currency" */
["currency_constraint"]: currency_constraint;
	["currency_enum"]: currency_enum;
	/** Boolean expression to compare columns of type "currency_enum". All fields are combined with logical 'AND'. */
["currency_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["currency_enum"] | undefined,
	_in?: Array<GraphQLTypes["currency_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["currency_enum"] | undefined,
	_nin?: Array<GraphQLTypes["currency_enum"]>
};
	/** input type for inserting data into table "currency" */
["currency_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["currency_max_fields"]: {
	__typename: "currency_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["currency_min_fields"]: {
	__typename: "currency_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "currency" */
["currency_mutation_response"]: {
	__typename: "currency_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["currency"]> | undefined
};
	/** on conflict condition type for table "currency" */
["currency_on_conflict"]: {
		constraint: GraphQLTypes["currency_constraint"],
	update_columns: Array<GraphQLTypes["currency_update_column"]> | undefined,
	where?: GraphQLTypes["currency_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "currency". */
["currency_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: currency */
["currency_pk_columns_input"]: {
		name: string
};
	/** select columns of table "currency" */
["currency_select_column"]: currency_select_column;
	/** input type for updating data in table "currency" */
["currency_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "currency" */
["currency_update_column"]: currency_update_column;
	/** columns and relationships of "entity" */
["entity"]: {
	__typename: "entity",
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate: GraphQLTypes["booking_aggregate"],
	/** An object relationship */
	connection: GraphQLTypes["connection"],
	connectionId: GraphQLTypes["uuid"],
	createdAt: GraphQLTypes["timestamptz"],
	description: string,
	diffJson?: GraphQLTypes["jsonb"] | undefined,
	hash?: string | undefined,
	id: GraphQLTypes["uuid"],
	/** An object relationship */
	job?: GraphQLTypes["job"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb"] | undefined,
	normalizedType?: GraphQLTypes["normalized_type_enum"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz"] | undefined,
	/** An array relationship */
	payments: Array<GraphQLTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate: GraphQLTypes["payment_aggregate"],
	/** An object relationship */
	predecessorEntity?: GraphQLTypes["entity"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid"] | undefined,
	status: GraphQLTypes["entity_status_enum"],
	statusText?: string | undefined,
	/** An array relationship */
	successorEntities: Array<GraphQLTypes["entity"]> | undefined,
	/** An aggregate relationship */
	successorEntities_aggregate: GraphQLTypes["entity_aggregate"],
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type: string,
	uniqueRef?: string | undefined,
	/** An array relationship */
	units: Array<GraphQLTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate: GraphQLTypes["unit_aggregate"],
	updatedAt: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "entity" */
["entity_aggregate"]: {
	__typename: "entity_aggregate",
	aggregate?: GraphQLTypes["entity_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["entity"]> | undefined
};
	/** aggregate fields of "entity" */
["entity_aggregate_fields"]: {
	__typename: "entity_aggregate_fields",
	count: number,
	max?: GraphQLTypes["entity_max_fields"] | undefined,
	min?: GraphQLTypes["entity_min_fields"] | undefined
};
	/** order by aggregate values of table "entity" */
["entity_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["entity_max_order_by"] | undefined,
	min?: GraphQLTypes["entity_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["entity_append_input"]: {
		diffJson?: GraphQLTypes["jsonb"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "entity" */
["entity_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["entity_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["entity_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
["entity_bool_exp"]: {
		_and?: Array<GraphQLTypes["entity_bool_exp"]>,
	_not?: GraphQLTypes["entity_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["entity_bool_exp"]>,
	bookings?: GraphQLTypes["booking_bool_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	description?: GraphQLTypes["String_comparison_exp"] | undefined,
	diffJson?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	hash?: GraphQLTypes["String_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	job?: GraphQLTypes["job_bool_exp"] | undefined,
	jobId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	json?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	normalizedType?: GraphQLTypes["normalized_type_enum_comparison_exp"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	payments?: GraphQLTypes["payment_bool_exp"] | undefined,
	predecessorEntity?: GraphQLTypes["entity_bool_exp"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	status?: GraphQLTypes["entity_status_enum_comparison_exp"] | undefined,
	statusText?: GraphQLTypes["String_comparison_exp"] | undefined,
	successorEntities?: GraphQLTypes["entity_bool_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	units?: GraphQLTypes["unit_bool_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "entity" */
["entity_constraint"]: entity_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["entity_delete_at_path_input"]: {
		diffJson?: Array<string>,
	json?: Array<string>,
	normalizedJson?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["entity_delete_elem_input"]: {
		diffJson?: number | undefined,
	json?: number | undefined,
	normalizedJson?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["entity_delete_key_input"]: {
		diffJson?: string | undefined,
	json?: string | undefined,
	normalizedJson?: string | undefined
};
	/** input type for inserting data into table "entity" */
["entity_insert_input"]: {
		bookings?: GraphQLTypes["booking_arr_rel_insert_input"] | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	diffJson?: GraphQLTypes["jsonb"] | undefined,
	hash?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	job?: GraphQLTypes["job_obj_rel_insert_input"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb"] | undefined,
	normalizedType?: GraphQLTypes["normalized_type_enum"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz"] | undefined,
	payments?: GraphQLTypes["payment_arr_rel_insert_input"] | undefined,
	predecessorEntity?: GraphQLTypes["entity_obj_rel_insert_input"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid"] | undefined,
	status?: GraphQLTypes["entity_status_enum"] | undefined,
	statusText?: string | undefined,
	successorEntities?: GraphQLTypes["entity_arr_rel_insert_input"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	units?: GraphQLTypes["unit_arr_rel_insert_input"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["entity_max_fields"]: {
	__typename: "entity_max_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	hash?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid"] | undefined,
	statusText?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "entity" */
["entity_max_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	hash?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	parsedAt?: GraphQLTypes["order_by"] | undefined,
	predecessorEntityId?: GraphQLTypes["order_by"] | undefined,
	statusText?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["entity_min_fields"]: {
	__typename: "entity_min_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	hash?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid"] | undefined,
	statusText?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "entity" */
["entity_min_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	hash?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	parsedAt?: GraphQLTypes["order_by"] | undefined,
	predecessorEntityId?: GraphQLTypes["order_by"] | undefined,
	statusText?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "entity" */
["entity_mutation_response"]: {
	__typename: "entity_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["entity"]> | undefined
};
	/** input type for inserting object relation for remote table "entity" */
["entity_obj_rel_insert_input"]: {
		data: GraphQLTypes["entity_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["entity_on_conflict"] | undefined
};
	/** on conflict condition type for table "entity" */
["entity_on_conflict"]: {
		constraint: GraphQLTypes["entity_constraint"],
	update_columns: Array<GraphQLTypes["entity_update_column"]> | undefined,
	where?: GraphQLTypes["entity_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "entity". */
["entity_order_by"]: {
		bookings_aggregate?: GraphQLTypes["booking_aggregate_order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	diffJson?: GraphQLTypes["order_by"] | undefined,
	hash?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	job?: GraphQLTypes["job_order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	json?: GraphQLTypes["order_by"] | undefined,
	normalizedJson?: GraphQLTypes["order_by"] | undefined,
	normalizedType?: GraphQLTypes["order_by"] | undefined,
	parsedAt?: GraphQLTypes["order_by"] | undefined,
	payments_aggregate?: GraphQLTypes["payment_aggregate_order_by"] | undefined,
	predecessorEntity?: GraphQLTypes["entity_order_by"] | undefined,
	predecessorEntityId?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	statusText?: GraphQLTypes["order_by"] | undefined,
	successorEntities_aggregate?: GraphQLTypes["entity_aggregate_order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	units_aggregate?: GraphQLTypes["unit_aggregate_order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: entity */
["entity_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["entity_prepend_input"]: {
		diffJson?: GraphQLTypes["jsonb"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "entity" */
["entity_select_column"]: entity_select_column;
	/** input type for updating data in table "entity" */
["entity_set_input"]: {
		connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	diffJson?: GraphQLTypes["jsonb"] | undefined,
	hash?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	normalizedJson?: GraphQLTypes["jsonb"] | undefined,
	normalizedType?: GraphQLTypes["normalized_type_enum"] | undefined,
	parsedAt?: GraphQLTypes["timestamptz"] | undefined,
	predecessorEntityId?: GraphQLTypes["uuid"] | undefined,
	status?: GraphQLTypes["entity_status_enum"] | undefined,
	statusText?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	["entity_status_enum"]: entity_status_enum;
	/** Boolean expression to compare columns of type "entity_status_enum". All fields are combined with logical 'AND'. */
["entity_status_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["entity_status_enum"] | undefined,
	_in?: Array<GraphQLTypes["entity_status_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["entity_status_enum"] | undefined,
	_nin?: Array<GraphQLTypes["entity_status_enum"]>
};
	/** update columns of table "entity" */
["entity_update_column"]: entity_update_column;
	/** columns and relationships of "entity_status" */
["entityStatus"]: {
	__typename: "entityStatus",
	name: string
};
	/** aggregated selection of "entity_status" */
["entityStatus_aggregate"]: {
	__typename: "entityStatus_aggregate",
	aggregate?: GraphQLTypes["entityStatus_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["entityStatus"]> | undefined
};
	/** aggregate fields of "entity_status" */
["entityStatus_aggregate_fields"]: {
	__typename: "entityStatus_aggregate_fields",
	count: number,
	max?: GraphQLTypes["entityStatus_max_fields"] | undefined,
	min?: GraphQLTypes["entityStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "entity_status". All fields are combined with a logical 'AND'. */
["entityStatus_bool_exp"]: {
		_and?: Array<GraphQLTypes["entityStatus_bool_exp"]>,
	_not?: GraphQLTypes["entityStatus_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["entityStatus_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "entity_status" */
["entityStatus_constraint"]: entityStatus_constraint;
	/** input type for inserting data into table "entity_status" */
["entityStatus_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["entityStatus_max_fields"]: {
	__typename: "entityStatus_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["entityStatus_min_fields"]: {
	__typename: "entityStatus_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "entity_status" */
["entityStatus_mutation_response"]: {
	__typename: "entityStatus_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["entityStatus"]> | undefined
};
	/** on conflict condition type for table "entity_status" */
["entityStatus_on_conflict"]: {
		constraint: GraphQLTypes["entityStatus_constraint"],
	update_columns: Array<GraphQLTypes["entityStatus_update_column"]> | undefined,
	where?: GraphQLTypes["entityStatus_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "entity_status". */
["entityStatus_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: entityStatus */
["entityStatus_pk_columns_input"]: {
		name: string
};
	/** select columns of table "entity_status" */
["entityStatus_select_column"]: entityStatus_select_column;
	/** input type for updating data in table "entity_status" */
["entityStatus_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "entity_status" */
["entityStatus_update_column"]: entityStatus_update_column;
	["float8"]:any;
	/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
["float8_comparison_exp"]: {
		_eq?: GraphQLTypes["float8"] | undefined,
	_gt?: GraphQLTypes["float8"] | undefined,
	_gte?: GraphQLTypes["float8"] | undefined,
	_in?: Array<GraphQLTypes["float8"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["float8"] | undefined,
	_lte?: GraphQLTypes["float8"] | undefined,
	_neq?: GraphQLTypes["float8"] | undefined,
	_nin?: Array<GraphQLTypes["float8"]>
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
		_eq?: number | undefined,
	_gt?: number | undefined,
	_gte?: number | undefined,
	_in?: Array<number>,
	_is_null?: boolean | undefined,
	_lt?: number | undefined,
	_lte?: number | undefined,
	_neq?: number | undefined,
	_nin?: Array<number>
};
	/** columns and relationships of "integration" */
["integration"]: {
	__typename: "integration",
	apiDevUrl?: string | undefined,
	apiUrl: string,
	/** An array relationship */
	connections: Array<GraphQLTypes["connection"]> | undefined,
	/** An aggregate relationship */
	connections_aggregate: GraphQLTypes["connection_aggregate"],
	icon?: string | undefined,
	id: GraphQLTypes["uuid"],
	isApproved?: boolean | undefined,
	isPrivate: boolean,
	/** An array relationship */
	jobs: Array<GraphQLTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate: GraphQLTypes["job_aggregate"],
	name: string,
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type: GraphQLTypes["integration_type_enum"],
	uniqueRef: string
};
	/** aggregated selection of "integration" */
["integration_aggregate"]: {
	__typename: "integration_aggregate",
	aggregate?: GraphQLTypes["integration_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["integration"]> | undefined
};
	/** aggregate fields of "integration" */
["integration_aggregate_fields"]: {
	__typename: "integration_aggregate_fields",
	count: number,
	max?: GraphQLTypes["integration_max_fields"] | undefined,
	min?: GraphQLTypes["integration_min_fields"] | undefined
};
	/** order by aggregate values of table "integration" */
["integration_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["integration_max_order_by"] | undefined,
	min?: GraphQLTypes["integration_min_order_by"] | undefined
};
	/** input type for inserting array relation for remote table "integration" */
["integration_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["integration_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["integration_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "integration". All fields are combined with a logical 'AND'. */
["integration_bool_exp"]: {
		_and?: Array<GraphQLTypes["integration_bool_exp"]>,
	_not?: GraphQLTypes["integration_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["integration_bool_exp"]>,
	apiDevUrl?: GraphQLTypes["String_comparison_exp"] | undefined,
	apiUrl?: GraphQLTypes["String_comparison_exp"] | undefined,
	connections?: GraphQLTypes["connection_bool_exp"] | undefined,
	icon?: GraphQLTypes["String_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	isApproved?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	isPrivate?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	jobs?: GraphQLTypes["job_bool_exp"] | undefined,
	name?: GraphQLTypes["String_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["integration_type_enum_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "integration" */
["integration_constraint"]: integration_constraint;
	/** input type for inserting data into table "integration" */
["integration_insert_input"]: {
		apiDevUrl?: string | undefined,
	apiUrl?: string | undefined,
	connections?: GraphQLTypes["connection_arr_rel_insert_input"] | undefined,
	icon?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isApproved?: boolean | undefined,
	isPrivate?: boolean | undefined,
	jobs?: GraphQLTypes["job_arr_rel_insert_input"] | undefined,
	name?: string | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: GraphQLTypes["integration_type_enum"] | undefined,
	uniqueRef?: string | undefined
};
	/** aggregate max on columns */
["integration_max_fields"]: {
	__typename: "integration_max_fields",
	apiDevUrl?: string | undefined,
	apiUrl?: string | undefined,
	icon?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined
};
	/** order by max() on columns of table "integration" */
["integration_max_order_by"]: {
		apiDevUrl?: GraphQLTypes["order_by"] | undefined,
	apiUrl?: GraphQLTypes["order_by"] | undefined,
	icon?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["integration_min_fields"]: {
	__typename: "integration_min_fields",
	apiDevUrl?: string | undefined,
	apiUrl?: string | undefined,
	icon?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined
};
	/** order by min() on columns of table "integration" */
["integration_min_order_by"]: {
		apiDevUrl?: GraphQLTypes["order_by"] | undefined,
	apiUrl?: GraphQLTypes["order_by"] | undefined,
	icon?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "integration" */
["integration_mutation_response"]: {
	__typename: "integration_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["integration"]> | undefined
};
	/** input type for inserting object relation for remote table "integration" */
["integration_obj_rel_insert_input"]: {
		data: GraphQLTypes["integration_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["integration_on_conflict"] | undefined
};
	/** on conflict condition type for table "integration" */
["integration_on_conflict"]: {
		constraint: GraphQLTypes["integration_constraint"],
	update_columns: Array<GraphQLTypes["integration_update_column"]> | undefined,
	where?: GraphQLTypes["integration_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "integration". */
["integration_order_by"]: {
		apiDevUrl?: GraphQLTypes["order_by"] | undefined,
	apiUrl?: GraphQLTypes["order_by"] | undefined,
	connections_aggregate?: GraphQLTypes["connection_aggregate_order_by"] | undefined,
	icon?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	isApproved?: GraphQLTypes["order_by"] | undefined,
	isPrivate?: GraphQLTypes["order_by"] | undefined,
	jobs_aggregate?: GraphQLTypes["job_aggregate_order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: integration */
["integration_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "integration" */
["integration_select_column"]: integration_select_column;
	/** input type for updating data in table "integration" */
["integration_set_input"]: {
		apiDevUrl?: string | undefined,
	apiUrl?: string | undefined,
	icon?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isApproved?: boolean | undefined,
	isPrivate?: boolean | undefined,
	name?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: GraphQLTypes["integration_type_enum"] | undefined,
	uniqueRef?: string | undefined
};
	["integration_type_enum"]: integration_type_enum;
	/** Boolean expression to compare columns of type "integration_type_enum". All fields are combined with logical 'AND'. */
["integration_type_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["integration_type_enum"] | undefined,
	_in?: Array<GraphQLTypes["integration_type_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["integration_type_enum"] | undefined,
	_nin?: Array<GraphQLTypes["integration_type_enum"]>
};
	/** update columns of table "integration" */
["integration_update_column"]: integration_update_column;
	/** columns and relationships of "integration_type" */
["integrationType"]: {
	__typename: "integrationType",
	name: string
};
	/** aggregated selection of "integration_type" */
["integrationType_aggregate"]: {
	__typename: "integrationType_aggregate",
	aggregate?: GraphQLTypes["integrationType_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["integrationType"]> | undefined
};
	/** aggregate fields of "integration_type" */
["integrationType_aggregate_fields"]: {
	__typename: "integrationType_aggregate_fields",
	count: number,
	max?: GraphQLTypes["integrationType_max_fields"] | undefined,
	min?: GraphQLTypes["integrationType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "integration_type". All fields are combined with a logical 'AND'. */
["integrationType_bool_exp"]: {
		_and?: Array<GraphQLTypes["integrationType_bool_exp"]>,
	_not?: GraphQLTypes["integrationType_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["integrationType_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "integration_type" */
["integrationType_constraint"]: integrationType_constraint;
	/** input type for inserting data into table "integration_type" */
["integrationType_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["integrationType_max_fields"]: {
	__typename: "integrationType_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["integrationType_min_fields"]: {
	__typename: "integrationType_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "integration_type" */
["integrationType_mutation_response"]: {
	__typename: "integrationType_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["integrationType"]> | undefined
};
	/** on conflict condition type for table "integration_type" */
["integrationType_on_conflict"]: {
		constraint: GraphQLTypes["integrationType_constraint"],
	update_columns: Array<GraphQLTypes["integrationType_update_column"]> | undefined,
	where?: GraphQLTypes["integrationType_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "integration_type". */
["integrationType_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: integrationType */
["integrationType_pk_columns_input"]: {
		name: string
};
	/** select columns of table "integration_type" */
["integrationType_select_column"]: integrationType_select_column;
	/** input type for updating data in table "integration_type" */
["integrationType_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "integration_type" */
["integrationType_update_column"]: integrationType_update_column;
	/** columns and relationships of "issue" */
["issue"]: {
	__typename: "issue",
	code?: string | undefined,
	createdAt: GraphQLTypes["timestamptz"],
	id: GraphQLTypes["uuid"],
	isPublic?: boolean | undefined,
	isResolved?: boolean | undefined,
	/** An object relationship */
	job: GraphQLTypes["job"],
	jobId: GraphQLTypes["uuid"],
	message?: string | undefined,
	requestParams?: GraphQLTypes["jsonb"] | undefined,
	resolveParams?: GraphQLTypes["jsonb"] | undefined,
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	type?: string | undefined,
	updatedAt: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "issue" */
["issue_aggregate"]: {
	__typename: "issue_aggregate",
	aggregate?: GraphQLTypes["issue_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["issue"]> | undefined
};
	/** aggregate fields of "issue" */
["issue_aggregate_fields"]: {
	__typename: "issue_aggregate_fields",
	count: number,
	max?: GraphQLTypes["issue_max_fields"] | undefined,
	min?: GraphQLTypes["issue_min_fields"] | undefined
};
	/** order by aggregate values of table "issue" */
["issue_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["issue_max_order_by"] | undefined,
	min?: GraphQLTypes["issue_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["issue_append_input"]: {
		requestParams?: GraphQLTypes["jsonb"] | undefined,
	resolveParams?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "issue" */
["issue_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["issue_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["issue_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "issue". All fields are combined with a logical 'AND'. */
["issue_bool_exp"]: {
		_and?: Array<GraphQLTypes["issue_bool_exp"]>,
	_not?: GraphQLTypes["issue_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["issue_bool_exp"]>,
	code?: GraphQLTypes["String_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	isPublic?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	isResolved?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	job?: GraphQLTypes["job_bool_exp"] | undefined,
	jobId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	message?: GraphQLTypes["String_comparison_exp"] | undefined,
	requestParams?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	resolveParams?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "issue" */
["issue_constraint"]: issue_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["issue_delete_at_path_input"]: {
		requestParams?: Array<string>,
	resolveParams?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["issue_delete_elem_input"]: {
		requestParams?: number | undefined,
	resolveParams?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["issue_delete_key_input"]: {
		requestParams?: string | undefined,
	resolveParams?: string | undefined
};
	/** input type for inserting data into table "issue" */
["issue_insert_input"]: {
		code?: string | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isPublic?: boolean | undefined,
	isResolved?: boolean | undefined,
	job?: GraphQLTypes["job_obj_rel_insert_input"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	message?: string | undefined,
	requestParams?: GraphQLTypes["jsonb"] | undefined,
	resolveParams?: GraphQLTypes["jsonb"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["issue_max_fields"]: {
	__typename: "issue_max_fields",
	code?: string | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	message?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "issue" */
["issue_max_order_by"]: {
		code?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	message?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["issue_min_fields"]: {
	__typename: "issue_min_fields",
	code?: string | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	message?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "issue" */
["issue_min_order_by"]: {
		code?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	message?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "issue" */
["issue_mutation_response"]: {
	__typename: "issue_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["issue"]> | undefined
};
	/** on conflict condition type for table "issue" */
["issue_on_conflict"]: {
		constraint: GraphQLTypes["issue_constraint"],
	update_columns: Array<GraphQLTypes["issue_update_column"]> | undefined,
	where?: GraphQLTypes["issue_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "issue". */
["issue_order_by"]: {
		code?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	isPublic?: GraphQLTypes["order_by"] | undefined,
	isResolved?: GraphQLTypes["order_by"] | undefined,
	job?: GraphQLTypes["job_order_by"] | undefined,
	jobId?: GraphQLTypes["order_by"] | undefined,
	message?: GraphQLTypes["order_by"] | undefined,
	requestParams?: GraphQLTypes["order_by"] | undefined,
	resolveParams?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: issue */
["issue_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["issue_prepend_input"]: {
		requestParams?: GraphQLTypes["jsonb"] | undefined,
	resolveParams?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "issue" */
["issue_select_column"]: issue_select_column;
	/** input type for updating data in table "issue" */
["issue_set_input"]: {
		code?: string | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isPublic?: boolean | undefined,
	isResolved?: boolean | undefined,
	jobId?: GraphQLTypes["uuid"] | undefined,
	message?: string | undefined,
	requestParams?: GraphQLTypes["jsonb"] | undefined,
	resolveParams?: GraphQLTypes["jsonb"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** update columns of table "issue" */
["issue_update_column"]: issue_update_column;
	/** columns and relationships of "job" */
["job"]: {
	__typename: "job",
	apiVersion?: string | undefined,
	/** An object relationship */
	connection?: GraphQLTypes["connection"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt: GraphQLTypes["timestamptz"],
	endedAt?: GraphQLTypes["timestamptz"] | undefined,
	/** An array relationship */
	entities: Array<GraphQLTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate: GraphQLTypes["entity_aggregate"],
	id: GraphQLTypes["uuid"],
	/** An object relationship */
	integration?: GraphQLTypes["integration"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	integrationSdkVersion?: string | undefined,
	integrationVersion?: string | undefined,
	/** An array relationship */
	issues: Array<GraphQLTypes["issue"]> | undefined,
	/** An aggregate relationship */
	issues_aggregate: GraphQLTypes["issue_aggregate"],
	logFile?: string | undefined,
	logLink?: string | undefined,
	logs?: GraphQLTypes["jsonb"] | undefined,
	method?: GraphQLTypes["job_method_enum"] | undefined,
	params?: GraphQLTypes["jsonb"] | undefined,
	requestId?: string | undefined,
	response?: GraphQLTypes["jsonb"] | undefined,
	sdkVersion?: string | undefined,
	startedAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["job_status_enum"] | undefined,
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "job" */
["job_aggregate"]: {
	__typename: "job_aggregate",
	aggregate?: GraphQLTypes["job_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["job"]> | undefined
};
	/** aggregate fields of "job" */
["job_aggregate_fields"]: {
	__typename: "job_aggregate_fields",
	count: number,
	max?: GraphQLTypes["job_max_fields"] | undefined,
	min?: GraphQLTypes["job_min_fields"] | undefined
};
	/** order by aggregate values of table "job" */
["job_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["job_max_order_by"] | undefined,
	min?: GraphQLTypes["job_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["job_append_input"]: {
		logs?: GraphQLTypes["jsonb"] | undefined,
	params?: GraphQLTypes["jsonb"] | undefined,
	response?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "job" */
["job_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["job_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["job_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "job". All fields are combined with a logical 'AND'. */
["job_bool_exp"]: {
		_and?: Array<GraphQLTypes["job_bool_exp"]>,
	_not?: GraphQLTypes["job_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["job_bool_exp"]>,
	apiVersion?: GraphQLTypes["String_comparison_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	endedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	entities?: GraphQLTypes["entity_bool_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	integration?: GraphQLTypes["integration_bool_exp"] | undefined,
	integrationId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	integrationSdkVersion?: GraphQLTypes["String_comparison_exp"] | undefined,
	integrationVersion?: GraphQLTypes["String_comparison_exp"] | undefined,
	issues?: GraphQLTypes["issue_bool_exp"] | undefined,
	logFile?: GraphQLTypes["String_comparison_exp"] | undefined,
	logLink?: GraphQLTypes["String_comparison_exp"] | undefined,
	logs?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	method?: GraphQLTypes["job_method_enum_comparison_exp"] | undefined,
	params?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	requestId?: GraphQLTypes["String_comparison_exp"] | undefined,
	response?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	sdkVersion?: GraphQLTypes["String_comparison_exp"] | undefined,
	startedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	status?: GraphQLTypes["job_status_enum_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "job" */
["job_constraint"]: job_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["job_delete_at_path_input"]: {
		logs?: Array<string>,
	params?: Array<string>,
	response?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["job_delete_elem_input"]: {
		logs?: number | undefined,
	params?: number | undefined,
	response?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["job_delete_key_input"]: {
		logs?: string | undefined,
	params?: string | undefined,
	response?: string | undefined
};
	/** input type for inserting data into table "job" */
["job_insert_input"]: {
		apiVersion?: string | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	endedAt?: GraphQLTypes["timestamptz"] | undefined,
	entities?: GraphQLTypes["entity_arr_rel_insert_input"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integration?: GraphQLTypes["integration_obj_rel_insert_input"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	integrationSdkVersion?: string | undefined,
	integrationVersion?: string | undefined,
	issues?: GraphQLTypes["issue_arr_rel_insert_input"] | undefined,
	logFile?: string | undefined,
	logLink?: string | undefined,
	logs?: GraphQLTypes["jsonb"] | undefined,
	method?: GraphQLTypes["job_method_enum"] | undefined,
	params?: GraphQLTypes["jsonb"] | undefined,
	requestId?: string | undefined,
	response?: GraphQLTypes["jsonb"] | undefined,
	sdkVersion?: string | undefined,
	startedAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["job_status_enum"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["job_max_fields"]: {
	__typename: "job_max_fields",
	apiVersion?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	endedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	integrationSdkVersion?: string | undefined,
	integrationVersion?: string | undefined,
	logFile?: string | undefined,
	logLink?: string | undefined,
	requestId?: string | undefined,
	sdkVersion?: string | undefined,
	startedAt?: GraphQLTypes["timestamptz"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "job" */
["job_max_order_by"]: {
		apiVersion?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	endedAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	integrationSdkVersion?: GraphQLTypes["order_by"] | undefined,
	integrationVersion?: GraphQLTypes["order_by"] | undefined,
	logFile?: GraphQLTypes["order_by"] | undefined,
	logLink?: GraphQLTypes["order_by"] | undefined,
	requestId?: GraphQLTypes["order_by"] | undefined,
	sdkVersion?: GraphQLTypes["order_by"] | undefined,
	startedAt?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	["job_method_enum"]: job_method_enum;
	/** Boolean expression to compare columns of type "job_method_enum". All fields are combined with logical 'AND'. */
["job_method_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["job_method_enum"] | undefined,
	_in?: Array<GraphQLTypes["job_method_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["job_method_enum"] | undefined,
	_nin?: Array<GraphQLTypes["job_method_enum"]>
};
	/** aggregate min on columns */
["job_min_fields"]: {
	__typename: "job_min_fields",
	apiVersion?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	endedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	integrationSdkVersion?: string | undefined,
	integrationVersion?: string | undefined,
	logFile?: string | undefined,
	logLink?: string | undefined,
	requestId?: string | undefined,
	sdkVersion?: string | undefined,
	startedAt?: GraphQLTypes["timestamptz"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "job" */
["job_min_order_by"]: {
		apiVersion?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	endedAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	integrationSdkVersion?: GraphQLTypes["order_by"] | undefined,
	integrationVersion?: GraphQLTypes["order_by"] | undefined,
	logFile?: GraphQLTypes["order_by"] | undefined,
	logLink?: GraphQLTypes["order_by"] | undefined,
	requestId?: GraphQLTypes["order_by"] | undefined,
	sdkVersion?: GraphQLTypes["order_by"] | undefined,
	startedAt?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "job" */
["job_mutation_response"]: {
	__typename: "job_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["job"]> | undefined
};
	/** input type for inserting object relation for remote table "job" */
["job_obj_rel_insert_input"]: {
		data: GraphQLTypes["job_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["job_on_conflict"] | undefined
};
	/** on conflict condition type for table "job" */
["job_on_conflict"]: {
		constraint: GraphQLTypes["job_constraint"],
	update_columns: Array<GraphQLTypes["job_update_column"]> | undefined,
	where?: GraphQLTypes["job_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "job". */
["job_order_by"]: {
		apiVersion?: GraphQLTypes["order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	endedAt?: GraphQLTypes["order_by"] | undefined,
	entities_aggregate?: GraphQLTypes["entity_aggregate_order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integration?: GraphQLTypes["integration_order_by"] | undefined,
	integrationId?: GraphQLTypes["order_by"] | undefined,
	integrationSdkVersion?: GraphQLTypes["order_by"] | undefined,
	integrationVersion?: GraphQLTypes["order_by"] | undefined,
	issues_aggregate?: GraphQLTypes["issue_aggregate_order_by"] | undefined,
	logFile?: GraphQLTypes["order_by"] | undefined,
	logLink?: GraphQLTypes["order_by"] | undefined,
	logs?: GraphQLTypes["order_by"] | undefined,
	method?: GraphQLTypes["order_by"] | undefined,
	params?: GraphQLTypes["order_by"] | undefined,
	requestId?: GraphQLTypes["order_by"] | undefined,
	response?: GraphQLTypes["order_by"] | undefined,
	sdkVersion?: GraphQLTypes["order_by"] | undefined,
	startedAt?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: job */
["job_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["job_prepend_input"]: {
		logs?: GraphQLTypes["jsonb"] | undefined,
	params?: GraphQLTypes["jsonb"] | undefined,
	response?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "job" */
["job_select_column"]: job_select_column;
	/** input type for updating data in table "job" */
["job_set_input"]: {
		apiVersion?: string | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	endedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrationId?: GraphQLTypes["uuid"] | undefined,
	integrationSdkVersion?: string | undefined,
	integrationVersion?: string | undefined,
	logFile?: string | undefined,
	logLink?: string | undefined,
	logs?: GraphQLTypes["jsonb"] | undefined,
	method?: GraphQLTypes["job_method_enum"] | undefined,
	params?: GraphQLTypes["jsonb"] | undefined,
	requestId?: string | undefined,
	response?: GraphQLTypes["jsonb"] | undefined,
	sdkVersion?: string | undefined,
	startedAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["job_status_enum"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	["job_status_enum"]: job_status_enum;
	/** Boolean expression to compare columns of type "job_status_enum". All fields are combined with logical 'AND'. */
["job_status_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["job_status_enum"] | undefined,
	_in?: Array<GraphQLTypes["job_status_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["job_status_enum"] | undefined,
	_nin?: Array<GraphQLTypes["job_status_enum"]>
};
	/** update columns of table "job" */
["job_update_column"]: job_update_column;
	/** columns and relationships of "job_method" */
["jobMethod"]: {
	__typename: "jobMethod",
	name: string
};
	/** aggregated selection of "job_method" */
["jobMethod_aggregate"]: {
	__typename: "jobMethod_aggregate",
	aggregate?: GraphQLTypes["jobMethod_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["jobMethod"]> | undefined
};
	/** aggregate fields of "job_method" */
["jobMethod_aggregate_fields"]: {
	__typename: "jobMethod_aggregate_fields",
	count: number,
	max?: GraphQLTypes["jobMethod_max_fields"] | undefined,
	min?: GraphQLTypes["jobMethod_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "job_method". All fields are combined with a logical 'AND'. */
["jobMethod_bool_exp"]: {
		_and?: Array<GraphQLTypes["jobMethod_bool_exp"]>,
	_not?: GraphQLTypes["jobMethod_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["jobMethod_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "job_method" */
["jobMethod_constraint"]: jobMethod_constraint;
	/** input type for inserting data into table "job_method" */
["jobMethod_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["jobMethod_max_fields"]: {
	__typename: "jobMethod_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["jobMethod_min_fields"]: {
	__typename: "jobMethod_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "job_method" */
["jobMethod_mutation_response"]: {
	__typename: "jobMethod_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["jobMethod"]> | undefined
};
	/** on conflict condition type for table "job_method" */
["jobMethod_on_conflict"]: {
		constraint: GraphQLTypes["jobMethod_constraint"],
	update_columns: Array<GraphQLTypes["jobMethod_update_column"]> | undefined,
	where?: GraphQLTypes["jobMethod_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "job_method". */
["jobMethod_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: jobMethod */
["jobMethod_pk_columns_input"]: {
		name: string
};
	/** select columns of table "job_method" */
["jobMethod_select_column"]: jobMethod_select_column;
	/** input type for updating data in table "job_method" */
["jobMethod_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "job_method" */
["jobMethod_update_column"]: jobMethod_update_column;
	/** columns and relationships of "job_status" */
["jobStatus"]: {
	__typename: "jobStatus",
	name: string
};
	/** aggregated selection of "job_status" */
["jobStatus_aggregate"]: {
	__typename: "jobStatus_aggregate",
	aggregate?: GraphQLTypes["jobStatus_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["jobStatus"]> | undefined
};
	/** aggregate fields of "job_status" */
["jobStatus_aggregate_fields"]: {
	__typename: "jobStatus_aggregate_fields",
	count: number,
	max?: GraphQLTypes["jobStatus_max_fields"] | undefined,
	min?: GraphQLTypes["jobStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "job_status". All fields are combined with a logical 'AND'. */
["jobStatus_bool_exp"]: {
		_and?: Array<GraphQLTypes["jobStatus_bool_exp"]>,
	_not?: GraphQLTypes["jobStatus_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["jobStatus_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "job_status" */
["jobStatus_constraint"]: jobStatus_constraint;
	/** input type for inserting data into table "job_status" */
["jobStatus_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["jobStatus_max_fields"]: {
	__typename: "jobStatus_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["jobStatus_min_fields"]: {
	__typename: "jobStatus_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "job_status" */
["jobStatus_mutation_response"]: {
	__typename: "jobStatus_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["jobStatus"]> | undefined
};
	/** on conflict condition type for table "job_status" */
["jobStatus_on_conflict"]: {
		constraint: GraphQLTypes["jobStatus_constraint"],
	update_columns: Array<GraphQLTypes["jobStatus_update_column"]> | undefined,
	where?: GraphQLTypes["jobStatus_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "job_status". */
["jobStatus_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: jobStatus */
["jobStatus_pk_columns_input"]: {
		name: string
};
	/** select columns of table "job_status" */
["jobStatus_select_column"]: jobStatus_select_column;
	/** input type for updating data in table "job_status" */
["jobStatus_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "job_status" */
["jobStatus_update_column"]: jobStatus_update_column;
	["jsonb"]:any;
	/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
		/** is the column contained in the given json value */
	_contained_in?: GraphQLTypes["jsonb"] | undefined,
	/** does the column contain the given json value at the top level */
	_contains?: GraphQLTypes["jsonb"] | undefined,
	_eq?: GraphQLTypes["jsonb"] | undefined,
	_gt?: GraphQLTypes["jsonb"] | undefined,
	_gte?: GraphQLTypes["jsonb"] | undefined,
	/** does the string exist as a top-level key in the column */
	_has_key?: string | undefined,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: Array<string>,
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: Array<string>,
	_in?: Array<GraphQLTypes["jsonb"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["jsonb"] | undefined,
	_lte?: GraphQLTypes["jsonb"] | undefined,
	_neq?: GraphQLTypes["jsonb"] | undefined,
	_nin?: Array<GraphQLTypes["jsonb"]>
};
	/** columns and relationships of "line" */
["line"]: {
	__typename: "line",
	/** An object relationship */
	booking?: GraphQLTypes["booking"] | undefined,
	bookingId?: GraphQLTypes["uuid"] | undefined,
	centTotal?: number | undefined,
	classification?: GraphQLTypes["classification_enum"] | undefined,
	/** An object relationship */
	connection?: GraphQLTypes["connection"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt: GraphQLTypes["timestamptz"],
	description?: string | undefined,
	/** An array relationship */
	enhancementLines: Array<GraphQLTypes["line"]> | undefined,
	/** An aggregate relationship */
	enhancementLines_aggregate: GraphQLTypes["line_aggregate"],
	/** An object relationship */
	enhancingLine?: GraphQLTypes["line"] | undefined,
	enhancingLineId?: GraphQLTypes["uuid"] | undefined,
	id: GraphQLTypes["uuid"],
	invoiceStatus?: string | undefined,
	isEnhanced?: boolean | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	originCentTotal?: number | undefined,
	originCurrency?: string | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined,
	/** An object relationship */
	payment?: GraphQLTypes["payment"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	subclassification?: GraphQLTypes["subclassification_enum"] | undefined,
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregated selection of "line" */
["line_aggregate"]: {
	__typename: "line_aggregate",
	aggregate?: GraphQLTypes["line_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["line"]> | undefined
};
	/** aggregate fields of "line" */
["line_aggregate_fields"]: {
	__typename: "line_aggregate_fields",
	avg?: GraphQLTypes["line_avg_fields"] | undefined,
	count: number,
	max?: GraphQLTypes["line_max_fields"] | undefined,
	min?: GraphQLTypes["line_min_fields"] | undefined,
	stddev?: GraphQLTypes["line_stddev_fields"] | undefined,
	stddev_pop?: GraphQLTypes["line_stddev_pop_fields"] | undefined,
	stddev_samp?: GraphQLTypes["line_stddev_samp_fields"] | undefined,
	sum?: GraphQLTypes["line_sum_fields"] | undefined,
	var_pop?: GraphQLTypes["line_var_pop_fields"] | undefined,
	var_samp?: GraphQLTypes["line_var_samp_fields"] | undefined,
	variance?: GraphQLTypes["line_variance_fields"] | undefined
};
	/** order by aggregate values of table "line" */
["line_aggregate_order_by"]: {
		avg?: GraphQLTypes["line_avg_order_by"] | undefined,
	count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["line_max_order_by"] | undefined,
	min?: GraphQLTypes["line_min_order_by"] | undefined,
	stddev?: GraphQLTypes["line_stddev_order_by"] | undefined,
	stddev_pop?: GraphQLTypes["line_stddev_pop_order_by"] | undefined,
	stddev_samp?: GraphQLTypes["line_stddev_samp_order_by"] | undefined,
	sum?: GraphQLTypes["line_sum_order_by"] | undefined,
	var_pop?: GraphQLTypes["line_var_pop_order_by"] | undefined,
	var_samp?: GraphQLTypes["line_var_samp_order_by"] | undefined,
	variance?: GraphQLTypes["line_variance_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["line_append_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "line" */
["line_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["line_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["line_on_conflict"] | undefined
};
	/** aggregate avg on columns */
["line_avg_fields"]: {
	__typename: "line_avg_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by avg() on columns of table "line" */
["line_avg_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** Boolean expression to filter rows from the table "line". All fields are combined with a logical 'AND'. */
["line_bool_exp"]: {
		_and?: Array<GraphQLTypes["line_bool_exp"]>,
	_not?: GraphQLTypes["line_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["line_bool_exp"]>,
	booking?: GraphQLTypes["booking_bool_exp"] | undefined,
	bookingId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	centTotal?: GraphQLTypes["Int_comparison_exp"] | undefined,
	classification?: GraphQLTypes["classification_enum_comparison_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	description?: GraphQLTypes["String_comparison_exp"] | undefined,
	enhancementLines?: GraphQLTypes["line_bool_exp"] | undefined,
	enhancingLine?: GraphQLTypes["line_bool_exp"] | undefined,
	enhancingLineId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	invoiceStatus?: GraphQLTypes["String_comparison_exp"] | undefined,
	isEnhanced?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	metadata?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	originCentTotal?: GraphQLTypes["Int_comparison_exp"] | undefined,
	originCurrency?: GraphQLTypes["String_comparison_exp"] | undefined,
	originExchangeRate?: GraphQLTypes["numeric_comparison_exp"] | undefined,
	payment?: GraphQLTypes["payment_bool_exp"] | undefined,
	paymentId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	subclassification?: GraphQLTypes["subclassification_enum_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	unitId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "line" */
["line_constraint"]: line_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["line_delete_at_path_input"]: {
		metadata?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["line_delete_elem_input"]: {
		metadata?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["line_delete_key_input"]: {
		metadata?: string | undefined
};
	/** input type for incrementing numeric columns in table "line" */
["line_inc_input"]: {
		centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined
};
	/** input type for inserting data into table "line" */
["line_insert_input"]: {
		booking?: GraphQLTypes["booking_obj_rel_insert_input"] | undefined,
	bookingId?: GraphQLTypes["uuid"] | undefined,
	centTotal?: number | undefined,
	classification?: GraphQLTypes["classification_enum"] | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	enhancementLines?: GraphQLTypes["line_arr_rel_insert_input"] | undefined,
	enhancingLine?: GraphQLTypes["line_obj_rel_insert_input"] | undefined,
	enhancingLineId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	invoiceStatus?: string | undefined,
	isEnhanced?: boolean | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	originCentTotal?: number | undefined,
	originCurrency?: string | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined,
	payment?: GraphQLTypes["payment_obj_rel_insert_input"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	subclassification?: GraphQLTypes["subclassification_enum"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["line_max_fields"]: {
	__typename: "line_max_fields",
	bookingId?: GraphQLTypes["uuid"] | undefined,
	centTotal?: number | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	enhancingLineId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	invoiceStatus?: string | undefined,
	originCentTotal?: number | undefined,
	originCurrency?: string | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "line" */
["line_max_order_by"]: {
		bookingId?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	enhancingLineId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	invoiceStatus?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originCurrency?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["line_min_fields"]: {
	__typename: "line_min_fields",
	bookingId?: GraphQLTypes["uuid"] | undefined,
	centTotal?: number | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	enhancingLineId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	invoiceStatus?: string | undefined,
	originCentTotal?: number | undefined,
	originCurrency?: string | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "line" */
["line_min_order_by"]: {
		bookingId?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	enhancingLineId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	invoiceStatus?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originCurrency?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "line" */
["line_mutation_response"]: {
	__typename: "line_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["line"]> | undefined
};
	/** input type for inserting object relation for remote table "line" */
["line_obj_rel_insert_input"]: {
		data: GraphQLTypes["line_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["line_on_conflict"] | undefined
};
	/** on conflict condition type for table "line" */
["line_on_conflict"]: {
		constraint: GraphQLTypes["line_constraint"],
	update_columns: Array<GraphQLTypes["line_update_column"]> | undefined,
	where?: GraphQLTypes["line_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "line". */
["line_order_by"]: {
		booking?: GraphQLTypes["booking_order_by"] | undefined,
	bookingId?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	classification?: GraphQLTypes["order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	enhancementLines_aggregate?: GraphQLTypes["line_aggregate_order_by"] | undefined,
	enhancingLine?: GraphQLTypes["line_order_by"] | undefined,
	enhancingLineId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	invoiceStatus?: GraphQLTypes["order_by"] | undefined,
	isEnhanced?: GraphQLTypes["order_by"] | undefined,
	metadata?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originCurrency?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined,
	payment?: GraphQLTypes["payment_order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	subclassification?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: line */
["line_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["line_prepend_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "line" */
["line_select_column"]: line_select_column;
	/** input type for updating data in table "line" */
["line_set_input"]: {
		bookingId?: GraphQLTypes["uuid"] | undefined,
	centTotal?: number | undefined,
	classification?: GraphQLTypes["classification_enum"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	enhancingLineId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	invoiceStatus?: string | undefined,
	isEnhanced?: boolean | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	originCentTotal?: number | undefined,
	originCurrency?: string | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	subclassification?: GraphQLTypes["subclassification_enum"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate stddev on columns */
["line_stddev_fields"]: {
	__typename: "line_stddev_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by stddev() on columns of table "line" */
["line_stddev_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_pop on columns */
["line_stddev_pop_fields"]: {
	__typename: "line_stddev_pop_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by stddev_pop() on columns of table "line" */
["line_stddev_pop_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_samp on columns */
["line_stddev_samp_fields"]: {
	__typename: "line_stddev_samp_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by stddev_samp() on columns of table "line" */
["line_stddev_samp_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate sum on columns */
["line_sum_fields"]: {
	__typename: "line_sum_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: GraphQLTypes["numeric"] | undefined
};
	/** order by sum() on columns of table "line" */
["line_sum_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** update columns of table "line" */
["line_update_column"]: line_update_column;
	/** aggregate var_pop on columns */
["line_var_pop_fields"]: {
	__typename: "line_var_pop_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by var_pop() on columns of table "line" */
["line_var_pop_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate var_samp on columns */
["line_var_samp_fields"]: {
	__typename: "line_var_samp_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by var_samp() on columns of table "line" */
["line_var_samp_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate variance on columns */
["line_variance_fields"]: {
	__typename: "line_variance_fields",
	centTotal?: number | undefined,
	originCentTotal?: number | undefined,
	originExchangeRate?: number | undefined
};
	/** order by variance() on columns of table "line" */
["line_variance_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined,
	originCentTotal?: GraphQLTypes["order_by"] | undefined,
	originExchangeRate?: GraphQLTypes["order_by"] | undefined
};
	/** columns and relationships of "metric" */
["metric"]: {
	__typename: "metric",
	/** An object relationship */
	connection: GraphQLTypes["connection"],
	connectionId: GraphQLTypes["uuid"],
	createdAt: GraphQLTypes["timestamptz"],
	ensuedAt: GraphQLTypes["timestamptz"],
	id: GraphQLTypes["uuid"],
	metadata: GraphQLTypes["jsonb"],
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	text?: string | undefined,
	type: string,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt: GraphQLTypes["timestamptz"],
	value?: GraphQLTypes["float8"] | undefined
};
	/** aggregated selection of "metric" */
["metric_aggregate"]: {
	__typename: "metric_aggregate",
	aggregate?: GraphQLTypes["metric_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["metric"]> | undefined
};
	/** aggregate fields of "metric" */
["metric_aggregate_fields"]: {
	__typename: "metric_aggregate_fields",
	avg?: GraphQLTypes["metric_avg_fields"] | undefined,
	count: number,
	max?: GraphQLTypes["metric_max_fields"] | undefined,
	min?: GraphQLTypes["metric_min_fields"] | undefined,
	stddev?: GraphQLTypes["metric_stddev_fields"] | undefined,
	stddev_pop?: GraphQLTypes["metric_stddev_pop_fields"] | undefined,
	stddev_samp?: GraphQLTypes["metric_stddev_samp_fields"] | undefined,
	sum?: GraphQLTypes["metric_sum_fields"] | undefined,
	var_pop?: GraphQLTypes["metric_var_pop_fields"] | undefined,
	var_samp?: GraphQLTypes["metric_var_samp_fields"] | undefined,
	variance?: GraphQLTypes["metric_variance_fields"] | undefined
};
	/** order by aggregate values of table "metric" */
["metric_aggregate_order_by"]: {
		avg?: GraphQLTypes["metric_avg_order_by"] | undefined,
	count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["metric_max_order_by"] | undefined,
	min?: GraphQLTypes["metric_min_order_by"] | undefined,
	stddev?: GraphQLTypes["metric_stddev_order_by"] | undefined,
	stddev_pop?: GraphQLTypes["metric_stddev_pop_order_by"] | undefined,
	stddev_samp?: GraphQLTypes["metric_stddev_samp_order_by"] | undefined,
	sum?: GraphQLTypes["metric_sum_order_by"] | undefined,
	var_pop?: GraphQLTypes["metric_var_pop_order_by"] | undefined,
	var_samp?: GraphQLTypes["metric_var_samp_order_by"] | undefined,
	variance?: GraphQLTypes["metric_variance_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["metric_append_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "metric" */
["metric_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["metric_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["metric_on_conflict"] | undefined
};
	/** aggregate avg on columns */
["metric_avg_fields"]: {
	__typename: "metric_avg_fields",
	value?: number | undefined
};
	/** order by avg() on columns of table "metric" */
["metric_avg_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** Boolean expression to filter rows from the table "metric". All fields are combined with a logical 'AND'. */
["metric_bool_exp"]: {
		_and?: Array<GraphQLTypes["metric_bool_exp"]>,
	_not?: GraphQLTypes["metric_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["metric_bool_exp"]>,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	ensuedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	metadata?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	text?: GraphQLTypes["String_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	unitId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	value?: GraphQLTypes["float8_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "metric" */
["metric_constraint"]: metric_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["metric_delete_at_path_input"]: {
		metadata?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["metric_delete_elem_input"]: {
		metadata?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["metric_delete_key_input"]: {
		metadata?: string | undefined
};
	/** input type for incrementing numeric columns in table "metric" */
["metric_inc_input"]: {
		value?: GraphQLTypes["float8"] | undefined
};
	/** input type for inserting data into table "metric" */
["metric_insert_input"]: {
		connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	ensuedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	text?: string | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	value?: GraphQLTypes["float8"] | undefined
};
	/** aggregate max on columns */
["metric_max_fields"]: {
	__typename: "metric_max_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	ensuedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	text?: string | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	value?: GraphQLTypes["float8"] | undefined
};
	/** order by max() on columns of table "metric" */
["metric_max_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	ensuedAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	text?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["metric_min_fields"]: {
	__typename: "metric_min_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	ensuedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	text?: string | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	value?: GraphQLTypes["float8"] | undefined
};
	/** order by min() on columns of table "metric" */
["metric_min_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	ensuedAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	text?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	value?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "metric" */
["metric_mutation_response"]: {
	__typename: "metric_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["metric"]> | undefined
};
	/** on conflict condition type for table "metric" */
["metric_on_conflict"]: {
		constraint: GraphQLTypes["metric_constraint"],
	update_columns: Array<GraphQLTypes["metric_update_column"]> | undefined,
	where?: GraphQLTypes["metric_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "metric". */
["metric_order_by"]: {
		connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	ensuedAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	metadata?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	text?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	value?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: metric */
["metric_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["metric_prepend_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "metric" */
["metric_select_column"]: metric_select_column;
	/** input type for updating data in table "metric" */
["metric_set_input"]: {
		connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	ensuedAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	text?: string | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	value?: GraphQLTypes["float8"] | undefined
};
	/** aggregate stddev on columns */
["metric_stddev_fields"]: {
	__typename: "metric_stddev_fields",
	value?: number | undefined
};
	/** order by stddev() on columns of table "metric" */
["metric_stddev_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_pop on columns */
["metric_stddev_pop_fields"]: {
	__typename: "metric_stddev_pop_fields",
	value?: number | undefined
};
	/** order by stddev_pop() on columns of table "metric" */
["metric_stddev_pop_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_samp on columns */
["metric_stddev_samp_fields"]: {
	__typename: "metric_stddev_samp_fields",
	value?: number | undefined
};
	/** order by stddev_samp() on columns of table "metric" */
["metric_stddev_samp_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate sum on columns */
["metric_sum_fields"]: {
	__typename: "metric_sum_fields",
	value?: GraphQLTypes["float8"] | undefined
};
	/** order by sum() on columns of table "metric" */
["metric_sum_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** update columns of table "metric" */
["metric_update_column"]: metric_update_column;
	/** aggregate var_pop on columns */
["metric_var_pop_fields"]: {
	__typename: "metric_var_pop_fields",
	value?: number | undefined
};
	/** order by var_pop() on columns of table "metric" */
["metric_var_pop_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate var_samp on columns */
["metric_var_samp_fields"]: {
	__typename: "metric_var_samp_fields",
	value?: number | undefined
};
	/** order by var_samp() on columns of table "metric" */
["metric_var_samp_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate variance on columns */
["metric_variance_fields"]: {
	__typename: "metric_variance_fields",
	value?: number | undefined
};
	/** order by variance() on columns of table "metric" */
["metric_variance_order_by"]: {
		value?: GraphQLTypes["order_by"] | undefined
};
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete single row from the table: "booking" */
	deleteBooking?: GraphQLTypes["booking"] | undefined,
	/** delete single row from the table: "booking_status" */
	deleteBookingStatus?: GraphQLTypes["bookingStatus"] | undefined,
	/** delete data from the table: "booking_status" */
	deleteBookingStatuses?: GraphQLTypes["bookingStatus_mutation_response"] | undefined,
	/** delete data from the table: "booking" */
	deleteBookings?: GraphQLTypes["booking_mutation_response"] | undefined,
	/** delete single row from the table: "classification" */
	deleteClassification?: GraphQLTypes["classification"] | undefined,
	/** delete data from the table: "classification" */
	deleteClassifications?: GraphQLTypes["classification_mutation_response"] | undefined,
	/** delete single row from the table: "connection" */
	deleteConnection?: GraphQLTypes["connection"] | undefined,
	/** delete data from the table: "connection" */
	deleteConnections?: GraphQLTypes["connection_mutation_response"] | undefined,
	/** delete data from the table: "currency" */
	deleteCurrencies?: GraphQLTypes["currency_mutation_response"] | undefined,
	/** delete single row from the table: "currency" */
	deleteCurrency?: GraphQLTypes["currency"] | undefined,
	/** delete data from the table: "entity" */
	deleteEntities?: GraphQLTypes["entity_mutation_response"] | undefined,
	/** delete single row from the table: "entity" */
	deleteEntity?: GraphQLTypes["entity"] | undefined,
	/** delete single row from the table: "entity_status" */
	deleteEntityStatus?: GraphQLTypes["entityStatus"] | undefined,
	/** delete data from the table: "entity_status" */
	deleteEntityStatuses?: GraphQLTypes["entityStatus_mutation_response"] | undefined,
	/** delete single row from the table: "integration" */
	deleteIntegration?: GraphQLTypes["integration"] | undefined,
	/** delete single row from the table: "integration_type" */
	deleteIntegrationType?: GraphQLTypes["integrationType"] | undefined,
	/** delete data from the table: "integration_type" */
	deleteIntegrationTypes?: GraphQLTypes["integrationType_mutation_response"] | undefined,
	/** delete data from the table: "integration" */
	deleteIntegrations?: GraphQLTypes["integration_mutation_response"] | undefined,
	/** delete single row from the table: "issue" */
	deleteIssue?: GraphQLTypes["issue"] | undefined,
	/** delete data from the table: "issue" */
	deleteIssues?: GraphQLTypes["issue_mutation_response"] | undefined,
	/** delete single row from the table: "job" */
	deleteJob?: GraphQLTypes["job"] | undefined,
	/** delete single row from the table: "job_method" */
	deleteJobMethod?: GraphQLTypes["jobMethod"] | undefined,
	/** delete data from the table: "job_method" */
	deleteJobMethods?: GraphQLTypes["jobMethod_mutation_response"] | undefined,
	/** delete single row from the table: "job_status" */
	deleteJobStatus?: GraphQLTypes["jobStatus"] | undefined,
	/** delete data from the table: "job_status" */
	deleteJobStatuses?: GraphQLTypes["jobStatus_mutation_response"] | undefined,
	/** delete data from the table: "job" */
	deleteJobs?: GraphQLTypes["job_mutation_response"] | undefined,
	/** delete single row from the table: "line" */
	deleteLine?: GraphQLTypes["line"] | undefined,
	/** delete data from the table: "line" */
	deleteLines?: GraphQLTypes["line_mutation_response"] | undefined,
	/** delete single row from the table: "metric" */
	deleteMetric?: GraphQLTypes["metric"] | undefined,
	/** delete data from the table: "metric" */
	deleteMetrics?: GraphQLTypes["metric_mutation_response"] | undefined,
	/** delete single row from the table: "normalized_type" */
	deleteNormalizedType?: GraphQLTypes["normalizedType"] | undefined,
	/** delete data from the table: "normalized_type" */
	deleteNormalizedTypes?: GraphQLTypes["normalizedType_mutation_response"] | undefined,
	/** delete single row from the table: "payment" */
	deletePayment?: GraphQLTypes["payment"] | undefined,
	/** delete single row from the table: "payment_status" */
	deletePaymentStatus?: GraphQLTypes["paymentStatus"] | undefined,
	/** delete data from the table: "payment_status" */
	deletePaymentStatuses?: GraphQLTypes["paymentStatus_mutation_response"] | undefined,
	/** delete single row from the table: "payment_type" */
	deletePaymentType?: GraphQLTypes["paymentType"] | undefined,
	/** delete data from the table: "payment_type" */
	deletePaymentTypes?: GraphQLTypes["paymentType_mutation_response"] | undefined,
	/** delete data from the table: "payment" */
	deletePayments?: GraphQLTypes["payment_mutation_response"] | undefined,
	/** delete single row from the table: "subclassification" */
	deleteSubclassification?: GraphQLTypes["subclassification"] | undefined,
	/** delete data from the table: "subclassification" */
	deleteSubclassifications?: GraphQLTypes["subclassification_mutation_response"] | undefined,
	/** delete single row from the table: "tag" */
	deleteTag?: GraphQLTypes["tag"] | undefined,
	/** delete data from the table: "tag" */
	deleteTags?: GraphQLTypes["tag_mutation_response"] | undefined,
	/** delete single row from the table: "team" */
	deleteTeam?: GraphQLTypes["team"] | undefined,
	/** delete single row from the table: "team_user" */
	deleteTeamUser?: GraphQLTypes["teamUser"] | undefined,
	/** delete data from the table: "team_user" */
	deleteTeamUsers?: GraphQLTypes["teamUser_mutation_response"] | undefined,
	/** delete data from the table: "team" */
	deleteTeams?: GraphQLTypes["team_mutation_response"] | undefined,
	/** delete single row from the table: "unit" */
	deleteUnit?: GraphQLTypes["unit"] | undefined,
	/** delete data from the table: "unit" */
	deleteUnits?: GraphQLTypes["unit_mutation_response"] | undefined,
	/** delete single row from the table: "user" */
	deleteUser?: GraphQLTypes["user"] | undefined,
	/** delete single row from the table: "user_status" */
	deleteUserStatus?: GraphQLTypes["userStatus"] | undefined,
	/** delete data from the table: "user_status" */
	deleteUserStatuses?: GraphQLTypes["userStatus_mutation_response"] | undefined,
	/** delete data from the table: "user" */
	deleteUsers?: GraphQLTypes["user_mutation_response"] | undefined,
	/** delete single row from the table: "webhook" */
	deleteWebhook?: GraphQLTypes["webhook"] | undefined,
	/** delete data from the table: "webhook" */
	deleteWebhooks?: GraphQLTypes["webhook_mutation_response"] | undefined,
	/** delete data from the table: "booking_channel" */
	delete_booking_channel?: GraphQLTypes["booking_channel_mutation_response"] | undefined,
	/** delete single row from the table: "booking_channel" */
	delete_booking_channel_by_pk?: GraphQLTypes["booking_channel"] | undefined,
	/** insert a single row into the table: "booking" */
	insertBooking?: GraphQLTypes["booking"] | undefined,
	/** insert a single row into the table: "booking_status" */
	insertBookingStatus?: GraphQLTypes["bookingStatus"] | undefined,
	/** insert data into the table: "booking_status" */
	insertBookingStatuses?: GraphQLTypes["bookingStatus_mutation_response"] | undefined,
	/** insert data into the table: "booking" */
	insertBookings?: GraphQLTypes["booking_mutation_response"] | undefined,
	/** insert a single row into the table: "classification" */
	insertClassification?: GraphQLTypes["classification"] | undefined,
	/** insert data into the table: "classification" */
	insertClassifications?: GraphQLTypes["classification_mutation_response"] | undefined,
	/** insert a single row into the table: "connection" */
	insertConnection?: GraphQLTypes["connection"] | undefined,
	/** insert data into the table: "connection" */
	insertConnections?: GraphQLTypes["connection_mutation_response"] | undefined,
	/** insert data into the table: "currency" */
	insertCurrencies?: GraphQLTypes["currency_mutation_response"] | undefined,
	/** insert a single row into the table: "currency" */
	insertCurrency?: GraphQLTypes["currency"] | undefined,
	/** insert data into the table: "entity" */
	insertEntities?: GraphQLTypes["entity_mutation_response"] | undefined,
	/** insert a single row into the table: "entity" */
	insertEntity?: GraphQLTypes["entity"] | undefined,
	/** insert a single row into the table: "entity_status" */
	insertEntityStatus?: GraphQLTypes["entityStatus"] | undefined,
	/** insert data into the table: "entity_status" */
	insertEntityStatuses?: GraphQLTypes["entityStatus_mutation_response"] | undefined,
	/** insert a single row into the table: "integration" */
	insertIntegration?: GraphQLTypes["integration"] | undefined,
	/** insert a single row into the table: "integration_type" */
	insertIntegrationType?: GraphQLTypes["integrationType"] | undefined,
	/** insert data into the table: "integration_type" */
	insertIntegrationTypes?: GraphQLTypes["integrationType_mutation_response"] | undefined,
	/** insert data into the table: "integration" */
	insertIntegrations?: GraphQLTypes["integration_mutation_response"] | undefined,
	/** insert a single row into the table: "issue" */
	insertIssue?: GraphQLTypes["issue"] | undefined,
	/** insert data into the table: "issue" */
	insertIssues?: GraphQLTypes["issue_mutation_response"] | undefined,
	/** insert a single row into the table: "job" */
	insertJob?: GraphQLTypes["job"] | undefined,
	/** insert a single row into the table: "job_method" */
	insertJobMethod?: GraphQLTypes["jobMethod"] | undefined,
	/** insert data into the table: "job_method" */
	insertJobMethods?: GraphQLTypes["jobMethod_mutation_response"] | undefined,
	/** insert a single row into the table: "job_status" */
	insertJobStatus?: GraphQLTypes["jobStatus"] | undefined,
	/** insert data into the table: "job_status" */
	insertJobStatuses?: GraphQLTypes["jobStatus_mutation_response"] | undefined,
	/** insert data into the table: "job" */
	insertJobs?: GraphQLTypes["job_mutation_response"] | undefined,
	/** insert a single row into the table: "line" */
	insertLine?: GraphQLTypes["line"] | undefined,
	/** insert data into the table: "line" */
	insertLines?: GraphQLTypes["line_mutation_response"] | undefined,
	/** insert a single row into the table: "metric" */
	insertMetric?: GraphQLTypes["metric"] | undefined,
	/** insert data into the table: "metric" */
	insertMetrics?: GraphQLTypes["metric_mutation_response"] | undefined,
	/** insert a single row into the table: "normalized_type" */
	insertNormalizedType?: GraphQLTypes["normalizedType"] | undefined,
	/** insert data into the table: "normalized_type" */
	insertNormalizedTypes?: GraphQLTypes["normalizedType_mutation_response"] | undefined,
	/** insert a single row into the table: "payment" */
	insertPayment?: GraphQLTypes["payment"] | undefined,
	/** insert a single row into the table: "payment_status" */
	insertPaymentStatus?: GraphQLTypes["paymentStatus"] | undefined,
	/** insert data into the table: "payment_status" */
	insertPaymentStatuses?: GraphQLTypes["paymentStatus_mutation_response"] | undefined,
	/** insert a single row into the table: "payment_type" */
	insertPaymentType?: GraphQLTypes["paymentType"] | undefined,
	/** insert data into the table: "payment_type" */
	insertPaymentTypes?: GraphQLTypes["paymentType_mutation_response"] | undefined,
	/** insert data into the table: "payment" */
	insertPayments?: GraphQLTypes["payment_mutation_response"] | undefined,
	/** insert a single row into the table: "subclassification" */
	insertSubclassification?: GraphQLTypes["subclassification"] | undefined,
	/** insert data into the table: "subclassification" */
	insertSubclassifications?: GraphQLTypes["subclassification_mutation_response"] | undefined,
	/** insert a single row into the table: "tag" */
	insertTag?: GraphQLTypes["tag"] | undefined,
	/** insert data into the table: "tag" */
	insertTags?: GraphQLTypes["tag_mutation_response"] | undefined,
	/** insert a single row into the table: "team" */
	insertTeam?: GraphQLTypes["team"] | undefined,
	/** insert a single row into the table: "team_user" */
	insertTeamUser?: GraphQLTypes["teamUser"] | undefined,
	/** insert data into the table: "team_user" */
	insertTeamUsers?: GraphQLTypes["teamUser_mutation_response"] | undefined,
	/** insert data into the table: "team" */
	insertTeams?: GraphQLTypes["team_mutation_response"] | undefined,
	/** insert a single row into the table: "unit" */
	insertUnit?: GraphQLTypes["unit"] | undefined,
	/** insert data into the table: "unit" */
	insertUnits?: GraphQLTypes["unit_mutation_response"] | undefined,
	/** insert a single row into the table: "user" */
	insertUser?: GraphQLTypes["user"] | undefined,
	/** insert a single row into the table: "user_status" */
	insertUserStatus?: GraphQLTypes["userStatus"] | undefined,
	/** insert data into the table: "user_status" */
	insertUserStatuses?: GraphQLTypes["userStatus_mutation_response"] | undefined,
	/** insert data into the table: "user" */
	insertUsers?: GraphQLTypes["user_mutation_response"] | undefined,
	/** insert a single row into the table: "webhook" */
	insertWebhook?: GraphQLTypes["webhook"] | undefined,
	/** insert data into the table: "webhook" */
	insertWebhooks?: GraphQLTypes["webhook_mutation_response"] | undefined,
	/** insert data into the table: "booking_channel" */
	insert_booking_channel?: GraphQLTypes["booking_channel_mutation_response"] | undefined,
	/** insert a single row into the table: "booking_channel" */
	insert_booking_channel_one?: GraphQLTypes["booking_channel"] | undefined,
	/** update single row of the table: "booking" */
	updateBooking?: GraphQLTypes["booking"] | undefined,
	/** update single row of the table: "booking_status" */
	updateBookingStatus?: GraphQLTypes["bookingStatus"] | undefined,
	/** update data of the table: "booking_status" */
	updateBookingStatuses?: GraphQLTypes["bookingStatus_mutation_response"] | undefined,
	/** update data of the table: "booking" */
	updateBookings?: GraphQLTypes["booking_mutation_response"] | undefined,
	/** update single row of the table: "classification" */
	updateClassification?: GraphQLTypes["classification"] | undefined,
	/** update data of the table: "classification" */
	updateClassifications?: GraphQLTypes["classification_mutation_response"] | undefined,
	/** update single row of the table: "connection" */
	updateConnection?: GraphQLTypes["connection"] | undefined,
	/** update data of the table: "connection" */
	updateConnections?: GraphQLTypes["connection_mutation_response"] | undefined,
	/** update data of the table: "currency" */
	updateCurrencies?: GraphQLTypes["currency_mutation_response"] | undefined,
	/** update single row of the table: "currency" */
	updateCurrency?: GraphQLTypes["currency"] | undefined,
	/** update data of the table: "entity" */
	updateEntities?: GraphQLTypes["entity_mutation_response"] | undefined,
	/** update single row of the table: "entity" */
	updateEntity?: GraphQLTypes["entity"] | undefined,
	/** update single row of the table: "entity_status" */
	updateEntityStatus?: GraphQLTypes["entityStatus"] | undefined,
	/** update data of the table: "entity_status" */
	updateEntityStatuses?: GraphQLTypes["entityStatus_mutation_response"] | undefined,
	/** update single row of the table: "integration" */
	updateIntegration?: GraphQLTypes["integration"] | undefined,
	/** update single row of the table: "integration_type" */
	updateIntegrationType?: GraphQLTypes["integrationType"] | undefined,
	/** update data of the table: "integration_type" */
	updateIntegrationTypes?: GraphQLTypes["integrationType_mutation_response"] | undefined,
	/** update data of the table: "integration" */
	updateIntegrations?: GraphQLTypes["integration_mutation_response"] | undefined,
	/** update single row of the table: "issue" */
	updateIssue?: GraphQLTypes["issue"] | undefined,
	/** update data of the table: "issue" */
	updateIssues?: GraphQLTypes["issue_mutation_response"] | undefined,
	/** update single row of the table: "job" */
	updateJob?: GraphQLTypes["job"] | undefined,
	/** update single row of the table: "job_method" */
	updateJobMethod?: GraphQLTypes["jobMethod"] | undefined,
	/** update data of the table: "job_method" */
	updateJobMethods?: GraphQLTypes["jobMethod_mutation_response"] | undefined,
	/** update single row of the table: "job_status" */
	updateJobStatus?: GraphQLTypes["jobStatus"] | undefined,
	/** update data of the table: "job_status" */
	updateJobStatuses?: GraphQLTypes["jobStatus_mutation_response"] | undefined,
	/** update data of the table: "job" */
	updateJobs?: GraphQLTypes["job_mutation_response"] | undefined,
	/** update single row of the table: "line" */
	updateLine?: GraphQLTypes["line"] | undefined,
	/** update data of the table: "line" */
	updateLines?: GraphQLTypes["line_mutation_response"] | undefined,
	/** update single row of the table: "metric" */
	updateMetric?: GraphQLTypes["metric"] | undefined,
	/** update data of the table: "metric" */
	updateMetrics?: GraphQLTypes["metric_mutation_response"] | undefined,
	/** update single row of the table: "normalized_type" */
	updateNormalizedType?: GraphQLTypes["normalizedType"] | undefined,
	/** update data of the table: "normalized_type" */
	updateNormalizedTypes?: GraphQLTypes["normalizedType_mutation_response"] | undefined,
	/** update single row of the table: "payment" */
	updatePayment?: GraphQLTypes["payment"] | undefined,
	/** update single row of the table: "payment_status" */
	updatePaymentStatus?: GraphQLTypes["paymentStatus"] | undefined,
	/** update data of the table: "payment_status" */
	updatePaymentStatuses?: GraphQLTypes["paymentStatus_mutation_response"] | undefined,
	/** update single row of the table: "payment_type" */
	updatePaymentType?: GraphQLTypes["paymentType"] | undefined,
	/** update data of the table: "payment_type" */
	updatePaymentTypes?: GraphQLTypes["paymentType_mutation_response"] | undefined,
	/** update data of the table: "payment" */
	updatePayments?: GraphQLTypes["payment_mutation_response"] | undefined,
	/** update single row of the table: "subclassification" */
	updateSubclassification?: GraphQLTypes["subclassification"] | undefined,
	/** update data of the table: "subclassification" */
	updateSubclassifications?: GraphQLTypes["subclassification_mutation_response"] | undefined,
	/** update single row of the table: "tag" */
	updateTag?: GraphQLTypes["tag"] | undefined,
	/** update data of the table: "tag" */
	updateTags?: GraphQLTypes["tag_mutation_response"] | undefined,
	/** update single row of the table: "team" */
	updateTeam?: GraphQLTypes["team"] | undefined,
	/** update single row of the table: "team_user" */
	updateTeamUser?: GraphQLTypes["teamUser"] | undefined,
	/** update data of the table: "team_user" */
	updateTeamUsers?: GraphQLTypes["teamUser_mutation_response"] | undefined,
	/** update data of the table: "team" */
	updateTeams?: GraphQLTypes["team_mutation_response"] | undefined,
	/** update single row of the table: "unit" */
	updateUnit?: GraphQLTypes["unit"] | undefined,
	/** update data of the table: "unit" */
	updateUnits?: GraphQLTypes["unit_mutation_response"] | undefined,
	/** update single row of the table: "user" */
	updateUser?: GraphQLTypes["user"] | undefined,
	/** update single row of the table: "user_status" */
	updateUserStatus?: GraphQLTypes["userStatus"] | undefined,
	/** update data of the table: "user_status" */
	updateUserStatuses?: GraphQLTypes["userStatus_mutation_response"] | undefined,
	/** update data of the table: "user" */
	updateUsers?: GraphQLTypes["user_mutation_response"] | undefined,
	/** update single row of the table: "webhook" */
	updateWebhook?: GraphQLTypes["webhook"] | undefined,
	/** update data of the table: "webhook" */
	updateWebhooks?: GraphQLTypes["webhook_mutation_response"] | undefined,
	/** update data of the table: "booking_channel" */
	update_booking_channel?: GraphQLTypes["booking_channel_mutation_response"] | undefined,
	/** update single row of the table: "booking_channel" */
	update_booking_channel_by_pk?: GraphQLTypes["booking_channel"] | undefined
};
	["normalized_type_enum"]: normalized_type_enum;
	/** Boolean expression to compare columns of type "normalized_type_enum". All fields are combined with logical 'AND'. */
["normalized_type_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["normalized_type_enum"] | undefined,
	_in?: Array<GraphQLTypes["normalized_type_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["normalized_type_enum"] | undefined,
	_nin?: Array<GraphQLTypes["normalized_type_enum"]>
};
	/** columns and relationships of "normalized_type" */
["normalizedType"]: {
	__typename: "normalizedType",
	name: string
};
	/** aggregated selection of "normalized_type" */
["normalizedType_aggregate"]: {
	__typename: "normalizedType_aggregate",
	aggregate?: GraphQLTypes["normalizedType_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["normalizedType"]> | undefined
};
	/** aggregate fields of "normalized_type" */
["normalizedType_aggregate_fields"]: {
	__typename: "normalizedType_aggregate_fields",
	count: number,
	max?: GraphQLTypes["normalizedType_max_fields"] | undefined,
	min?: GraphQLTypes["normalizedType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "normalized_type". All fields are combined with a logical 'AND'. */
["normalizedType_bool_exp"]: {
		_and?: Array<GraphQLTypes["normalizedType_bool_exp"]>,
	_not?: GraphQLTypes["normalizedType_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["normalizedType_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "normalized_type" */
["normalizedType_constraint"]: normalizedType_constraint;
	/** input type for inserting data into table "normalized_type" */
["normalizedType_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["normalizedType_max_fields"]: {
	__typename: "normalizedType_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["normalizedType_min_fields"]: {
	__typename: "normalizedType_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "normalized_type" */
["normalizedType_mutation_response"]: {
	__typename: "normalizedType_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["normalizedType"]> | undefined
};
	/** on conflict condition type for table "normalized_type" */
["normalizedType_on_conflict"]: {
		constraint: GraphQLTypes["normalizedType_constraint"],
	update_columns: Array<GraphQLTypes["normalizedType_update_column"]> | undefined,
	where?: GraphQLTypes["normalizedType_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "normalized_type". */
["normalizedType_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: normalizedType */
["normalizedType_pk_columns_input"]: {
		name: string
};
	/** select columns of table "normalized_type" */
["normalizedType_select_column"]: normalizedType_select_column;
	/** input type for updating data in table "normalized_type" */
["normalizedType_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "normalized_type" */
["normalizedType_update_column"]: normalizedType_update_column;
	["numeric"]:any;
	/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
["numeric_comparison_exp"]: {
		_eq?: GraphQLTypes["numeric"] | undefined,
	_gt?: GraphQLTypes["numeric"] | undefined,
	_gte?: GraphQLTypes["numeric"] | undefined,
	_in?: Array<GraphQLTypes["numeric"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["numeric"] | undefined,
	_lte?: GraphQLTypes["numeric"] | undefined,
	_neq?: GraphQLTypes["numeric"] | undefined,
	_nin?: Array<GraphQLTypes["numeric"]>
};
	/** column ordering options */
["order_by"]: order_by;
	/** columns and relationships of "payment" */
["payment"]: {
	__typename: "payment",
	arrivesAt?: GraphQLTypes["timestamptz"] | undefined,
	centTotal?: number | undefined,
	/** An object relationship */
	connection?: GraphQLTypes["connection"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	description?: string | undefined,
	/** An object relationship */
	entity?: GraphQLTypes["entity"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id: GraphQLTypes["uuid"],
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate: GraphQLTypes["line_aggregate"],
	metadata?: GraphQLTypes["jsonb"] | undefined,
	paidAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["payment_status_enum"] | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate: GraphQLTypes["tag_aggregate"],
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregated selection of "payment" */
["payment_aggregate"]: {
	__typename: "payment_aggregate",
	aggregate?: GraphQLTypes["payment_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["payment"]> | undefined
};
	/** aggregate fields of "payment" */
["payment_aggregate_fields"]: {
	__typename: "payment_aggregate_fields",
	avg?: GraphQLTypes["payment_avg_fields"] | undefined,
	count: number,
	max?: GraphQLTypes["payment_max_fields"] | undefined,
	min?: GraphQLTypes["payment_min_fields"] | undefined,
	stddev?: GraphQLTypes["payment_stddev_fields"] | undefined,
	stddev_pop?: GraphQLTypes["payment_stddev_pop_fields"] | undefined,
	stddev_samp?: GraphQLTypes["payment_stddev_samp_fields"] | undefined,
	sum?: GraphQLTypes["payment_sum_fields"] | undefined,
	var_pop?: GraphQLTypes["payment_var_pop_fields"] | undefined,
	var_samp?: GraphQLTypes["payment_var_samp_fields"] | undefined,
	variance?: GraphQLTypes["payment_variance_fields"] | undefined
};
	/** order by aggregate values of table "payment" */
["payment_aggregate_order_by"]: {
		avg?: GraphQLTypes["payment_avg_order_by"] | undefined,
	count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["payment_max_order_by"] | undefined,
	min?: GraphQLTypes["payment_min_order_by"] | undefined,
	stddev?: GraphQLTypes["payment_stddev_order_by"] | undefined,
	stddev_pop?: GraphQLTypes["payment_stddev_pop_order_by"] | undefined,
	stddev_samp?: GraphQLTypes["payment_stddev_samp_order_by"] | undefined,
	sum?: GraphQLTypes["payment_sum_order_by"] | undefined,
	var_pop?: GraphQLTypes["payment_var_pop_order_by"] | undefined,
	var_samp?: GraphQLTypes["payment_var_samp_order_by"] | undefined,
	variance?: GraphQLTypes["payment_variance_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["payment_append_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "payment" */
["payment_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["payment_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["payment_on_conflict"] | undefined
};
	/** aggregate avg on columns */
["payment_avg_fields"]: {
	__typename: "payment_avg_fields",
	centTotal?: number | undefined
};
	/** order by avg() on columns of table "payment" */
["payment_avg_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
["payment_bool_exp"]: {
		_and?: Array<GraphQLTypes["payment_bool_exp"]>,
	_not?: GraphQLTypes["payment_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["payment_bool_exp"]>,
	arrivesAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	centTotal?: GraphQLTypes["Int_comparison_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	currency?: GraphQLTypes["currency_enum_comparison_exp"] | undefined,
	description?: GraphQLTypes["String_comparison_exp"] | undefined,
	entity?: GraphQLTypes["entity_bool_exp"] | undefined,
	entityId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	lines?: GraphQLTypes["line_bool_exp"] | undefined,
	metadata?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	paidAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	status?: GraphQLTypes["payment_status_enum_comparison_exp"] | undefined,
	tags?: GraphQLTypes["tag_bool_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "payment" */
["payment_constraint"]: payment_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["payment_delete_at_path_input"]: {
		metadata?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["payment_delete_elem_input"]: {
		metadata?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["payment_delete_key_input"]: {
		metadata?: string | undefined
};
	/** input type for incrementing numeric columns in table "payment" */
["payment_inc_input"]: {
		centTotal?: number | undefined
};
	/** input type for inserting data into table "payment" */
["payment_insert_input"]: {
		arrivesAt?: GraphQLTypes["timestamptz"] | undefined,
	centTotal?: number | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	description?: string | undefined,
	entity?: GraphQLTypes["entity_obj_rel_insert_input"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	lines?: GraphQLTypes["line_arr_rel_insert_input"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	paidAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["payment_status_enum"] | undefined,
	tags?: GraphQLTypes["tag_arr_rel_insert_input"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["payment_max_fields"]: {
	__typename: "payment_max_fields",
	arrivesAt?: GraphQLTypes["timestamptz"] | undefined,
	centTotal?: number | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	paidAt?: GraphQLTypes["timestamptz"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "payment" */
["payment_max_order_by"]: {
		arrivesAt?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	paidAt?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["payment_min_fields"]: {
	__typename: "payment_min_fields",
	arrivesAt?: GraphQLTypes["timestamptz"] | undefined,
	centTotal?: number | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	description?: string | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	paidAt?: GraphQLTypes["timestamptz"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "payment" */
["payment_min_order_by"]: {
		arrivesAt?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	paidAt?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "payment" */
["payment_mutation_response"]: {
	__typename: "payment_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["payment"]> | undefined
};
	/** input type for inserting object relation for remote table "payment" */
["payment_obj_rel_insert_input"]: {
		data: GraphQLTypes["payment_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["payment_on_conflict"] | undefined
};
	/** on conflict condition type for table "payment" */
["payment_on_conflict"]: {
		constraint: GraphQLTypes["payment_constraint"],
	update_columns: Array<GraphQLTypes["payment_update_column"]> | undefined,
	where?: GraphQLTypes["payment_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "payment". */
["payment_order_by"]: {
		arrivesAt?: GraphQLTypes["order_by"] | undefined,
	centTotal?: GraphQLTypes["order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	currency?: GraphQLTypes["order_by"] | undefined,
	description?: GraphQLTypes["order_by"] | undefined,
	entity?: GraphQLTypes["entity_order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	lines_aggregate?: GraphQLTypes["line_aggregate_order_by"] | undefined,
	metadata?: GraphQLTypes["order_by"] | undefined,
	paidAt?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	tags_aggregate?: GraphQLTypes["tag_aggregate_order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: payment */
["payment_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["payment_prepend_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "payment" */
["payment_select_column"]: payment_select_column;
	/** input type for updating data in table "payment" */
["payment_set_input"]: {
		arrivesAt?: GraphQLTypes["timestamptz"] | undefined,
	centTotal?: number | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	currency?: GraphQLTypes["currency_enum"] | undefined,
	description?: string | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	paidAt?: GraphQLTypes["timestamptz"] | undefined,
	status?: GraphQLTypes["payment_status_enum"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	["payment_status_enum"]: payment_status_enum;
	/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
["payment_status_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["payment_status_enum"] | undefined,
	_in?: Array<GraphQLTypes["payment_status_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["payment_status_enum"] | undefined,
	_nin?: Array<GraphQLTypes["payment_status_enum"]>
};
	/** aggregate stddev on columns */
["payment_stddev_fields"]: {
	__typename: "payment_stddev_fields",
	centTotal?: number | undefined
};
	/** order by stddev() on columns of table "payment" */
["payment_stddev_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_pop on columns */
["payment_stddev_pop_fields"]: {
	__typename: "payment_stddev_pop_fields",
	centTotal?: number | undefined
};
	/** order by stddev_pop() on columns of table "payment" */
["payment_stddev_pop_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate stddev_samp on columns */
["payment_stddev_samp_fields"]: {
	__typename: "payment_stddev_samp_fields",
	centTotal?: number | undefined
};
	/** order by stddev_samp() on columns of table "payment" */
["payment_stddev_samp_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate sum on columns */
["payment_sum_fields"]: {
	__typename: "payment_sum_fields",
	centTotal?: number | undefined
};
	/** order by sum() on columns of table "payment" */
["payment_sum_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** update columns of table "payment" */
["payment_update_column"]: payment_update_column;
	/** aggregate var_pop on columns */
["payment_var_pop_fields"]: {
	__typename: "payment_var_pop_fields",
	centTotal?: number | undefined
};
	/** order by var_pop() on columns of table "payment" */
["payment_var_pop_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate var_samp on columns */
["payment_var_samp_fields"]: {
	__typename: "payment_var_samp_fields",
	centTotal?: number | undefined
};
	/** order by var_samp() on columns of table "payment" */
["payment_var_samp_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate variance on columns */
["payment_variance_fields"]: {
	__typename: "payment_variance_fields",
	centTotal?: number | undefined
};
	/** order by variance() on columns of table "payment" */
["payment_variance_order_by"]: {
		centTotal?: GraphQLTypes["order_by"] | undefined
};
	/** columns and relationships of "payment_status" */
["paymentStatus"]: {
	__typename: "paymentStatus",
	name: string
};
	/** aggregated selection of "payment_status" */
["paymentStatus_aggregate"]: {
	__typename: "paymentStatus_aggregate",
	aggregate?: GraphQLTypes["paymentStatus_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["paymentStatus"]> | undefined
};
	/** aggregate fields of "payment_status" */
["paymentStatus_aggregate_fields"]: {
	__typename: "paymentStatus_aggregate_fields",
	count: number,
	max?: GraphQLTypes["paymentStatus_max_fields"] | undefined,
	min?: GraphQLTypes["paymentStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
["paymentStatus_bool_exp"]: {
		_and?: Array<GraphQLTypes["paymentStatus_bool_exp"]>,
	_not?: GraphQLTypes["paymentStatus_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["paymentStatus_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "payment_status" */
["paymentStatus_constraint"]: paymentStatus_constraint;
	/** input type for inserting data into table "payment_status" */
["paymentStatus_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["paymentStatus_max_fields"]: {
	__typename: "paymentStatus_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["paymentStatus_min_fields"]: {
	__typename: "paymentStatus_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "payment_status" */
["paymentStatus_mutation_response"]: {
	__typename: "paymentStatus_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["paymentStatus"]> | undefined
};
	/** on conflict condition type for table "payment_status" */
["paymentStatus_on_conflict"]: {
		constraint: GraphQLTypes["paymentStatus_constraint"],
	update_columns: Array<GraphQLTypes["paymentStatus_update_column"]> | undefined,
	where?: GraphQLTypes["paymentStatus_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "payment_status". */
["paymentStatus_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: paymentStatus */
["paymentStatus_pk_columns_input"]: {
		name: string
};
	/** select columns of table "payment_status" */
["paymentStatus_select_column"]: paymentStatus_select_column;
	/** input type for updating data in table "payment_status" */
["paymentStatus_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "payment_status" */
["paymentStatus_update_column"]: paymentStatus_update_column;
	/** columns and relationships of "payment_type" */
["paymentType"]: {
	__typename: "paymentType",
	name: string
};
	/** aggregated selection of "payment_type" */
["paymentType_aggregate"]: {
	__typename: "paymentType_aggregate",
	aggregate?: GraphQLTypes["paymentType_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["paymentType"]> | undefined
};
	/** aggregate fields of "payment_type" */
["paymentType_aggregate_fields"]: {
	__typename: "paymentType_aggregate_fields",
	count: number,
	max?: GraphQLTypes["paymentType_max_fields"] | undefined,
	min?: GraphQLTypes["paymentType_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "payment_type". All fields are combined with a logical 'AND'. */
["paymentType_bool_exp"]: {
		_and?: Array<GraphQLTypes["paymentType_bool_exp"]>,
	_not?: GraphQLTypes["paymentType_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["paymentType_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "payment_type" */
["paymentType_constraint"]: paymentType_constraint;
	/** input type for inserting data into table "payment_type" */
["paymentType_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["paymentType_max_fields"]: {
	__typename: "paymentType_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["paymentType_min_fields"]: {
	__typename: "paymentType_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "payment_type" */
["paymentType_mutation_response"]: {
	__typename: "paymentType_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["paymentType"]> | undefined
};
	/** on conflict condition type for table "payment_type" */
["paymentType_on_conflict"]: {
		constraint: GraphQLTypes["paymentType_constraint"],
	update_columns: Array<GraphQLTypes["paymentType_update_column"]> | undefined,
	where?: GraphQLTypes["paymentType_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "payment_type". */
["paymentType_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: paymentType */
["paymentType_pk_columns_input"]: {
		name: string
};
	/** select columns of table "payment_type" */
["paymentType_select_column"]: paymentType_select_column;
	/** input type for updating data in table "payment_type" */
["paymentType_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "payment_type" */
["paymentType_update_column"]: paymentType_update_column;
	["query_root"]: {
	__typename: "query_root",
	/** fetch aggregated fields from the table: "booking_status" */
	aggregateBookingStatuses: GraphQLTypes["bookingStatus_aggregate"],
	/** fetch aggregated fields from the table: "booking" */
	aggregateBookings: GraphQLTypes["booking_aggregate"],
	/** fetch aggregated fields from the table: "classification" */
	aggregateClassifications: GraphQLTypes["classification_aggregate"],
	/** fetch aggregated fields from the table: "connection" */
	aggregateConnections: GraphQLTypes["connection_aggregate"],
	/** fetch aggregated fields from the table: "currency" */
	aggregateCurrencies: GraphQLTypes["currency_aggregate"],
	/** fetch aggregated fields from the table: "entity" */
	aggregateEntities: GraphQLTypes["entity_aggregate"],
	/** fetch aggregated fields from the table: "entity_status" */
	aggregateEntityStatuses: GraphQLTypes["entityStatus_aggregate"],
	/** fetch aggregated fields from the table: "integration_type" */
	aggregateIntegrationTypes: GraphQLTypes["integrationType_aggregate"],
	/** fetch aggregated fields from the table: "integration" */
	aggregateIntegrations: GraphQLTypes["integration_aggregate"],
	/** fetch aggregated fields from the table: "issue" */
	aggregateIssues: GraphQLTypes["issue_aggregate"],
	/** fetch aggregated fields from the table: "job_method" */
	aggregateJobMethods: GraphQLTypes["jobMethod_aggregate"],
	/** fetch aggregated fields from the table: "job_status" */
	aggregateJobStatuses: GraphQLTypes["jobStatus_aggregate"],
	/** fetch aggregated fields from the table: "job" */
	aggregateJobs: GraphQLTypes["job_aggregate"],
	/** fetch aggregated fields from the table: "line" */
	aggregateLines: GraphQLTypes["line_aggregate"],
	/** fetch aggregated fields from the table: "metric" */
	aggregateMetrics: GraphQLTypes["metric_aggregate"],
	/** fetch aggregated fields from the table: "normalized_type" */
	aggregateNormalizedTypes: GraphQLTypes["normalizedType_aggregate"],
	/** fetch aggregated fields from the table: "payment_status" */
	aggregatePaymentStatuses: GraphQLTypes["paymentStatus_aggregate"],
	/** fetch aggregated fields from the table: "payment_type" */
	aggregatePaymentTypes: GraphQLTypes["paymentType_aggregate"],
	/** fetch aggregated fields from the table: "payment" */
	aggregatePayments: GraphQLTypes["payment_aggregate"],
	/** fetch aggregated fields from the table: "subclassification" */
	aggregateSubclassifications: GraphQLTypes["subclassification_aggregate"],
	/** fetch aggregated fields from the table: "tag" */
	aggregateTags: GraphQLTypes["tag_aggregate"],
	/** fetch aggregated fields from the table: "team_user" */
	aggregateTeamUsers: GraphQLTypes["teamUser_aggregate"],
	/** fetch aggregated fields from the table: "team" */
	aggregateTeams: GraphQLTypes["team_aggregate"],
	/** fetch aggregated fields from the table: "unit" */
	aggregateUnits: GraphQLTypes["unit_aggregate"],
	/** fetch aggregated fields from the table: "user_status" */
	aggregateUserStatuses: GraphQLTypes["userStatus_aggregate"],
	/** fetch aggregated fields from the table: "user" */
	aggregateUsers: GraphQLTypes["user_aggregate"],
	/** fetch aggregated fields from the table: "webhook" */
	aggregateWebhooks: GraphQLTypes["webhook_aggregate"],
	/** fetch data from the table: "booking" using primary key columns */
	booking?: GraphQLTypes["booking"] | undefined,
	/** fetch data from the table: "booking_status" using primary key columns */
	bookingStatus?: GraphQLTypes["bookingStatus"] | undefined,
	/** fetch data from the table: "booking_status" */
	bookingStatuses: Array<GraphQLTypes["bookingStatus"]> | undefined,
	/** fetch data from the table: "booking_channel" */
	booking_channel: Array<GraphQLTypes["booking_channel"]> | undefined,
	/** fetch aggregated fields from the table: "booking_channel" */
	booking_channel_aggregate: GraphQLTypes["booking_channel_aggregate"],
	/** fetch data from the table: "booking_channel" using primary key columns */
	booking_channel_by_pk?: GraphQLTypes["booking_channel"] | undefined,
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** fetch data from the table: "classification" using primary key columns */
	classification?: GraphQLTypes["classification"] | undefined,
	/** fetch data from the table: "classification" */
	classifications: Array<GraphQLTypes["classification"]> | undefined,
	/** fetch data from the table: "connection" using primary key columns */
	connection?: GraphQLTypes["connection"] | undefined,
	/** An array relationship */
	connections: Array<GraphQLTypes["connection"]> | undefined,
	/** fetch data from the table: "currency" */
	currencies: Array<GraphQLTypes["currency"]> | undefined,
	/** fetch data from the table: "currency" using primary key columns */
	currency?: GraphQLTypes["currency"] | undefined,
	/** An array relationship */
	entities: Array<GraphQLTypes["entity"]> | undefined,
	/** fetch data from the table: "entity" using primary key columns */
	entity?: GraphQLTypes["entity"] | undefined,
	/** fetch data from the table: "entity_status" using primary key columns */
	entityStatus?: GraphQLTypes["entityStatus"] | undefined,
	/** fetch data from the table: "entity_status" */
	entityStatuses: Array<GraphQLTypes["entityStatus"]> | undefined,
	/** fetch data from the table: "integration" using primary key columns */
	integration?: GraphQLTypes["integration"] | undefined,
	/** fetch data from the table: "integration_type" using primary key columns */
	integrationType?: GraphQLTypes["integrationType"] | undefined,
	/** fetch data from the table: "integration_type" */
	integrationTypes: Array<GraphQLTypes["integrationType"]> | undefined,
	/** An array relationship */
	integrations: Array<GraphQLTypes["integration"]> | undefined,
	/** fetch data from the table: "issue" using primary key columns */
	issue?: GraphQLTypes["issue"] | undefined,
	/** An array relationship */
	issues: Array<GraphQLTypes["issue"]> | undefined,
	/** fetch data from the table: "job" using primary key columns */
	job?: GraphQLTypes["job"] | undefined,
	/** fetch data from the table: "job_method" using primary key columns */
	jobMethod?: GraphQLTypes["jobMethod"] | undefined,
	/** fetch data from the table: "job_method" */
	jobMethods: Array<GraphQLTypes["jobMethod"]> | undefined,
	/** fetch data from the table: "job_status" using primary key columns */
	jobStatus?: GraphQLTypes["jobStatus"] | undefined,
	/** fetch data from the table: "job_status" */
	jobStatuses: Array<GraphQLTypes["jobStatus"]> | undefined,
	/** An array relationship */
	jobs: Array<GraphQLTypes["job"]> | undefined,
	/** fetch data from the table: "line" using primary key columns */
	line?: GraphQLTypes["line"] | undefined,
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** fetch data from the table: "metric" using primary key columns */
	metric?: GraphQLTypes["metric"] | undefined,
	/** An array relationship */
	metrics: Array<GraphQLTypes["metric"]> | undefined,
	/** fetch data from the table: "normalized_type" using primary key columns */
	normalizedType?: GraphQLTypes["normalizedType"] | undefined,
	/** fetch data from the table: "normalized_type" */
	normalizedTypes: Array<GraphQLTypes["normalizedType"]> | undefined,
	/** fetch data from the table: "payment" using primary key columns */
	payment?: GraphQLTypes["payment"] | undefined,
	/** fetch data from the table: "payment_status" using primary key columns */
	paymentStatus?: GraphQLTypes["paymentStatus"] | undefined,
	/** fetch data from the table: "payment_status" */
	paymentStatuses: Array<GraphQLTypes["paymentStatus"]> | undefined,
	/** fetch data from the table: "payment_type" using primary key columns */
	paymentType?: GraphQLTypes["paymentType"] | undefined,
	/** fetch data from the table: "payment_type" */
	paymentTypes: Array<GraphQLTypes["paymentType"]> | undefined,
	/** An array relationship */
	payments: Array<GraphQLTypes["payment"]> | undefined,
	/** fetch data from the table: "subclassification" using primary key columns */
	subclassification?: GraphQLTypes["subclassification"] | undefined,
	/** fetch data from the table: "subclassification" */
	subclassifications: Array<GraphQLTypes["subclassification"]> | undefined,
	/** fetch data from the table: "tag" using primary key columns */
	tag?: GraphQLTypes["tag"] | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** fetch data from the table: "team" using primary key columns */
	team?: GraphQLTypes["team"] | undefined,
	/** fetch data from the table: "team_user" using primary key columns */
	teamUser?: GraphQLTypes["teamUser"] | undefined,
	/** fetch data from the table: "team_user" */
	teamUsers: Array<GraphQLTypes["teamUser"]> | undefined,
	/** fetch data from the table: "team" */
	teams: Array<GraphQLTypes["team"]> | undefined,
	/** fetch data from the table: "unit" using primary key columns */
	unit?: GraphQLTypes["unit"] | undefined,
	/** An array relationship */
	units: Array<GraphQLTypes["unit"]> | undefined,
	/** fetch data from the table: "user" using primary key columns */
	user?: GraphQLTypes["user"] | undefined,
	/** fetch data from the table: "user_status" using primary key columns */
	userStatus?: GraphQLTypes["userStatus"] | undefined,
	/** fetch data from the table: "user_status" */
	userStatuses: Array<GraphQLTypes["userStatus"]> | undefined,
	/** fetch data from the table: "user" */
	users: Array<GraphQLTypes["user"]> | undefined,
	/** fetch data from the table: "webhook" using primary key columns */
	webhook?: GraphQLTypes["webhook"] | undefined,
	/** An array relationship */
	webhooks: Array<GraphQLTypes["webhook"]> | undefined
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string | undefined,
	_gt?: string | undefined,
	_gte?: string | undefined,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string | undefined,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string | undefined,
	_is_null?: boolean | undefined,
	/** does the column match the given pattern */
	_like?: string | undefined,
	_lt?: string | undefined,
	_lte?: string | undefined,
	_neq?: string | undefined,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string | undefined,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string | undefined,
	/** does the column NOT match the given pattern */
	_nlike?: string | undefined,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string | undefined,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string | undefined,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string | undefined,
	/** does the column match the given SQL regular expression */
	_similar?: string | undefined
};
	/** columns and relationships of "subclassification" */
["subclassification"]: {
	__typename: "subclassification",
	name: string
};
	/** aggregated selection of "subclassification" */
["subclassification_aggregate"]: {
	__typename: "subclassification_aggregate",
	aggregate?: GraphQLTypes["subclassification_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["subclassification"]> | undefined
};
	/** aggregate fields of "subclassification" */
["subclassification_aggregate_fields"]: {
	__typename: "subclassification_aggregate_fields",
	count: number,
	max?: GraphQLTypes["subclassification_max_fields"] | undefined,
	min?: GraphQLTypes["subclassification_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "subclassification". All fields are combined with a logical 'AND'. */
["subclassification_bool_exp"]: {
		_and?: Array<GraphQLTypes["subclassification_bool_exp"]>,
	_not?: GraphQLTypes["subclassification_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["subclassification_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "subclassification" */
["subclassification_constraint"]: subclassification_constraint;
	["subclassification_enum"]: subclassification_enum;
	/** Boolean expression to compare columns of type "subclassification_enum". All fields are combined with logical 'AND'. */
["subclassification_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["subclassification_enum"] | undefined,
	_in?: Array<GraphQLTypes["subclassification_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["subclassification_enum"] | undefined,
	_nin?: Array<GraphQLTypes["subclassification_enum"]>
};
	/** input type for inserting data into table "subclassification" */
["subclassification_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["subclassification_max_fields"]: {
	__typename: "subclassification_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["subclassification_min_fields"]: {
	__typename: "subclassification_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "subclassification" */
["subclassification_mutation_response"]: {
	__typename: "subclassification_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["subclassification"]> | undefined
};
	/** on conflict condition type for table "subclassification" */
["subclassification_on_conflict"]: {
		constraint: GraphQLTypes["subclassification_constraint"],
	update_columns: Array<GraphQLTypes["subclassification_update_column"]> | undefined,
	where?: GraphQLTypes["subclassification_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "subclassification". */
["subclassification_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: subclassification */
["subclassification_pk_columns_input"]: {
		name: string
};
	/** select columns of table "subclassification" */
["subclassification_select_column"]: subclassification_select_column;
	/** input type for updating data in table "subclassification" */
["subclassification_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "subclassification" */
["subclassification_update_column"]: subclassification_update_column;
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch aggregated fields from the table: "booking_status" */
	aggregateBookingStatuses: GraphQLTypes["bookingStatus_aggregate"],
	/** fetch aggregated fields from the table: "booking" */
	aggregateBookings: GraphQLTypes["booking_aggregate"],
	/** fetch aggregated fields from the table: "classification" */
	aggregateClassifications: GraphQLTypes["classification_aggregate"],
	/** fetch aggregated fields from the table: "connection" */
	aggregateConnections: GraphQLTypes["connection_aggregate"],
	/** fetch aggregated fields from the table: "currency" */
	aggregateCurrencies: GraphQLTypes["currency_aggregate"],
	/** fetch aggregated fields from the table: "entity" */
	aggregateEntities: GraphQLTypes["entity_aggregate"],
	/** fetch aggregated fields from the table: "entity_status" */
	aggregateEntityStatuses: GraphQLTypes["entityStatus_aggregate"],
	/** fetch aggregated fields from the table: "integration_type" */
	aggregateIntegrationTypes: GraphQLTypes["integrationType_aggregate"],
	/** fetch aggregated fields from the table: "integration" */
	aggregateIntegrations: GraphQLTypes["integration_aggregate"],
	/** fetch aggregated fields from the table: "issue" */
	aggregateIssues: GraphQLTypes["issue_aggregate"],
	/** fetch aggregated fields from the table: "job_method" */
	aggregateJobMethods: GraphQLTypes["jobMethod_aggregate"],
	/** fetch aggregated fields from the table: "job_status" */
	aggregateJobStatuses: GraphQLTypes["jobStatus_aggregate"],
	/** fetch aggregated fields from the table: "job" */
	aggregateJobs: GraphQLTypes["job_aggregate"],
	/** fetch aggregated fields from the table: "line" */
	aggregateLines: GraphQLTypes["line_aggregate"],
	/** fetch aggregated fields from the table: "metric" */
	aggregateMetrics: GraphQLTypes["metric_aggregate"],
	/** fetch aggregated fields from the table: "normalized_type" */
	aggregateNormalizedTypes: GraphQLTypes["normalizedType_aggregate"],
	/** fetch aggregated fields from the table: "payment_status" */
	aggregatePaymentStatuses: GraphQLTypes["paymentStatus_aggregate"],
	/** fetch aggregated fields from the table: "payment_type" */
	aggregatePaymentTypes: GraphQLTypes["paymentType_aggregate"],
	/** fetch aggregated fields from the table: "payment" */
	aggregatePayments: GraphQLTypes["payment_aggregate"],
	/** fetch aggregated fields from the table: "subclassification" */
	aggregateSubclassifications: GraphQLTypes["subclassification_aggregate"],
	/** fetch aggregated fields from the table: "tag" */
	aggregateTags: GraphQLTypes["tag_aggregate"],
	/** fetch aggregated fields from the table: "team_user" */
	aggregateTeamUsers: GraphQLTypes["teamUser_aggregate"],
	/** fetch aggregated fields from the table: "team" */
	aggregateTeams: GraphQLTypes["team_aggregate"],
	/** fetch aggregated fields from the table: "unit" */
	aggregateUnits: GraphQLTypes["unit_aggregate"],
	/** fetch aggregated fields from the table: "user_status" */
	aggregateUserStatuses: GraphQLTypes["userStatus_aggregate"],
	/** fetch aggregated fields from the table: "user" */
	aggregateUsers: GraphQLTypes["user_aggregate"],
	/** fetch aggregated fields from the table: "webhook" */
	aggregateWebhooks: GraphQLTypes["webhook_aggregate"],
	/** fetch data from the table: "booking" using primary key columns */
	booking?: GraphQLTypes["booking"] | undefined,
	/** fetch data from the table: "booking_status" using primary key columns */
	bookingStatus?: GraphQLTypes["bookingStatus"] | undefined,
	/** fetch data from the table: "booking_status" */
	bookingStatuses: Array<GraphQLTypes["bookingStatus"]> | undefined,
	/** fetch data from the table: "booking_channel" */
	booking_channel: Array<GraphQLTypes["booking_channel"]> | undefined,
	/** fetch aggregated fields from the table: "booking_channel" */
	booking_channel_aggregate: GraphQLTypes["booking_channel_aggregate"],
	/** fetch data from the table: "booking_channel" using primary key columns */
	booking_channel_by_pk?: GraphQLTypes["booking_channel"] | undefined,
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** fetch data from the table: "classification" using primary key columns */
	classification?: GraphQLTypes["classification"] | undefined,
	/** fetch data from the table: "classification" */
	classifications: Array<GraphQLTypes["classification"]> | undefined,
	/** fetch data from the table: "connection" using primary key columns */
	connection?: GraphQLTypes["connection"] | undefined,
	/** An array relationship */
	connections: Array<GraphQLTypes["connection"]> | undefined,
	/** fetch data from the table: "currency" */
	currencies: Array<GraphQLTypes["currency"]> | undefined,
	/** fetch data from the table: "currency" using primary key columns */
	currency?: GraphQLTypes["currency"] | undefined,
	/** An array relationship */
	entities: Array<GraphQLTypes["entity"]> | undefined,
	/** fetch data from the table: "entity" using primary key columns */
	entity?: GraphQLTypes["entity"] | undefined,
	/** fetch data from the table: "entity_status" using primary key columns */
	entityStatus?: GraphQLTypes["entityStatus"] | undefined,
	/** fetch data from the table: "entity_status" */
	entityStatuses: Array<GraphQLTypes["entityStatus"]> | undefined,
	/** fetch data from the table: "integration" using primary key columns */
	integration?: GraphQLTypes["integration"] | undefined,
	/** fetch data from the table: "integration_type" using primary key columns */
	integrationType?: GraphQLTypes["integrationType"] | undefined,
	/** fetch data from the table: "integration_type" */
	integrationTypes: Array<GraphQLTypes["integrationType"]> | undefined,
	/** An array relationship */
	integrations: Array<GraphQLTypes["integration"]> | undefined,
	/** fetch data from the table: "issue" using primary key columns */
	issue?: GraphQLTypes["issue"] | undefined,
	/** An array relationship */
	issues: Array<GraphQLTypes["issue"]> | undefined,
	/** fetch data from the table: "job" using primary key columns */
	job?: GraphQLTypes["job"] | undefined,
	/** fetch data from the table: "job_method" using primary key columns */
	jobMethod?: GraphQLTypes["jobMethod"] | undefined,
	/** fetch data from the table: "job_method" */
	jobMethods: Array<GraphQLTypes["jobMethod"]> | undefined,
	/** fetch data from the table: "job_status" using primary key columns */
	jobStatus?: GraphQLTypes["jobStatus"] | undefined,
	/** fetch data from the table: "job_status" */
	jobStatuses: Array<GraphQLTypes["jobStatus"]> | undefined,
	/** An array relationship */
	jobs: Array<GraphQLTypes["job"]> | undefined,
	/** fetch data from the table: "line" using primary key columns */
	line?: GraphQLTypes["line"] | undefined,
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** fetch data from the table: "metric" using primary key columns */
	metric?: GraphQLTypes["metric"] | undefined,
	/** An array relationship */
	metrics: Array<GraphQLTypes["metric"]> | undefined,
	/** fetch data from the table: "normalized_type" using primary key columns */
	normalizedType?: GraphQLTypes["normalizedType"] | undefined,
	/** fetch data from the table: "normalized_type" */
	normalizedTypes: Array<GraphQLTypes["normalizedType"]> | undefined,
	/** fetch data from the table: "payment" using primary key columns */
	payment?: GraphQLTypes["payment"] | undefined,
	/** fetch data from the table: "payment_status" using primary key columns */
	paymentStatus?: GraphQLTypes["paymentStatus"] | undefined,
	/** fetch data from the table: "payment_status" */
	paymentStatuses: Array<GraphQLTypes["paymentStatus"]> | undefined,
	/** fetch data from the table: "payment_type" using primary key columns */
	paymentType?: GraphQLTypes["paymentType"] | undefined,
	/** fetch data from the table: "payment_type" */
	paymentTypes: Array<GraphQLTypes["paymentType"]> | undefined,
	/** An array relationship */
	payments: Array<GraphQLTypes["payment"]> | undefined,
	/** fetch data from the table: "subclassification" using primary key columns */
	subclassification?: GraphQLTypes["subclassification"] | undefined,
	/** fetch data from the table: "subclassification" */
	subclassifications: Array<GraphQLTypes["subclassification"]> | undefined,
	/** fetch data from the table: "tag" using primary key columns */
	tag?: GraphQLTypes["tag"] | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** fetch data from the table: "team" using primary key columns */
	team?: GraphQLTypes["team"] | undefined,
	/** fetch data from the table: "team_user" using primary key columns */
	teamUser?: GraphQLTypes["teamUser"] | undefined,
	/** fetch data from the table: "team_user" */
	teamUsers: Array<GraphQLTypes["teamUser"]> | undefined,
	/** fetch data from the table: "team" */
	teams: Array<GraphQLTypes["team"]> | undefined,
	/** fetch data from the table: "unit" using primary key columns */
	unit?: GraphQLTypes["unit"] | undefined,
	/** An array relationship */
	units: Array<GraphQLTypes["unit"]> | undefined,
	/** fetch data from the table: "user" using primary key columns */
	user?: GraphQLTypes["user"] | undefined,
	/** fetch data from the table: "user_status" using primary key columns */
	userStatus?: GraphQLTypes["userStatus"] | undefined,
	/** fetch data from the table: "user_status" */
	userStatuses: Array<GraphQLTypes["userStatus"]> | undefined,
	/** fetch data from the table: "user" */
	users: Array<GraphQLTypes["user"]> | undefined,
	/** fetch data from the table: "webhook" using primary key columns */
	webhook?: GraphQLTypes["webhook"] | undefined,
	/** An array relationship */
	webhooks: Array<GraphQLTypes["webhook"]> | undefined
};
	/** columns and relationships of "tag" */
["tag"]: {
	__typename: "tag",
	/** An object relationship */
	booking: GraphQLTypes["booking"],
	bookingId: GraphQLTypes["uuid"],
	/** An object relationship */
	connection: GraphQLTypes["connection"],
	connectionId: GraphQLTypes["uuid"],
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id: GraphQLTypes["uuid"],
	json: GraphQLTypes["jsonb"],
	/** An object relationship */
	payment: GraphQLTypes["payment"],
	paymentId: GraphQLTypes["uuid"],
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	type: string,
	uniqueRef: string,
	/** An object relationship */
	unit: GraphQLTypes["unit"],
	unitId: GraphQLTypes["uuid"],
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregated selection of "tag" */
["tag_aggregate"]: {
	__typename: "tag_aggregate",
	aggregate?: GraphQLTypes["tag_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["tag"]> | undefined
};
	/** aggregate fields of "tag" */
["tag_aggregate_fields"]: {
	__typename: "tag_aggregate_fields",
	count: number,
	max?: GraphQLTypes["tag_max_fields"] | undefined,
	min?: GraphQLTypes["tag_min_fields"] | undefined
};
	/** order by aggregate values of table "tag" */
["tag_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["tag_max_order_by"] | undefined,
	min?: GraphQLTypes["tag_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["tag_append_input"]: {
		json?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "tag" */
["tag_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["tag_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["tag_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
["tag_bool_exp"]: {
		_and?: Array<GraphQLTypes["tag_bool_exp"]>,
	_not?: GraphQLTypes["tag_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["tag_bool_exp"]>,
	booking?: GraphQLTypes["booking_bool_exp"] | undefined,
	bookingId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	json?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	payment?: GraphQLTypes["payment_bool_exp"] | undefined,
	paymentId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	type?: GraphQLTypes["String_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	unit?: GraphQLTypes["unit_bool_exp"] | undefined,
	unitId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "tag" */
["tag_constraint"]: tag_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["tag_delete_at_path_input"]: {
		json?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["tag_delete_elem_input"]: {
		json?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["tag_delete_key_input"]: {
		json?: string | undefined
};
	/** input type for inserting data into table "tag" */
["tag_insert_input"]: {
		booking?: GraphQLTypes["booking_obj_rel_insert_input"] | undefined,
	bookingId?: GraphQLTypes["uuid"] | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	payment?: GraphQLTypes["payment_obj_rel_insert_input"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unit?: GraphQLTypes["unit_obj_rel_insert_input"] | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["tag_max_fields"]: {
	__typename: "tag_max_fields",
	bookingId?: GraphQLTypes["uuid"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "tag" */
["tag_max_order_by"]: {
		bookingId?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["tag_min_fields"]: {
	__typename: "tag_min_fields",
	bookingId?: GraphQLTypes["uuid"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "tag" */
["tag_min_order_by"]: {
		bookingId?: GraphQLTypes["order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "tag" */
["tag_mutation_response"]: {
	__typename: "tag_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["tag"]> | undefined
};
	/** on conflict condition type for table "tag" */
["tag_on_conflict"]: {
		constraint: GraphQLTypes["tag_constraint"],
	update_columns: Array<GraphQLTypes["tag_update_column"]> | undefined,
	where?: GraphQLTypes["tag_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "tag". */
["tag_order_by"]: {
		booking?: GraphQLTypes["booking_order_by"] | undefined,
	bookingId?: GraphQLTypes["order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	json?: GraphQLTypes["order_by"] | undefined,
	payment?: GraphQLTypes["payment_order_by"] | undefined,
	paymentId?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	type?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	unit?: GraphQLTypes["unit_order_by"] | undefined,
	unitId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: tag */
["tag_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["tag_prepend_input"]: {
		json?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "tag" */
["tag_select_column"]: tag_select_column;
	/** input type for updating data in table "tag" */
["tag_set_input"]: {
		bookingId?: GraphQLTypes["uuid"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	json?: GraphQLTypes["jsonb"] | undefined,
	paymentId?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	type?: string | undefined,
	uniqueRef?: string | undefined,
	unitId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** update columns of table "tag" */
["tag_update_column"]: tag_update_column;
	/** columns and relationships of "team" */
["team"]: {
	__typename: "team",
	address?: string | undefined,
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate: GraphQLTypes["booking_aggregate"],
	commissionPercentage?: GraphQLTypes["numeric"] | undefined,
	/** An array relationship */
	connections: Array<GraphQLTypes["connection"]> | undefined,
	/** An aggregate relationship */
	connections_aggregate: GraphQLTypes["connection_aggregate"],
	createdAt: GraphQLTypes["timestamptz"],
	email?: string | undefined,
	/** An array relationship */
	entities: Array<GraphQLTypes["entity"]> | undefined,
	/** An aggregate relationship */
	entities_aggregate: GraphQLTypes["entity_aggregate"],
	id: GraphQLTypes["uuid"],
	/** An array relationship */
	integrations: Array<GraphQLTypes["integration"]> | undefined,
	/** An aggregate relationship */
	integrations_aggregate: GraphQLTypes["integration_aggregate"],
	isActive?: boolean | undefined,
	isTest?: boolean | undefined,
	/** An array relationship */
	issues: Array<GraphQLTypes["issue"]> | undefined,
	/** An aggregate relationship */
	issues_aggregate: GraphQLTypes["issue_aggregate"],
	/** An array relationship */
	jobs: Array<GraphQLTypes["job"]> | undefined,
	/** An aggregate relationship */
	jobs_aggregate: GraphQLTypes["job_aggregate"],
	/** An array relationship */
	lines: Array<GraphQLTypes["line"]> | undefined,
	/** An aggregate relationship */
	lines_aggregate: GraphQLTypes["line_aggregate"],
	/** An array relationship */
	members: Array<GraphQLTypes["teamUser"]> | undefined,
	/** An aggregate relationship */
	members_aggregate: GraphQLTypes["teamUser_aggregate"],
	/** An array relationship */
	metrics: Array<GraphQLTypes["metric"]> | undefined,
	/** An aggregate relationship */
	metrics_aggregate: GraphQLTypes["metric_aggregate"],
	name: string,
	/** An array relationship */
	payments: Array<GraphQLTypes["payment"]> | undefined,
	/** An aggregate relationship */
	payments_aggregate: GraphQLTypes["payment_aggregate"],
	stripeId?: string | undefined,
	stripeSubscriptionItemId?: string | undefined,
	supportEmail?: string | undefined,
	supportPhone?: string | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate: GraphQLTypes["tag_aggregate"],
	/** An array relationship */
	units: Array<GraphQLTypes["unit"]> | undefined,
	/** An aggregate relationship */
	units_aggregate: GraphQLTypes["unit_aggregate"],
	/** An array relationship */
	webhooks: Array<GraphQLTypes["webhook"]> | undefined,
	/** An aggregate relationship */
	webhooks_aggregate: GraphQLTypes["webhook_aggregate"],
	website?: string | undefined
};
	/** aggregated selection of "team" */
["team_aggregate"]: {
	__typename: "team_aggregate",
	aggregate?: GraphQLTypes["team_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["team"]> | undefined
};
	/** aggregate fields of "team" */
["team_aggregate_fields"]: {
	__typename: "team_aggregate_fields",
	avg?: GraphQLTypes["team_avg_fields"] | undefined,
	count: number,
	max?: GraphQLTypes["team_max_fields"] | undefined,
	min?: GraphQLTypes["team_min_fields"] | undefined,
	stddev?: GraphQLTypes["team_stddev_fields"] | undefined,
	stddev_pop?: GraphQLTypes["team_stddev_pop_fields"] | undefined,
	stddev_samp?: GraphQLTypes["team_stddev_samp_fields"] | undefined,
	sum?: GraphQLTypes["team_sum_fields"] | undefined,
	var_pop?: GraphQLTypes["team_var_pop_fields"] | undefined,
	var_samp?: GraphQLTypes["team_var_samp_fields"] | undefined,
	variance?: GraphQLTypes["team_variance_fields"] | undefined
};
	/** aggregate avg on columns */
["team_avg_fields"]: {
	__typename: "team_avg_fields",
	commissionPercentage?: number | undefined
};
	/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
["team_bool_exp"]: {
		_and?: Array<GraphQLTypes["team_bool_exp"]>,
	_not?: GraphQLTypes["team_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["team_bool_exp"]>,
	address?: GraphQLTypes["String_comparison_exp"] | undefined,
	bookings?: GraphQLTypes["booking_bool_exp"] | undefined,
	commissionPercentage?: GraphQLTypes["numeric_comparison_exp"] | undefined,
	connections?: GraphQLTypes["connection_bool_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	email?: GraphQLTypes["String_comparison_exp"] | undefined,
	entities?: GraphQLTypes["entity_bool_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	integrations?: GraphQLTypes["integration_bool_exp"] | undefined,
	isActive?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	isTest?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	issues?: GraphQLTypes["issue_bool_exp"] | undefined,
	jobs?: GraphQLTypes["job_bool_exp"] | undefined,
	lines?: GraphQLTypes["line_bool_exp"] | undefined,
	members?: GraphQLTypes["teamUser_bool_exp"] | undefined,
	metrics?: GraphQLTypes["metric_bool_exp"] | undefined,
	name?: GraphQLTypes["String_comparison_exp"] | undefined,
	payments?: GraphQLTypes["payment_bool_exp"] | undefined,
	stripeId?: GraphQLTypes["String_comparison_exp"] | undefined,
	stripeSubscriptionItemId?: GraphQLTypes["String_comparison_exp"] | undefined,
	supportEmail?: GraphQLTypes["String_comparison_exp"] | undefined,
	supportPhone?: GraphQLTypes["String_comparison_exp"] | undefined,
	tags?: GraphQLTypes["tag_bool_exp"] | undefined,
	units?: GraphQLTypes["unit_bool_exp"] | undefined,
	webhooks?: GraphQLTypes["webhook_bool_exp"] | undefined,
	website?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "team" */
["team_constraint"]: team_constraint;
	/** input type for incrementing numeric columns in table "team" */
["team_inc_input"]: {
		commissionPercentage?: GraphQLTypes["numeric"] | undefined
};
	/** input type for inserting data into table "team" */
["team_insert_input"]: {
		address?: string | undefined,
	bookings?: GraphQLTypes["booking_arr_rel_insert_input"] | undefined,
	commissionPercentage?: GraphQLTypes["numeric"] | undefined,
	connections?: GraphQLTypes["connection_arr_rel_insert_input"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	entities?: GraphQLTypes["entity_arr_rel_insert_input"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	integrations?: GraphQLTypes["integration_arr_rel_insert_input"] | undefined,
	isActive?: boolean | undefined,
	isTest?: boolean | undefined,
	issues?: GraphQLTypes["issue_arr_rel_insert_input"] | undefined,
	jobs?: GraphQLTypes["job_arr_rel_insert_input"] | undefined,
	lines?: GraphQLTypes["line_arr_rel_insert_input"] | undefined,
	members?: GraphQLTypes["teamUser_arr_rel_insert_input"] | undefined,
	metrics?: GraphQLTypes["metric_arr_rel_insert_input"] | undefined,
	name?: string | undefined,
	payments?: GraphQLTypes["payment_arr_rel_insert_input"] | undefined,
	stripeId?: string | undefined,
	stripeSubscriptionItemId?: string | undefined,
	supportEmail?: string | undefined,
	supportPhone?: string | undefined,
	tags?: GraphQLTypes["tag_arr_rel_insert_input"] | undefined,
	units?: GraphQLTypes["unit_arr_rel_insert_input"] | undefined,
	webhooks?: GraphQLTypes["webhook_arr_rel_insert_input"] | undefined,
	website?: string | undefined
};
	/** aggregate max on columns */
["team_max_fields"]: {
	__typename: "team_max_fields",
	address?: string | undefined,
	commissionPercentage?: GraphQLTypes["numeric"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	stripeId?: string | undefined,
	stripeSubscriptionItemId?: string | undefined,
	supportEmail?: string | undefined,
	supportPhone?: string | undefined,
	website?: string | undefined
};
	/** aggregate min on columns */
["team_min_fields"]: {
	__typename: "team_min_fields",
	address?: string | undefined,
	commissionPercentage?: GraphQLTypes["numeric"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	stripeId?: string | undefined,
	stripeSubscriptionItemId?: string | undefined,
	supportEmail?: string | undefined,
	supportPhone?: string | undefined,
	website?: string | undefined
};
	/** response of any mutation on the table "team" */
["team_mutation_response"]: {
	__typename: "team_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["team"]> | undefined
};
	/** input type for inserting object relation for remote table "team" */
["team_obj_rel_insert_input"]: {
		data: GraphQLTypes["team_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["team_on_conflict"] | undefined
};
	/** on conflict condition type for table "team" */
["team_on_conflict"]: {
		constraint: GraphQLTypes["team_constraint"],
	update_columns: Array<GraphQLTypes["team_update_column"]> | undefined,
	where?: GraphQLTypes["team_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "team". */
["team_order_by"]: {
		address?: GraphQLTypes["order_by"] | undefined,
	bookings_aggregate?: GraphQLTypes["booking_aggregate_order_by"] | undefined,
	commissionPercentage?: GraphQLTypes["order_by"] | undefined,
	connections_aggregate?: GraphQLTypes["connection_aggregate_order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	email?: GraphQLTypes["order_by"] | undefined,
	entities_aggregate?: GraphQLTypes["entity_aggregate_order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	integrations_aggregate?: GraphQLTypes["integration_aggregate_order_by"] | undefined,
	isActive?: GraphQLTypes["order_by"] | undefined,
	isTest?: GraphQLTypes["order_by"] | undefined,
	issues_aggregate?: GraphQLTypes["issue_aggregate_order_by"] | undefined,
	jobs_aggregate?: GraphQLTypes["job_aggregate_order_by"] | undefined,
	lines_aggregate?: GraphQLTypes["line_aggregate_order_by"] | undefined,
	members_aggregate?: GraphQLTypes["teamUser_aggregate_order_by"] | undefined,
	metrics_aggregate?: GraphQLTypes["metric_aggregate_order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	payments_aggregate?: GraphQLTypes["payment_aggregate_order_by"] | undefined,
	stripeId?: GraphQLTypes["order_by"] | undefined,
	stripeSubscriptionItemId?: GraphQLTypes["order_by"] | undefined,
	supportEmail?: GraphQLTypes["order_by"] | undefined,
	supportPhone?: GraphQLTypes["order_by"] | undefined,
	tags_aggregate?: GraphQLTypes["tag_aggregate_order_by"] | undefined,
	units_aggregate?: GraphQLTypes["unit_aggregate_order_by"] | undefined,
	webhooks_aggregate?: GraphQLTypes["webhook_aggregate_order_by"] | undefined,
	website?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: team */
["team_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "team" */
["team_select_column"]: team_select_column;
	/** input type for updating data in table "team" */
["team_set_input"]: {
		address?: string | undefined,
	commissionPercentage?: GraphQLTypes["numeric"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isActive?: boolean | undefined,
	isTest?: boolean | undefined,
	name?: string | undefined,
	stripeId?: string | undefined,
	stripeSubscriptionItemId?: string | undefined,
	supportEmail?: string | undefined,
	supportPhone?: string | undefined,
	website?: string | undefined
};
	/** aggregate stddev on columns */
["team_stddev_fields"]: {
	__typename: "team_stddev_fields",
	commissionPercentage?: number | undefined
};
	/** aggregate stddev_pop on columns */
["team_stddev_pop_fields"]: {
	__typename: "team_stddev_pop_fields",
	commissionPercentage?: number | undefined
};
	/** aggregate stddev_samp on columns */
["team_stddev_samp_fields"]: {
	__typename: "team_stddev_samp_fields",
	commissionPercentage?: number | undefined
};
	/** aggregate sum on columns */
["team_sum_fields"]: {
	__typename: "team_sum_fields",
	commissionPercentage?: GraphQLTypes["numeric"] | undefined
};
	/** update columns of table "team" */
["team_update_column"]: team_update_column;
	/** aggregate var_pop on columns */
["team_var_pop_fields"]: {
	__typename: "team_var_pop_fields",
	commissionPercentage?: number | undefined
};
	/** aggregate var_samp on columns */
["team_var_samp_fields"]: {
	__typename: "team_var_samp_fields",
	commissionPercentage?: number | undefined
};
	/** aggregate variance on columns */
["team_variance_fields"]: {
	__typename: "team_variance_fields",
	commissionPercentage?: number | undefined
};
	/** columns and relationships of "team_user" */
["teamUser"]: {
	__typename: "teamUser",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id: GraphQLTypes["uuid"],
	role?: string | undefined,
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	/** An object relationship */
	user: GraphQLTypes["user"],
	userId: GraphQLTypes["uuid"]
};
	/** aggregated selection of "team_user" */
["teamUser_aggregate"]: {
	__typename: "teamUser_aggregate",
	aggregate?: GraphQLTypes["teamUser_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["teamUser"]> | undefined
};
	/** aggregate fields of "team_user" */
["teamUser_aggregate_fields"]: {
	__typename: "teamUser_aggregate_fields",
	count: number,
	max?: GraphQLTypes["teamUser_max_fields"] | undefined,
	min?: GraphQLTypes["teamUser_min_fields"] | undefined
};
	/** order by aggregate values of table "team_user" */
["teamUser_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["teamUser_max_order_by"] | undefined,
	min?: GraphQLTypes["teamUser_min_order_by"] | undefined
};
	/** input type for inserting array relation for remote table "team_user" */
["teamUser_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["teamUser_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["teamUser_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "team_user". All fields are combined with a logical 'AND'. */
["teamUser_bool_exp"]: {
		_and?: Array<GraphQLTypes["teamUser_bool_exp"]>,
	_not?: GraphQLTypes["teamUser_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["teamUser_bool_exp"]>,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	role?: GraphQLTypes["String_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	user?: GraphQLTypes["user_bool_exp"] | undefined,
	userId?: GraphQLTypes["uuid_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "team_user" */
["teamUser_constraint"]: teamUser_constraint;
	/** input type for inserting data into table "team_user" */
["teamUser_insert_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	role?: string | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	user?: GraphQLTypes["user_obj_rel_insert_input"] | undefined,
	userId?: GraphQLTypes["uuid"] | undefined
};
	/** aggregate max on columns */
["teamUser_max_fields"]: {
	__typename: "teamUser_max_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	role?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	userId?: GraphQLTypes["uuid"] | undefined
};
	/** order by max() on columns of table "team_user" */
["teamUser_max_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	role?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	userId?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["teamUser_min_fields"]: {
	__typename: "teamUser_min_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	role?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	userId?: GraphQLTypes["uuid"] | undefined
};
	/** order by min() on columns of table "team_user" */
["teamUser_min_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	role?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	userId?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "team_user" */
["teamUser_mutation_response"]: {
	__typename: "teamUser_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["teamUser"]> | undefined
};
	/** on conflict condition type for table "team_user" */
["teamUser_on_conflict"]: {
		constraint: GraphQLTypes["teamUser_constraint"],
	update_columns: Array<GraphQLTypes["teamUser_update_column"]> | undefined,
	where?: GraphQLTypes["teamUser_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "team_user". */
["teamUser_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	role?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined,
	user?: GraphQLTypes["user_order_by"] | undefined,
	userId?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: teamUser */
["teamUser_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "team_user" */
["teamUser_select_column"]: teamUser_select_column;
	/** input type for updating data in table "team_user" */
["teamUser_set_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	role?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined,
	userId?: GraphQLTypes["uuid"] | undefined
};
	/** update columns of table "team_user" */
["teamUser_update_column"]: teamUser_update_column;
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
		_eq?: GraphQLTypes["timestamptz"] | undefined,
	_gt?: GraphQLTypes["timestamptz"] | undefined,
	_gte?: GraphQLTypes["timestamptz"] | undefined,
	_in?: Array<GraphQLTypes["timestamptz"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["timestamptz"] | undefined,
	_lte?: GraphQLTypes["timestamptz"] | undefined,
	_neq?: GraphQLTypes["timestamptz"] | undefined,
	_nin?: Array<GraphQLTypes["timestamptz"]>
};
	/** columns and relationships of "unit" */
["unit"]: {
	__typename: "unit",
	/** An array relationship */
	bookings: Array<GraphQLTypes["booking"]> | undefined,
	/** An aggregate relationship */
	bookings_aggregate: GraphQLTypes["booking_aggregate"],
	/** An object relationship */
	connection?: GraphQLTypes["connection"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt: GraphQLTypes["timestamptz"],
	/** An object relationship */
	entity?: GraphQLTypes["entity"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id: GraphQLTypes["uuid"],
	metadata?: GraphQLTypes["jsonb"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	/** An array relationship */
	tags: Array<GraphQLTypes["tag"]> | undefined,
	/** An aggregate relationship */
	tags_aggregate: GraphQLTypes["tag_aggregate"],
	/** An object relationship */
	team?: GraphQLTypes["team"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	updatedAt: GraphQLTypes["timestamptz"]
};
	/** aggregated selection of "unit" */
["unit_aggregate"]: {
	__typename: "unit_aggregate",
	aggregate?: GraphQLTypes["unit_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["unit"]> | undefined
};
	/** aggregate fields of "unit" */
["unit_aggregate_fields"]: {
	__typename: "unit_aggregate_fields",
	count: number,
	max?: GraphQLTypes["unit_max_fields"] | undefined,
	min?: GraphQLTypes["unit_min_fields"] | undefined
};
	/** order by aggregate values of table "unit" */
["unit_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["unit_max_order_by"] | undefined,
	min?: GraphQLTypes["unit_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["unit_append_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "unit" */
["unit_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["unit_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["unit_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "unit". All fields are combined with a logical 'AND'. */
["unit_bool_exp"]: {
		_and?: Array<GraphQLTypes["unit_bool_exp"]>,
	_not?: GraphQLTypes["unit_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["unit_bool_exp"]>,
	bookings?: GraphQLTypes["booking_bool_exp"] | undefined,
	connection?: GraphQLTypes["connection_bool_exp"] | undefined,
	connectionId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	entity?: GraphQLTypes["entity_bool_exp"] | undefined,
	entityId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	metadata?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	name?: GraphQLTypes["String_comparison_exp"] | undefined,
	status?: GraphQLTypes["String_comparison_exp"] | undefined,
	tags?: GraphQLTypes["tag_bool_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	uniqueRef?: GraphQLTypes["String_comparison_exp"] | undefined,
	updatedAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "unit" */
["unit_constraint"]: unit_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["unit_delete_at_path_input"]: {
		metadata?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["unit_delete_elem_input"]: {
		metadata?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["unit_delete_key_input"]: {
		metadata?: string | undefined
};
	/** input type for inserting data into table "unit" */
["unit_insert_input"]: {
		bookings?: GraphQLTypes["booking_arr_rel_insert_input"] | undefined,
	connection?: GraphQLTypes["connection_obj_rel_insert_input"] | undefined,
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entity?: GraphQLTypes["entity_obj_rel_insert_input"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	tags?: GraphQLTypes["tag_arr_rel_insert_input"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["unit_max_fields"]: {
	__typename: "unit_max_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by max() on columns of table "unit" */
["unit_max_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["unit_min_fields"]: {
	__typename: "unit_min_fields",
	connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** order by min() on columns of table "unit" */
["unit_min_order_by"]: {
		connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "unit" */
["unit_mutation_response"]: {
	__typename: "unit_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["unit"]> | undefined
};
	/** input type for inserting object relation for remote table "unit" */
["unit_obj_rel_insert_input"]: {
		data: GraphQLTypes["unit_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["unit_on_conflict"] | undefined
};
	/** on conflict condition type for table "unit" */
["unit_on_conflict"]: {
		constraint: GraphQLTypes["unit_constraint"],
	update_columns: Array<GraphQLTypes["unit_update_column"]> | undefined,
	where?: GraphQLTypes["unit_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "unit". */
["unit_order_by"]: {
		bookings_aggregate?: GraphQLTypes["booking_aggregate_order_by"] | undefined,
	connection?: GraphQLTypes["connection_order_by"] | undefined,
	connectionId?: GraphQLTypes["order_by"] | undefined,
	createdAt?: GraphQLTypes["order_by"] | undefined,
	entity?: GraphQLTypes["entity_order_by"] | undefined,
	entityId?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	metadata?: GraphQLTypes["order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	tags_aggregate?: GraphQLTypes["tag_aggregate_order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	uniqueRef?: GraphQLTypes["order_by"] | undefined,
	updatedAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: unit */
["unit_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["unit_prepend_input"]: {
		metadata?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "unit" */
["unit_select_column"]: unit_select_column;
	/** input type for updating data in table "unit" */
["unit_set_input"]: {
		connectionId?: GraphQLTypes["uuid"] | undefined,
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	entityId?: GraphQLTypes["uuid"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	metadata?: GraphQLTypes["jsonb"] | undefined,
	name?: string | undefined,
	status?: string | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	uniqueRef?: string | undefined,
	updatedAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** update columns of table "unit" */
["unit_update_column"]: unit_update_column;
	/** columns and relationships of "user" */
["user"]: {
	__typename: "user",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email: string,
	id: GraphQLTypes["uuid"],
	isAdmin: boolean,
	/** An array relationship */
	memberships: Array<GraphQLTypes["teamUser"]> | undefined,
	/** An aggregate relationship */
	memberships_aggregate: GraphQLTypes["teamUser_aggregate"],
	name?: string | undefined,
	status?: GraphQLTypes["user_status_enum"] | undefined,
	sub?: string | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
	__typename: "user_aggregate",
	aggregate?: GraphQLTypes["user_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["user"]> | undefined
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
	__typename: "user_aggregate_fields",
	count: number,
	max?: GraphQLTypes["user_max_fields"] | undefined,
	min?: GraphQLTypes["user_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_bool_exp"]>,
	_not?: GraphQLTypes["user_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["user_bool_exp"]>,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	email?: GraphQLTypes["String_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	isAdmin?: GraphQLTypes["Boolean_comparison_exp"] | undefined,
	memberships?: GraphQLTypes["teamUser_bool_exp"] | undefined,
	name?: GraphQLTypes["String_comparison_exp"] | undefined,
	status?: GraphQLTypes["user_status_enum_comparison_exp"] | undefined,
	sub?: GraphQLTypes["String_comparison_exp"] | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]: user_constraint;
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isAdmin?: boolean | undefined,
	memberships?: GraphQLTypes["teamUser_arr_rel_insert_input"] | undefined,
	name?: string | undefined,
	status?: GraphQLTypes["user_status_enum"] | undefined,
	sub?: string | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate max on columns */
["user_max_fields"]: {
	__typename: "user_max_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	sub?: string | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** aggregate min on columns */
["user_min_fields"]: {
	__typename: "user_min_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	name?: string | undefined,
	sub?: string | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz"] | undefined
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
	__typename: "user_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user"]> | undefined
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
		data: GraphQLTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["user_on_conflict"] | undefined
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
		constraint: GraphQLTypes["user_constraint"],
	update_columns: Array<GraphQLTypes["user_update_column"]> | undefined,
	where?: GraphQLTypes["user_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	email?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	isAdmin?: GraphQLTypes["order_by"] | undefined,
	memberships_aggregate?: GraphQLTypes["teamUser_aggregate_order_by"] | undefined,
	name?: GraphQLTypes["order_by"] | undefined,
	status?: GraphQLTypes["order_by"] | undefined,
	sub?: GraphQLTypes["order_by"] | undefined,
	trialExpiryAt?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "user" */
["user_select_column"]: user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	email?: string | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	isAdmin?: boolean | undefined,
	name?: string | undefined,
	status?: GraphQLTypes["user_status_enum"] | undefined,
	sub?: string | undefined,
	trialExpiryAt?: GraphQLTypes["timestamptz"] | undefined
};
	["user_status_enum"]: user_status_enum;
	/** Boolean expression to compare columns of type "user_status_enum". All fields are combined with logical 'AND'. */
["user_status_enum_comparison_exp"]: {
		_eq?: GraphQLTypes["user_status_enum"] | undefined,
	_in?: Array<GraphQLTypes["user_status_enum"]>,
	_is_null?: boolean | undefined,
	_neq?: GraphQLTypes["user_status_enum"] | undefined,
	_nin?: Array<GraphQLTypes["user_status_enum"]>
};
	/** update columns of table "user" */
["user_update_column"]: user_update_column;
	/** columns and relationships of "user_status" */
["userStatus"]: {
	__typename: "userStatus",
	name: string
};
	/** aggregated selection of "user_status" */
["userStatus_aggregate"]: {
	__typename: "userStatus_aggregate",
	aggregate?: GraphQLTypes["userStatus_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["userStatus"]> | undefined
};
	/** aggregate fields of "user_status" */
["userStatus_aggregate_fields"]: {
	__typename: "userStatus_aggregate_fields",
	count: number,
	max?: GraphQLTypes["userStatus_max_fields"] | undefined,
	min?: GraphQLTypes["userStatus_min_fields"] | undefined
};
	/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
["userStatus_bool_exp"]: {
		_and?: Array<GraphQLTypes["userStatus_bool_exp"]>,
	_not?: GraphQLTypes["userStatus_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["userStatus_bool_exp"]>,
	name?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "user_status" */
["userStatus_constraint"]: userStatus_constraint;
	/** input type for inserting data into table "user_status" */
["userStatus_insert_input"]: {
		name?: string | undefined
};
	/** aggregate max on columns */
["userStatus_max_fields"]: {
	__typename: "userStatus_max_fields",
	name?: string | undefined
};
	/** aggregate min on columns */
["userStatus_min_fields"]: {
	__typename: "userStatus_min_fields",
	name?: string | undefined
};
	/** response of any mutation on the table "user_status" */
["userStatus_mutation_response"]: {
	__typename: "userStatus_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["userStatus"]> | undefined
};
	/** on conflict condition type for table "user_status" */
["userStatus_on_conflict"]: {
		constraint: GraphQLTypes["userStatus_constraint"],
	update_columns: Array<GraphQLTypes["userStatus_update_column"]> | undefined,
	where?: GraphQLTypes["userStatus_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "user_status". */
["userStatus_order_by"]: {
		name?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: userStatus */
["userStatus_pk_columns_input"]: {
		name: string
};
	/** select columns of table "user_status" */
["userStatus_select_column"]: userStatus_select_column;
	/** input type for updating data in table "user_status" */
["userStatus_set_input"]: {
		name?: string | undefined
};
	/** update columns of table "user_status" */
["userStatus_update_column"]: userStatus_update_column;
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
		_eq?: GraphQLTypes["uuid"] | undefined,
	_gt?: GraphQLTypes["uuid"] | undefined,
	_gte?: GraphQLTypes["uuid"] | undefined,
	_in?: Array<GraphQLTypes["uuid"]>,
	_is_null?: boolean | undefined,
	_lt?: GraphQLTypes["uuid"] | undefined,
	_lte?: GraphQLTypes["uuid"] | undefined,
	_neq?: GraphQLTypes["uuid"] | undefined,
	_nin?: Array<GraphQLTypes["uuid"]>
};
	/** columns and relationships of "webhook" */
["webhook"]: {
	__typename: "webhook",
	createdAt: GraphQLTypes["timestamptz"],
	headers?: GraphQLTypes["jsonb"] | undefined,
	id: GraphQLTypes["uuid"],
	/** An object relationship */
	team: GraphQLTypes["team"],
	teamId: GraphQLTypes["uuid"],
	types: GraphQLTypes["jsonb"],
	types2?: GraphQLTypes["_text"] | undefined,
	url: string
};
	/** aggregated selection of "webhook" */
["webhook_aggregate"]: {
	__typename: "webhook_aggregate",
	aggregate?: GraphQLTypes["webhook_aggregate_fields"] | undefined,
	nodes: Array<GraphQLTypes["webhook"]> | undefined
};
	/** aggregate fields of "webhook" */
["webhook_aggregate_fields"]: {
	__typename: "webhook_aggregate_fields",
	count: number,
	max?: GraphQLTypes["webhook_max_fields"] | undefined,
	min?: GraphQLTypes["webhook_min_fields"] | undefined
};
	/** order by aggregate values of table "webhook" */
["webhook_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"] | undefined,
	max?: GraphQLTypes["webhook_max_order_by"] | undefined,
	min?: GraphQLTypes["webhook_min_order_by"] | undefined
};
	/** append existing jsonb value of filtered columns with new jsonb value */
["webhook_append_input"]: {
		headers?: GraphQLTypes["jsonb"] | undefined,
	types?: GraphQLTypes["jsonb"] | undefined
};
	/** input type for inserting array relation for remote table "webhook" */
["webhook_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["webhook_insert_input"]> | undefined,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["webhook_on_conflict"] | undefined
};
	/** Boolean expression to filter rows from the table "webhook". All fields are combined with a logical 'AND'. */
["webhook_bool_exp"]: {
		_and?: Array<GraphQLTypes["webhook_bool_exp"]>,
	_not?: GraphQLTypes["webhook_bool_exp"] | undefined,
	_or?: Array<GraphQLTypes["webhook_bool_exp"]>,
	createdAt?: GraphQLTypes["timestamptz_comparison_exp"] | undefined,
	headers?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	id?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	team?: GraphQLTypes["team_bool_exp"] | undefined,
	teamId?: GraphQLTypes["uuid_comparison_exp"] | undefined,
	types?: GraphQLTypes["jsonb_comparison_exp"] | undefined,
	types2?: GraphQLTypes["_text_comparison_exp"] | undefined,
	url?: GraphQLTypes["String_comparison_exp"] | undefined
};
	/** unique or primary key constraints on table "webhook" */
["webhook_constraint"]: webhook_constraint;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
["webhook_delete_at_path_input"]: {
		headers?: Array<string>,
	types?: Array<string>
};
	/** delete the array element with specified index (negative integers count from the
end). throws an error if top level container is not an array */
["webhook_delete_elem_input"]: {
		headers?: number | undefined,
	types?: number | undefined
};
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
["webhook_delete_key_input"]: {
		headers?: string | undefined,
	types?: string | undefined
};
	/** input type for inserting data into table "webhook" */
["webhook_insert_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	headers?: GraphQLTypes["jsonb"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	team?: GraphQLTypes["team_obj_rel_insert_input"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	types?: GraphQLTypes["jsonb"] | undefined,
	types2?: GraphQLTypes["_text"] | undefined,
	url?: string | undefined
};
	/** aggregate max on columns */
["webhook_max_fields"]: {
	__typename: "webhook_max_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	url?: string | undefined
};
	/** order by max() on columns of table "webhook" */
["webhook_max_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	url?: GraphQLTypes["order_by"] | undefined
};
	/** aggregate min on columns */
["webhook_min_fields"]: {
	__typename: "webhook_min_fields",
	createdAt?: GraphQLTypes["timestamptz"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	url?: string | undefined
};
	/** order by min() on columns of table "webhook" */
["webhook_min_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	url?: GraphQLTypes["order_by"] | undefined
};
	/** response of any mutation on the table "webhook" */
["webhook_mutation_response"]: {
	__typename: "webhook_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["webhook"]> | undefined
};
	/** on conflict condition type for table "webhook" */
["webhook_on_conflict"]: {
		constraint: GraphQLTypes["webhook_constraint"],
	update_columns: Array<GraphQLTypes["webhook_update_column"]> | undefined,
	where?: GraphQLTypes["webhook_bool_exp"] | undefined
};
	/** Ordering options when selecting data from "webhook". */
["webhook_order_by"]: {
		createdAt?: GraphQLTypes["order_by"] | undefined,
	headers?: GraphQLTypes["order_by"] | undefined,
	id?: GraphQLTypes["order_by"] | undefined,
	team?: GraphQLTypes["team_order_by"] | undefined,
	teamId?: GraphQLTypes["order_by"] | undefined,
	types?: GraphQLTypes["order_by"] | undefined,
	types2?: GraphQLTypes["order_by"] | undefined,
	url?: GraphQLTypes["order_by"] | undefined
};
	/** primary key columns input for table: webhook */
["webhook_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** prepend existing jsonb value of filtered columns with new jsonb value */
["webhook_prepend_input"]: {
		headers?: GraphQLTypes["jsonb"] | undefined,
	types?: GraphQLTypes["jsonb"] | undefined
};
	/** select columns of table "webhook" */
["webhook_select_column"]: webhook_select_column;
	/** input type for updating data in table "webhook" */
["webhook_set_input"]: {
		createdAt?: GraphQLTypes["timestamptz"] | undefined,
	headers?: GraphQLTypes["jsonb"] | undefined,
	id?: GraphQLTypes["uuid"] | undefined,
	teamId?: GraphQLTypes["uuid"] | undefined,
	types?: GraphQLTypes["jsonb"] | undefined,
	types2?: GraphQLTypes["_text"] | undefined,
	url?: string | undefined
};
	/** update columns of table "webhook" */
["webhook_update_column"]: webhook_update_column
    }
/** unique or primary key constraints on table "booking_channel" */
export const enum booking_channel_constraint {
	booking_channel_pkey = "booking_channel_pkey"
}
export const enum booking_channel_enum {
	airbnb = "airbnb",
	bookingcom = "bookingcom",
	direct = "direct",
	expedia = "expedia",
	tripadvisor = "tripadvisor",
	vrbo = "vrbo"
}
/** select columns of table "booking_channel" */
export const enum booking_channel_select_column {
	name = "name"
}
/** update columns of table "booking_channel" */
export const enum booking_channel_update_column {
	name = "name"
}
/** unique or primary key constraints on table "booking" */
export const enum booking_constraint {
	booking_pkey = "booking_pkey"
}
/** select columns of table "booking" */
export const enum booking_select_column {
	bookedAt = "bookedAt",
	bookerName = "bookerName",
	bookingChannel = "bookingChannel",
	checkIn = "checkIn",
	checkOut = "checkOut",
	confirmationCode = "confirmationCode",
	connectionId = "connectionId",
	createdAt = "createdAt",
	currency = "currency",
	entityId = "entityId",
	guestName = "guestName",
	guests = "guests",
	id = "id",
	isOTA = "isOTA",
	metadata = "metadata",
	nights = "nights",
	otaBookingId = "otaBookingId",
	status = "status",
	teamId = "teamId",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
export const enum booking_status_enum {
	booked = "booked",
	cancelled = "cancelled",
	inquired = "inquired",
	inquiry = "inquiry",
	payed = "payed"
}
/** update columns of table "booking" */
export const enum booking_update_column {
	bookedAt = "bookedAt",
	bookerName = "bookerName",
	bookingChannel = "bookingChannel",
	checkIn = "checkIn",
	checkOut = "checkOut",
	confirmationCode = "confirmationCode",
	connectionId = "connectionId",
	createdAt = "createdAt",
	currency = "currency",
	entityId = "entityId",
	guestName = "guestName",
	guests = "guests",
	id = "id",
	isOTA = "isOTA",
	metadata = "metadata",
	nights = "nights",
	otaBookingId = "otaBookingId",
	status = "status",
	teamId = "teamId",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "booking_status" */
export const enum bookingStatus_constraint {
	booking_status_pkey = "booking_status_pkey"
}
/** select columns of table "booking_status" */
export const enum bookingStatus_select_column {
	name = "name"
}
/** update columns of table "booking_status" */
export const enum bookingStatus_update_column {
	name = "name"
}
/** unique or primary key constraints on table "classification" */
export const enum classification_constraint {
	classification_pkey = "classification_pkey"
}
export const enum classification_enum {
	adjustment = "adjustment",
	commission = "commission",
	exception = "exception",
	paymentFee = "paymentFee",
	revenue = "revenue",
	securityDeposit = "securityDeposit",
	tax = "tax"
}
/** select columns of table "classification" */
export const enum classification_select_column {
	name = "name"
}
/** update columns of table "classification" */
export const enum classification_update_column {
	name = "name"
}
/** unique or primary key constraints on table "connection" */
export const enum connection_constraint {
	connection_pkey = "connection_pkey"
}
/** select columns of table "connection" */
export const enum connection_select_column {
	createdAt = "createdAt",
	credentials = "credentials",
	id = "id",
	integrationId = "integrationId",
	name = "name",
	persistentState = "persistentState",
	status = "status",
	teamId = "teamId",
	webhookKey = "webhookKey"
}
/** update columns of table "connection" */
export const enum connection_update_column {
	createdAt = "createdAt",
	credentials = "credentials",
	id = "id",
	integrationId = "integrationId",
	name = "name",
	persistentState = "persistentState",
	status = "status",
	teamId = "teamId",
	webhookKey = "webhookKey"
}
/** unique or primary key constraints on table "currency" */
export const enum currency_constraint {
	currency_pkey = "currency_pkey"
}
export const enum currency_enum {
	aed = "aed",
	afn = "afn",
	all = "all",
	amd = "amd",
	ang = "ang",
	aoa = "aoa",
	ars = "ars",
	aud = "aud",
	awg = "awg",
	azn = "azn",
	bam = "bam",
	bbd = "bbd",
	bdt = "bdt",
	bgn = "bgn",
	bhd = "bhd",
	bif = "bif",
	bmd = "bmd",
	bnd = "bnd",
	bob = "bob",
	bov = "bov",
	brl = "brl",
	bsd = "bsd",
	btn = "btn",
	bwp = "bwp",
	byr = "byr",
	bzd = "bzd",
	cad = "cad",
	cdf = "cdf",
	che = "che",
	chf = "chf",
	chw = "chw",
	clf = "clf",
	clp = "clp",
	cny = "cny",
	cop = "cop",
	cou = "cou",
	crc = "crc",
	cuc = "cuc",
	cup = "cup",
	cve = "cve",
	czk = "czk",
	djf = "djf",
	dkk = "dkk",
	dop = "dop",
	dzd = "dzd",
	egp = "egp",
	ern = "ern",
	etb = "etb",
	eur = "eur",
	fjd = "fjd",
	fkp = "fkp",
	gbp = "gbp",
	gel = "gel",
	ghs = "ghs",
	gip = "gip",
	gmd = "gmd",
	gnf = "gnf",
	gtq = "gtq",
	gyd = "gyd",
	hkd = "hkd",
	hnl = "hnl",
	hrk = "hrk",
	htg = "htg",
	huf = "huf",
	idr = "idr",
	ils = "ils",
	inr = "inr",
	iqd = "iqd",
	irr = "irr",
	isk = "isk",
	jmd = "jmd",
	jod = "jod",
	jpy = "jpy",
	kes = "kes",
	kgs = "kgs",
	khr = "khr",
	kmf = "kmf",
	kpw = "kpw",
	krw = "krw",
	kwd = "kwd",
	kyd = "kyd",
	kzt = "kzt",
	lak = "lak",
	lbp = "lbp",
	lkr = "lkr",
	lrd = "lrd",
	lsl = "lsl",
	ltl = "ltl",
	lvl = "lvl",
	lyd = "lyd",
	mad = "mad",
	mdl = "mdl",
	mga = "mga",
	mkd = "mkd",
	mmk = "mmk",
	mnt = "mnt",
	mop = "mop",
	mro = "mro",
	mur = "mur",
	mvr = "mvr",
	mwk = "mwk",
	mxn = "mxn",
	mxv = "mxv",
	myr = "myr",
	mzn = "mzn",
	nad = "nad",
	ngn = "ngn",
	nio = "nio",
	nok = "nok",
	npr = "npr",
	nzd = "nzd",
	omr = "omr",
	pab = "pab",
	pen = "pen",
	pgk = "pgk",
	php = "php",
	pkr = "pkr",
	pln = "pln",
	pyg = "pyg",
	qar = "qar",
	ron = "ron",
	rsd = "rsd",
	rub = "rub",
	rwf = "rwf",
	sar = "sar",
	sbd = "sbd",
	scr = "scr",
	sdg = "sdg",
	sek = "sek",
	sgd = "sgd",
	shp = "shp",
	sll = "sll",
	sos = "sos",
	srd = "srd",
	ssp = "ssp",
	std = "std",
	syp = "syp",
	szl = "szl",
	thb = "thb",
	tjs = "tjs",
	tmt = "tmt",
	tnd = "tnd",
	top = "top",
	try = "try",
	ttd = "ttd",
	twd = "twd",
	tzs = "tzs",
	uah = "uah",
	ugx = "ugx",
	usd = "usd",
	usn = "usn",
	uss = "uss",
	uyi = "uyi",
	uyu = "uyu",
	uzs = "uzs",
	vef = "vef",
	vnd = "vnd",
	vuv = "vuv",
	wst = "wst",
	xaf = "xaf",
	xag = "xag",
	xau = "xau",
	xba = "xba",
	xbb = "xbb",
	xbc = "xbc",
	xbd = "xbd",
	xcd = "xcd",
	xdr = "xdr",
	xfu = "xfu",
	xof = "xof",
	xpd = "xpd",
	xpf = "xpf",
	xpt = "xpt",
	xts = "xts",
	xxx = "xxx",
	yer = "yer",
	zar = "zar",
	zmw = "zmw"
}
/** select columns of table "currency" */
export const enum currency_select_column {
	name = "name"
}
/** update columns of table "currency" */
export const enum currency_update_column {
	name = "name"
}
/** unique or primary key constraints on table "entity" */
export const enum entity_constraint {
	entity_connection_id_job_id_type_unique_ref_key = "entity_connection_id_job_id_type_unique_ref_key",
	entity_pkey = "entity_pkey"
}
/** select columns of table "entity" */
export const enum entity_select_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	description = "description",
	diffJson = "diffJson",
	hash = "hash",
	id = "id",
	jobId = "jobId",
	json = "json",
	normalizedJson = "normalizedJson",
	normalizedType = "normalizedType",
	parsedAt = "parsedAt",
	predecessorEntityId = "predecessorEntityId",
	status = "status",
	statusText = "statusText",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
export const enum entity_status_enum {
	accepted = "accepted",
	extracted = "extracted",
	reconciled = "reconciled",
	rejected = "rejected",
	transformed = "transformed"
}
/** update columns of table "entity" */
export const enum entity_update_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	description = "description",
	diffJson = "diffJson",
	hash = "hash",
	id = "id",
	jobId = "jobId",
	json = "json",
	normalizedJson = "normalizedJson",
	normalizedType = "normalizedType",
	parsedAt = "parsedAt",
	predecessorEntityId = "predecessorEntityId",
	status = "status",
	statusText = "statusText",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "entity_status" */
export const enum entityStatus_constraint {
	entity_status_pkey = "entity_status_pkey"
}
/** select columns of table "entity_status" */
export const enum entityStatus_select_column {
	name = "name"
}
/** update columns of table "entity_status" */
export const enum entityStatus_update_column {
	name = "name"
}
/** unique or primary key constraints on table "integration" */
export const enum integration_constraint {
	integration_pkey = "integration_pkey"
}
/** select columns of table "integration" */
export const enum integration_select_column {
	apiDevUrl = "apiDevUrl",
	apiUrl = "apiUrl",
	icon = "icon",
	id = "id",
	isApproved = "isApproved",
	isPrivate = "isPrivate",
	name = "name",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef"
}
export const enum integration_type_enum {
	accountingPlatform = "accountingPlatform",
	bookingChannel = "bookingChannel",
	otherService = "otherService",
	paymentGateway = "paymentGateway",
	propertyManagementSystem = "propertyManagementSystem"
}
/** update columns of table "integration" */
export const enum integration_update_column {
	apiDevUrl = "apiDevUrl",
	apiUrl = "apiUrl",
	icon = "icon",
	id = "id",
	isApproved = "isApproved",
	isPrivate = "isPrivate",
	name = "name",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef"
}
/** unique or primary key constraints on table "integration_type" */
export const enum integrationType_constraint {
	integration_type_pkey = "integration_type_pkey"
}
/** select columns of table "integration_type" */
export const enum integrationType_select_column {
	name = "name"
}
/** update columns of table "integration_type" */
export const enum integrationType_update_column {
	name = "name"
}
/** unique or primary key constraints on table "issue" */
export const enum issue_constraint {
	issue_pkey = "issue_pkey"
}
/** select columns of table "issue" */
export const enum issue_select_column {
	code = "code",
	createdAt = "createdAt",
	id = "id",
	isPublic = "isPublic",
	isResolved = "isResolved",
	jobId = "jobId",
	message = "message",
	requestParams = "requestParams",
	resolveParams = "resolveParams",
	teamId = "teamId",
	type = "type",
	updatedAt = "updatedAt"
}
/** update columns of table "issue" */
export const enum issue_update_column {
	code = "code",
	createdAt = "createdAt",
	id = "id",
	isPublic = "isPublic",
	isResolved = "isResolved",
	jobId = "jobId",
	message = "message",
	requestParams = "requestParams",
	resolveParams = "resolveParams",
	teamId = "teamId",
	type = "type",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "job" */
export const enum job_constraint {
	job_pkey = "job_pkey"
}
export const enum job_method_enum {
	act = "act",
	connect = "connect",
	delete = "delete",
	enhance = "enhance",
	extract = "extract",
	info = "info",
	react = "react",
	refresh = "refresh",
	transform = "transform"
}
/** select columns of table "job" */
export const enum job_select_column {
	apiVersion = "apiVersion",
	connectionId = "connectionId",
	createdAt = "createdAt",
	endedAt = "endedAt",
	id = "id",
	integrationId = "integrationId",
	integrationSdkVersion = "integrationSdkVersion",
	integrationVersion = "integrationVersion",
	logFile = "logFile",
	logLink = "logLink",
	logs = "logs",
	method = "method",
	params = "params",
	requestId = "requestId",
	response = "response",
	sdkVersion = "sdkVersion",
	startedAt = "startedAt",
	status = "status",
	teamId = "teamId",
	updatedAt = "updatedAt"
}
export const enum job_status_enum {
	completed = "completed",
	failed = "failed",
	paused = "paused",
	queued = "queued",
	started = "started"
}
/** update columns of table "job" */
export const enum job_update_column {
	apiVersion = "apiVersion",
	connectionId = "connectionId",
	createdAt = "createdAt",
	endedAt = "endedAt",
	id = "id",
	integrationId = "integrationId",
	integrationSdkVersion = "integrationSdkVersion",
	integrationVersion = "integrationVersion",
	logFile = "logFile",
	logLink = "logLink",
	logs = "logs",
	method = "method",
	params = "params",
	requestId = "requestId",
	response = "response",
	sdkVersion = "sdkVersion",
	startedAt = "startedAt",
	status = "status",
	teamId = "teamId",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "job_method" */
export const enum jobMethod_constraint {
	job_method_pkey = "job_method_pkey"
}
/** select columns of table "job_method" */
export const enum jobMethod_select_column {
	name = "name"
}
/** update columns of table "job_method" */
export const enum jobMethod_update_column {
	name = "name"
}
/** unique or primary key constraints on table "job_status" */
export const enum jobStatus_constraint {
	job_status_pkey = "job_status_pkey"
}
/** select columns of table "job_status" */
export const enum jobStatus_select_column {
	name = "name"
}
/** update columns of table "job_status" */
export const enum jobStatus_update_column {
	name = "name"
}
/** unique or primary key constraints on table "line" */
export const enum line_constraint {
	line_pkey = "line_pkey"
}
/** select columns of table "line" */
export const enum line_select_column {
	bookingId = "bookingId",
	centTotal = "centTotal",
	classification = "classification",
	connectionId = "connectionId",
	createdAt = "createdAt",
	description = "description",
	enhancingLineId = "enhancingLineId",
	id = "id",
	invoiceStatus = "invoiceStatus",
	isEnhanced = "isEnhanced",
	metadata = "metadata",
	originCentTotal = "originCentTotal",
	originCurrency = "originCurrency",
	originExchangeRate = "originExchangeRate",
	paymentId = "paymentId",
	subclassification = "subclassification",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
/** update columns of table "line" */
export const enum line_update_column {
	bookingId = "bookingId",
	centTotal = "centTotal",
	classification = "classification",
	connectionId = "connectionId",
	createdAt = "createdAt",
	description = "description",
	enhancingLineId = "enhancingLineId",
	id = "id",
	invoiceStatus = "invoiceStatus",
	isEnhanced = "isEnhanced",
	metadata = "metadata",
	originCentTotal = "originCentTotal",
	originCurrency = "originCurrency",
	originExchangeRate = "originExchangeRate",
	paymentId = "paymentId",
	subclassification = "subclassification",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "metric" */
export const enum metric_constraint {
	metric_pkey = "metric_pkey"
}
/** select columns of table "metric" */
export const enum metric_select_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	ensuedAt = "ensuedAt",
	id = "id",
	metadata = "metadata",
	teamId = "teamId",
	text = "text",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt",
	value = "value"
}
/** update columns of table "metric" */
export const enum metric_update_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	ensuedAt = "ensuedAt",
	id = "id",
	metadata = "metadata",
	teamId = "teamId",
	text = "text",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt",
	value = "value"
}
export const enum normalized_type_enum {
	booking = "booking",
	line = "line",
	metric = "metric",
	payment = "payment",
	tag = "tag",
	unit = "unit"
}
/** unique or primary key constraints on table "normalized_type" */
export const enum normalizedType_constraint {
	normalized_type_pkey = "normalized_type_pkey"
}
/** select columns of table "normalized_type" */
export const enum normalizedType_select_column {
	name = "name"
}
/** update columns of table "normalized_type" */
export const enum normalizedType_update_column {
	name = "name"
}
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "payment" */
export const enum payment_constraint {
	payment_pkey = "payment_pkey"
}
/** select columns of table "payment" */
export const enum payment_select_column {
	arrivesAt = "arrivesAt",
	centTotal = "centTotal",
	connectionId = "connectionId",
	createdAt = "createdAt",
	currency = "currency",
	description = "description",
	entityId = "entityId",
	id = "id",
	metadata = "metadata",
	paidAt = "paidAt",
	status = "status",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
export const enum payment_status_enum {
	arrived = "arrived",
	cancelled = "cancelled",
	pending = "pending"
}
/** update columns of table "payment" */
export const enum payment_update_column {
	arrivesAt = "arrivesAt",
	centTotal = "centTotal",
	connectionId = "connectionId",
	createdAt = "createdAt",
	currency = "currency",
	description = "description",
	entityId = "entityId",
	id = "id",
	metadata = "metadata",
	paidAt = "paidAt",
	status = "status",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "payment_status" */
export const enum paymentStatus_constraint {
	payment_status_pkey = "payment_status_pkey"
}
/** select columns of table "payment_status" */
export const enum paymentStatus_select_column {
	name = "name"
}
/** update columns of table "payment_status" */
export const enum paymentStatus_update_column {
	name = "name"
}
/** unique or primary key constraints on table "payment_type" */
export const enum paymentType_constraint {
	payment_type_pkey = "payment_type_pkey"
}
/** select columns of table "payment_type" */
export const enum paymentType_select_column {
	name = "name"
}
/** update columns of table "payment_type" */
export const enum paymentType_update_column {
	name = "name"
}
/** unique or primary key constraints on table "subclassification" */
export const enum subclassification_constraint {
	subclassification_pkey = "subclassification_pkey"
}
export const enum subclassification_enum {
	adjustment_alteration = "adjustment_alteration",
	adjustment_cancellation = "adjustment_cancellation",
	adjustment_deviation = "adjustment_deviation",
	adjustment_other = "adjustment_other",
	adjustment_resolution = "adjustment_resolution",
	commission_management = "commission_management",
	commission_ota = "commission_ota",
	commission_other = "commission_other",
	commission_pms = "commission_pms",
	exception_paymentDeviation = "exception_paymentDeviation",
	exception_reservationAmountZero = "exception_reservationAmountZero",
	exception_reservationDeviation = "exception_reservationDeviation",
	paymentFee_card = "paymentFee_card",
	paymentFee_currencyConversion = "paymentFee_currencyConversion",
	paymentFee_other = "paymentFee_other",
	paymentFee_transaction = "paymentFee_transaction",
	revenue_accommodation = "revenue_accommodation",
	revenue_cleaning = "revenue_cleaning",
	revenue_extra = "revenue_extra",
	revenue_other = "revenue_other",
	securityDeposit_deposit = "securityDeposit_deposit",
	securityDeposit_fee = "securityDeposit_fee",
	tax_city = "tax_city",
	tax_local = "tax_local",
	tax_other = "tax_other",
	tax_tourism = "tax_tourism",
	tax_vat = "tax_vat"
}
/** select columns of table "subclassification" */
export const enum subclassification_select_column {
	name = "name"
}
/** update columns of table "subclassification" */
export const enum subclassification_update_column {
	name = "name"
}
/** unique or primary key constraints on table "tag" */
export const enum tag_constraint {
	tag_pkey = "tag_pkey"
}
/** select columns of table "tag" */
export const enum tag_select_column {
	bookingId = "bookingId",
	connectionId = "connectionId",
	createdAt = "createdAt",
	id = "id",
	json = "json",
	paymentId = "paymentId",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
/** update columns of table "tag" */
export const enum tag_update_column {
	bookingId = "bookingId",
	connectionId = "connectionId",
	createdAt = "createdAt",
	id = "id",
	json = "json",
	paymentId = "paymentId",
	teamId = "teamId",
	type = "type",
	uniqueRef = "uniqueRef",
	unitId = "unitId",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "team" */
export const enum team_constraint {
	team_pkey = "team_pkey"
}
/** select columns of table "team" */
export const enum team_select_column {
	address = "address",
	commissionPercentage = "commissionPercentage",
	createdAt = "createdAt",
	email = "email",
	id = "id",
	isActive = "isActive",
	isTest = "isTest",
	name = "name",
	stripeId = "stripeId",
	stripeSubscriptionItemId = "stripeSubscriptionItemId",
	supportEmail = "supportEmail",
	supportPhone = "supportPhone",
	website = "website"
}
/** update columns of table "team" */
export const enum team_update_column {
	address = "address",
	commissionPercentage = "commissionPercentage",
	createdAt = "createdAt",
	email = "email",
	id = "id",
	isActive = "isActive",
	isTest = "isTest",
	name = "name",
	stripeId = "stripeId",
	stripeSubscriptionItemId = "stripeSubscriptionItemId",
	supportEmail = "supportEmail",
	supportPhone = "supportPhone",
	website = "website"
}
/** unique or primary key constraints on table "team_user" */
export const enum teamUser_constraint {
	team_user_pkey = "team_user_pkey"
}
/** select columns of table "team_user" */
export const enum teamUser_select_column {
	createdAt = "createdAt",
	id = "id",
	role = "role",
	teamId = "teamId",
	updatedAt = "updatedAt",
	userId = "userId"
}
/** update columns of table "team_user" */
export const enum teamUser_update_column {
	createdAt = "createdAt",
	id = "id",
	role = "role",
	teamId = "teamId",
	updatedAt = "updatedAt",
	userId = "userId"
}
/** unique or primary key constraints on table "unit" */
export const enum unit_constraint {
	unit_pkey = "unit_pkey"
}
/** select columns of table "unit" */
export const enum unit_select_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	entityId = "entityId",
	id = "id",
	metadata = "metadata",
	name = "name",
	status = "status",
	teamId = "teamId",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
/** update columns of table "unit" */
export const enum unit_update_column {
	connectionId = "connectionId",
	createdAt = "createdAt",
	entityId = "entityId",
	id = "id",
	metadata = "metadata",
	name = "name",
	status = "status",
	teamId = "teamId",
	uniqueRef = "uniqueRef",
	updatedAt = "updatedAt"
}
/** unique or primary key constraints on table "user" */
export const enum user_constraint {
	user_pkey = "user_pkey"
}
/** select columns of table "user" */
export const enum user_select_column {
	createdAt = "createdAt",
	email = "email",
	id = "id",
	isAdmin = "isAdmin",
	name = "name",
	status = "status",
	sub = "sub",
	trialExpiryAt = "trialExpiryAt"
}
export const enum user_status_enum {
	active = "active",
	banned = "banned",
	disabled = "disabled",
	trialExpired = "trialExpired"
}
/** update columns of table "user" */
export const enum user_update_column {
	createdAt = "createdAt",
	email = "email",
	id = "id",
	isAdmin = "isAdmin",
	name = "name",
	status = "status",
	sub = "sub",
	trialExpiryAt = "trialExpiryAt"
}
/** unique or primary key constraints on table "user_status" */
export const enum userStatus_constraint {
	user_status_pkey = "user_status_pkey"
}
/** select columns of table "user_status" */
export const enum userStatus_select_column {
	name = "name"
}
/** update columns of table "user_status" */
export const enum userStatus_update_column {
	name = "name"
}
/** unique or primary key constraints on table "webhook" */
export const enum webhook_constraint {
	webhook_pkey = "webhook_pkey"
}
/** select columns of table "webhook" */
export const enum webhook_select_column {
	createdAt = "createdAt",
	headers = "headers",
	id = "id",
	teamId = "teamId",
	types = "types",
	types2 = "types2",
	url = "url"
}
/** update columns of table "webhook" */
export const enum webhook_update_column {
	createdAt = "createdAt",
	headers = "headers",
	id = "id",
	teamId = "teamId",
	types = "types",
	types2 = "types2",
	url = "url"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    try {
        fetchFunction = require('node-fetch');
    } catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      try {
          queryString = require('querystring').stringify(query);
      } catch (error) {
          throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
      }
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const WebSocket =  require('ws');
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented. Please install ws');
    }
  };



const allOperations = {
    "query": "query_root",
    "mutation": "mutation_root",
    "subscription": "subscription_root"
}

export type GenericOperation<O> = O extends 'query'
  ? "query_root"
  : O extends 'mutation'
  ? "mutation_root"
  : "subscription_root"

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  