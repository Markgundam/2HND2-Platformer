#pragma strict

private var grounded:boolean;
private var anim:Animator;

function Start () {

	anim = GetComponent(Animator);
	grounded = false;

}

function FixedUpdate () {
	
	if(grounded == false)
	{
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
	
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	
	if(grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		transform.Translate(Vector3.up * 250 * Time.deltaTime);
	}

	anim.SetBool("WalkingLeft",false);
	anim.SetBool("WalkingRight",false);
	
	if(Input.GetAxis("Horizontal")<0)
	{
		anim.SetBool("WalkingLeft",true);
	}
	
	if(Input.GetAxis("Horizontal")>0)
	{
		anim.SetBool("WalkingRight",true);
	}
	grounded = false;
}


function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "platform")
	{
		if (transform.position.y > other.transform.position.y)
		{
			grounded = true;
		}
	}
}

function OnTriggerStay(other:Collider)
{
	if (other.gameObject.tag == "platform")
	{
		if(transform.position.y > other.transform.position.y)
		{
			grounded = true;
		}
	}

}





