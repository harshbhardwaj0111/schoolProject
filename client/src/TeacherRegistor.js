import './TeacherRegistor.css';
function TeacherRegistor() {
    return (
        <div className="teacher">
            <form >
                <h1>Teacher Registration Form</h1>
                <h6>Please fill form carefully</h6><hr />
                <div className='input-box'>
                    <p>Name</p>
                    <div style={{ width: "50%", height: "50%", display: "flex", flexDirection: "row", minWidth: "390px" }}>
                        <input type="text" placeholder='First' required />
                        <input type="text" placeholder='Last' required /><br />
                    </div>
                    <p>Father's name</p>
                    <div style={{ width: "50%", height: "50%", display: "flex", flexDirection: "row", minWidth: "390px" }}>
                        <input type="text" placeholder='First' required />
                        <input type="text" placeholder='Last' required />
                    </div>
                    <p>Email</p><input type="email" placeholder='Enter Your Email' required />
                    <p>Mobile Number</p><input type="number" placeholder='Enter Your Mobile Number' required />
                    <p>Age</p><input type="text" placeholder='Enter Your Age' required />
                    <p>Date of Birth</p><input type="date" required />
                    <p>Subject You want to Teach</p><input type="text" placeholder='Enter the Subject you want to teach' required />
                </div>
                <div className='myradio'>
                    Gender:MALE<input type="radio" name="n1" />FEMALE<input type="radio" name="n1" />
                </div>
                <p>Education Details</p><hr />
                <div className='input-box'>
                    <p>Qualification</p><input type="text" placeholder='Enter Your Qualification' required />
                    <p>Institute</p><input type="text" placeholder='Enter Your Institute' required />
                    <p>Board</p><input type="text" placeholder='Enter Your Board' required />
                    <p>Marks/Grade</p><input type="text" placeholder='Enter Your Marks/Grade' required />
                </div>
                <p>Experience</p><hr />
                <div className='input-box'>
                    <p>Period</p><input type="text" placeholder='Enter Your Time Period of work' required /><br />
                    <p>Organization</p><input type="text" placeholder='Enter Organization Name' required /><br />
                    <p>Designation</p><input type="text" placeholder='Enter Your Designation' required /><br />
                    <p>Personal Achievement(if any)</p><input type="text" placeholder='Enter Your Personal Achievements' required /><br />
                </div>
                <div className="upload-file">
                    <p>Upload Documents</p><input type="file" placeholder='Uploas Your Documents/Files' required /><br />
                </div>
                <div className='forget'>
                    <hr /><p>Declaration*</p>
                    <label><input type='checkbox' />The information provided in this form is correct to the best of my knowledge.</label>
                    <label><input type="checkbox" />In case of any information furnished by me is found to be incorrect, the school has the right to take any action it deems fit, including expulsion at anytime after admission.</label>
                </div><hr />
                <button type='submit'>SEND</button>
            </form>
        </div>
    )
}
export default TeacherRegistor;