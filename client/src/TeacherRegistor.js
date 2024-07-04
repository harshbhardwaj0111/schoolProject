function TeacherRegistor(){
    return(
        <div className="wrapper">
            <form >
                <h1>Teacher Registration Form</h1>
                <h3>Please fill form carefully</h3>
                <div className='input-box'>
                    Name<br /><input type="text" placeholder='First' required />
                    <input type="text" placeholder='Last' required /><br />
                    Father's name<br /><input type="text" placeholder='First' required />
                    <input type="text" placeholder='Last' required /><br />
                    Email<br /><input type="email" placeholder='Enter Your Email' required /><br />
                    Mobile Number<br /><input type="number" placeholder='Enter Your Mobile Number' required /><br />
                    Age<br /><input type="text" placeholder='Enter Your Age' required /><br />
                    Date of Birth<br /><input type="date" required /><br />
                    Language Known<br /><input type="text" placeholder='Enter the Languages you know' required /><br />
                </div>
                <p>Education Details</p>
                <div className='input-box'>
                    Qualification<br /><input type="text" placeholder='Enter Your Qualification' required /><br />
                    Institute<br /><input type="text" placeholder='Enter Your Institute' required /><br />
                    Board<br /><input type="text" placeholder='Enter Your Board' required /><br />
                    Marks/Grade<br /><input type="text" placeholder='Enter Your Marks/Grade' required /><br />
                </div>
                <p>Experience</p>
                <div className='input-box'>
                    Period<br /><input type="text" placeholder='Enter Your Time Period of work' required /><br />
                    Organization<br /><input type="text" placeholder='Enter Organization Name' required /><br />
                    Designation<br /><input type="text" placeholder='Enter Your Designation' required /><br />
                    Personal Achievement(if any)<br /><input type="text" placeholder='Enter Your Personal Achievements' required /><br />
                </div>
                <div className="upload-file">
                    Upload Documents<br /><input type="file" placeholder='Uploas Your Documents/Files' required /><br />
                </div>
                <div className='forget'>
                    Declaration*<br />
                    <label><input type='checkbox' />The information provided in this form is correct to the best of my knowledge.</label>
                    <label><input type="checkbox" />In case of any information furnished by me is found to be incorrect, the school has the right to take any action it deems fit, including expulsion at anytime after admission.</label>
                </div>
                <button type='submit'>SEND</button>
               </form> 
        </div>
    )
}
export default TeacherRegistor;