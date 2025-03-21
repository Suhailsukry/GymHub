import React, { useState } from "react";
import "../styles/trainerWorkoutPlans/trainerWorkoutPlans.css";

const TrainerWorkoutPlans = () => {
    const [plans, setPlans] = useState([]);
    const [targetAudience, setTargetAudience] = useState("");
    const [planText, setPlanText] = useState("");

    // Function to add a new plan
    const addPlan = () => {
        if (targetAudience && planText) {
            setPlans([...plans, { audience: targetAudience, text: planText }]);
            setTargetAudience("");
            setPlanText("");
        }
    };

    // Function to delete a plan
    const deletePlan = (index) => {
        setPlans(plans.filter((_, i) => i !== index));
    };

    return (
        <div className="workout-page">
            {/* Title */}
            <h2 className="page-title">Workout Plans & Tips</h2>
            <hr className="divider" />

            {/* Top Section - Add New Plans */}
            <div className="add-plan-section">
                <h3>Add Workout Plan / Tips</h3>
                <div className="form-group">
                    <label>Target Audience:</label>
                    <input
                        type="text"
                        placeholder="E.g., Beginners, Athletes..."
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Workout Plan / Tips:</label>
                    <textarea
                        placeholder="Write your workout plan or tips here..."
                        value={planText}
                        onChange={(e) => setPlanText(e.target.value)}
                    ></textarea>
                </div>
                <button className="submit-btn" onClick={addPlan}>Add Plan</button>
            </div>

            {/* Bottom Section - Display Plans */}
            <div className="display-section">
                <h3>Added Workout Plans & Tips</h3>
                {plans.length === 0 ? (
                    <p className="no-plans">No plans added yet.</p>
                ) : (
                    plans.map((plan, index) => (
                        <div key={index} className="plan-card">
                            <h4>For: {plan.audience}</h4>
                            <p>{plan.text}</p>
                            <button className="delete-btn" onClick={() => deletePlan(index)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TrainerWorkoutPlans;