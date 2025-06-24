const assignment = {
    title: {type: String, required: true, minlength: 5, maxlength: 100},
    description: {type: String, required: true, minlength: 10},
    teacherId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    deadline: { type: Date, required: true},
    fileUrl: {type: String, required: true}
}
