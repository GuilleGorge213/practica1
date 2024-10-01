import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {

        ArrayList<String> arrayList = new ArrayList<>();
        for(int i = 0; i<10; ++i) arrayList.add(Integer.toString(i));
        for(String a : arrayList) System.out.println(a);
    }
}