更新日: 2026-09-15

## 現在地点
- recordCount: **1775**
- latestRecordAdded: **ニューキングハナハナV-30 — No.1775**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-01-05_new-king-hanahana-v-30.md`
- chronologicalFrontier: **2026-01-05**
- schema: **resetBehavior v0.7**
- status: **2026-01-05_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1772を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1773 `スマスロ鉄拳6` を追加。
- No.1774 `スマート沖スロ ニューキングハナハナV` を追加。
- No.1775 `ニューキングハナハナV-30` を追加。
- 2026-01-05群はNo.1772を含む4機すべて処理し、25Φ/30Φ派生・別型式・旧予定日・PB/段階導入を再監査して **CLOSED 4/4** とした。
- ニューキングハナハナVはスマート沖スロ版 `LBニューキングハナハナVPF` と30Φ版 `SBニューキングハナハナVPA-30` が型式・遊技媒体とも別のため独立レコード化。

## No.1773 — スマスロ鉄拳6
- path: `docs/real_machine_db/machines/2026-01-05_tekken6.md`
- manufacturer: **山佐製造 / 山佐ネクスト**
- formalModel: **Lパチスロ鉄拳6YD01H**
- inspectionCode: **5S1078**
- releaseDate: **2026-01-05**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.5 / 105.2 / 110.3 / 114.9%**
- CZInitial: **1/488.6 / 1/485.3 / 1/470.5 / 1/461.8 / 1/458.0 / 1/452.8**
- bonusInitial: **1/264.7 / 1/261.5 / 1/255.3 / 1/227.6 / 1/220.3 / 1/218.5**
- ATInitial: **1/497.0 / 1/484.1 / 1/456.8 / 1/397.6 / 1/366.4 / 1/358.5**
- base: **約31.0G/50枚（設定1）**
- netIncrease: **初当たりBIG/鉄拳RUSH 約2.5枚/G、AT中BIG/デビルRUSH 約5.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1773 resetBehavior v0.7
- 設定変更時は有利区間RESET。
- 規定鉄拳ポイント天井は通常最大900pt+αから **500pt+α**へ短縮。解析上の平均実ゲーム換算は約416G+α。
- ATスルー天井は通常3スルー後4回目AT濃厚から、設定変更後 **2スルー後3回目AT濃厚**へ短縮。
- 設定変更専用モードへ移行し100pt/300ptが強い。CZモードA～Eも再抽選。
- 据え置きは有利区間CARRY_OVERを機種固有資料で確認。朝一500pt超過や短縮スルー天井非発動は据え置き濃厚材料。
- 純電源OFF→ONは機種固有比較ページの存在までは確認したが、公開取得可能な本文から項目別結果を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般スマスロ仕様からの推測補完はしていない。
- なな徹独自シミュレーターの設定1・等価リセット期待値は0G -922円、100G -36円、150G +537円、200G +1,222円、300G +3,009円、400G +5,549円。メーカー公表値ではないため解析シミュレーションとして分離保持。
- エンディング後有利区間リセット時のデビルロード恩恵は設定変更時を除くため朝一恩恵へ混入しない。
- 有利区間ランプによる判別不可。本機固有ガックン条件/発生率は再探索後も高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1774 — スマート沖スロ ニューキングハナハナV
- path: `docs/real_machine_db/machines/2026-01-05_new-king-hanahana-v-smart.md`
- manufacturer: **パイオニア**
- formalModel: **LBニューキングハナハナVPF**
- inspectionCode: **5S1036**
- releaseDate: **2026-01-05**
- settings: **1 / 2 / 3 / 4 / V**
- payoutRate: **97 / 99 / 101 / 104 / 108%**
- BIG: **1/299 / 1/291 / 1/281 / 1/268 / 1/253**
- REG: **1/496 / 1/471 / 1/442 / 1/409 / 1/372**
- combined: **1/186 / 1/180 / 1/172 / 1/162 / 1/150**
- base: **約37G/50枚**
- basicPayout: **BIG約312枚（BT含む） / REG約130枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1774 resetBehavior v0.7
- ノーマル+BTで天井非搭載。規定G数天井、朝一専用モード、AT/CZ状態優遇はNOT_APPLICABLE。
- 設定変更固有の朝一出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日ハマリG数に宵越し天井価値はない。
- 純電源OFF→ONの機種固有比較、有利区間の設定変更/据え置き/電断三者契約、本機固有ガックンは表記揺れ・型式・メーカー込みで再探索後も固定できず、該当部分だけ `UNVERIFIED_AFTER_RESEARCH`。
- 一部後発二次資料の設定3/4機械割差は、高優先の exact model 資料と照合できず `CONFLICT_SECONDARY_UNCORROBORATED` としてcanonicalへ採用しない。

## No.1775 — ニューキングハナハナV-30
- path: `docs/real_machine_db/machines/2026-01-05_new-king-hanahana-v-30.md`
- manufacturer: **パイオニア**
- formalModel: **SBニューキングハナハナVPA-30**
- inspectionCode: **530665**
- releaseDate: **2026-01-05**
- settings: **1 / 2 / 3 / 4 / V**
- payoutRate: **97 / 99 / 101 / 104 / 108%**
- BIG: **1/299 / 1/291 / 1/281 / 1/268 / 1/253**
- REG: **1/496 / 1/471 / 1/442 / 1/409 / 1/372**
- combined: **1/186 / 1/180 / 1/172 / 1/162 / 1/150**
- base: **約37G/50枚**
- basicPayout: **BIG約312枚（BT含む） / REG約130枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1775 resetBehavior v0.7
- 30Φメダルのノーマル+BTで天井非搭載。規定G数天井、朝一専用モード、AT/CZ状態優遇はNOT_APPLICABLE。
- 設定変更固有の朝一出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日ハマリG数に宵越し天井価値はない。
- 純電源OFF→ONの機種固有比較、有利区間の三者契約、本機固有ガックンは再探索後も高信頼資料で固定できず、一般パイオニア系の慣例から推測補完しない。
- 合算値をBIG/REGから算術再計算した一部資料に1/187・1/151等の丸め差があるが、主要資料の掲載値1/186・1/150をcanonicalとし、平均せず `ROUNDING_DEFINITION_DIFFERENCE` として扱う。

## conflicts / source normalization
- 鉄拳6の主要性能値はG-net・必勝本・1geki・なな徹系で重大CONFLICTなし。
- 鉄拳6のリセット0G期待値について「0Gからプラス」とする後発記述と、条件明示のなな徹シミュレーター0G -922円が競合。平均せず、数値canonicalは条件明示値を採用し一般化しない。
- ニューキングハナハナVのスマスロ版と30Φ版は同名系統・共通基本性能だが、正式型式と遊技媒体が異なるため別レコード。
- 2026年1月の古い事前予定には `L範馬刃牙`・`スマスロ ゴブリンスレイヤーII` を1/16または1/19とする一覧が残るが、導入後の複数資料は両機を **2026-02-02** として一致。旧予定日はcanonical導入日へ採用しない。
- `Lパチスロうみねこのなく頃に2` を1/5候補として扱う導入前記事も確認したが、導入後の機種資料・2月一覧が2026-02-02で一致するため1/5群へ混入しない。

## sources summary
retrievedAt: 2026-09-15
### No.1773
- 1geki 機種総合/型式/検定: https://1geki.jp/slot/l_tekken6/
- 1geki 天井/朝一: https://1geki.jp/slot/l_tekken6/3/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1069/34001/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1069/34002/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1069/33969/
- なな徹 初当たり青7: https://nana-press.com/kaiseki/machine/1069/33975/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/88709/
- パチ&スロ必勝本 初当たりボーナス: https://hisshobon.com/machineinfo/88693/
- G-net: https://g-net-ps.com/info/s0241/
- GreenBelt/P-WORLD: https://news.p-world.co.jp/articles/32142/greenbelt
- パチビー: https://www.pachibee.jp/machines/index/225110008
- ジャグラーズネット: https://jugglersnet.com/chumoku/tekken6
- パチスロ攻略マガジン系 朝一比較入口: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/254/kr01.php

### No.1774
- 1geki スマスロ版: https://1geki.jp/slot/l_new_king_hanahana_v/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1036/
- パチ&スロ必勝本: https://p.hisshobon.jp/vpage/2744/2
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-73801/
- ゼンリン: https://zenrin-net.co.jp/12252/
- 情報島+: https://p-johojima.jp/machine_spec/post-17970/
- 6確: https://www.kaku6.jp/slot/newking-hanahana-v/
- アミュタメ: https://www.amuse-p.com/blog/newking-hanahana-v/

### No.1775
- 1geki 30Φ版: https://1geki.jp/slot/s_new_king_hanahana_v30/
- パチビー: https://www.pachibee.jp/machines/index/225110010
- パチ&スロ必勝本: https://p.hisshobon.jp/vpage/2744/2
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-73801/
- ゼンリン: https://zenrin-net.co.jp/12252/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/151/bn01.php
- スロベース: https://slobase.jp/machines/new-king-hanahana
- 6確: https://www.kaku6.jp/slot/newking-hanahana-v30/

## 2026-01-05境界 — CLOSED 4/4
1. **スマスロ 北斗の拳 転生の章2 — No.1772 DONE**
2. **スマスロ鉄拳6 — No.1773 DONE**
3. **スマート沖スロ ニューキングハナハナV — No.1774 DONE**
4. **ニューキングハナハナV-30 — No.1775 DONE**

boundaryAudit:
- 情報島+・ALL7・導入後機種ページを再照合し、1/5実導入のパチスロcanonical群は上記4機で一致。
- スマート版/30Φ版は正式型式を確認し独立レコード化済み。
- 旧事前予定に残る1/16・1/19候補は、導入後の2/2資料を優先して1/5境界へ混入させない。
- PB、追加別型式、地域先行、延期/段階導入も再検索し、今回1/5へ追加すべきcanonical機は確認されなかった。

## 次のcanonical境界 — 2026-02-02 OPEN 0/6
導入後の情報島+、パチスロサミット系一覧、P-Summa等で同日6機を照合。
1. **スマスロ 攻殻機動隊 — No.1776 candidate**
2. **Lパチスロうみねこのなく頃に2 — candidate**
3. **Lパチスロ 炎炎ノ消防隊2 — candidate**
4. **L範馬刃牙 — candidate**
5. **スマスロ ハナビ — candidate**
6. **スマスロ ゴブリンスレイヤーII — candidate**

## 次回再開地点
- 最新mainを再同期しNo.1775と本handoffを確認。
- **No.1776候補「スマスロ 攻殻機動隊」— 2026-02-02** から継続。
- その後 `Lパチスロうみねこのなく頃に2 → Lパチスロ 炎炎ノ消防隊2 → L範馬刃牙 → スマスロ ハナビ → スマスロ ゴブリンスレイヤーII` を候補キューとして処理。
- 同日群6/6後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回も本線を優先し、外部導入順からretro QAの次レコードを推測更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_NO_UNSAFE_GUESS_UPDATE**
