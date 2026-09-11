更新日: 2026-09-11

## 現在地点
- recordCount: **1341**
- latestRecordAdded: **エヴァンゲリオン フェスティバル — No.1341**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-02_evangelion-festival.md`
- chronologicalFrontier: **2020-03-02**
- frontierLatestMachine: **エヴァンゲリオン フェスティバル — No.1341**
- schema: **resetBehavior v0.7**
- status: **2020-03-02_GROUP_OPEN_4_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1340「パチスロ ケロット4」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 開始時main最新handoffが No.1340 / 2020-03-02群OPEN_3_OF_6であることを確認。
- handoff指定の次の未処理 `エヴァンゲリオン フェスティバル` をNo.1341として追加。
- 遡及QAでは `ピカゴロウV-B` の性能側 `COMPLETE_CORE` を維持し、resetBehaviorのみv0.7で再探索・正式化して `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 2020-03-02群は既知6機のうち4機処理済み。群はOPENのまま。

## No.1341 — エヴァンゲリオン フェスティバル
- path: `docs/real_machine_db/machines/2020-03-02_evangelion-festival.md`
- manufacturer: **ビスティ**
- formalModel: **SエヴァンゲリオンフェスティバルR**
- certificationNumber: **9S1599**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / AT / 差枚数管理型 / 周期抽選 + CZ**
- payoutRate: **設定1〜6 = 97.5 / 99.0 / 101.1 / 104.3 / 108.0 / 110.1%**
- CZ初当たり: **1/386.78 / 377.62 / 379.67 / 326.27 / 326.97 / 261.22**
- AT初当たり: **1/567.28 / 530.99 / 494.83 / 424.59 / 371.67 / 287.75**
- base: **約51.5G/50枚**
- netIncrease: **AT約4.5枚/G**
- basicPayout: **AT初期100枚+α / フェスティバルボーナス約100枚**
- 通常最大天井: **7周期 / 平均約859G相当**

### resetBehavior v0.7 — No.1341
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_STAGE_GAP**
- settingChangeBehavior: **天井周期RESET / 内部状態RESET / 有利区間RESET**。設定変更後はナイトパレード開始とする後発解析が一致。
- carryOverBehavior: 据え置きでは天井周期・内部状態・有利区間をCARRY_OVER契約として整理。独立した据え置き専用一次資料は限定的。
- powerCycleBehavior: **天井引継ぎ / 内部状態引継ぎ**。純電断時の液晶開始ステージは十分な直接資料を固定できずUNVERIFIED。
- gameCounterReset: 設定変更RESET / 据え置き・電源OFF→ON CARRY_OVER。周期進行として管理。
- ceilingAfterReset: 通常最大7周期。**AT直撃後 / フルコンプリート後の最大3周期は設定変更専用短縮ではない**ため分離。
- modeAfterReset / stateAfterReset: 設定変更RESET、純電断CARRY_OVER。全シナリオ/状態テーブルは物差し用途外。
- advantageousSectionReset: 設定変更RESET / 据え置き・純電断CARRY_OVER。有利区間ランプ消灯は設定変更濃厚とする当時解析あり。
- resetBenefits: **設定変更後の初当たりはCZ:AT = 1:1、AT比率50%**。
- resetPenalties: 設定変更で前日の周期進行・内部状態・有利区間を消去。その他の固有不利はNONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: 朝一有利区間ランプ消灯→設定変更濃厚。本機固有ガックン条件/率・朝一出目の確定契約はUNVERIFIED_AFTER_RESEARCH。
- publicMorningNumbers: **設定変更後初当たりAT比率50%**。非有利区間中AT直撃の弱チェリー/弱スイカ3.1%、強チェリー/強スイカ/強ベル100%は設定変更専用ではなく非有利区間共通値として定義分離。

## No.1341 品質注記
- SANKYOオンライン博物館、岡山県公安委員会告示、P-WORLD、HAZUSE、1geki、ちょんぼりすた、パチ7、SLOT HACK等を横断。
- 型式/検定番号、導入日、設定別出玉率/CZ/AT初当たり、約51.5G/50枚、純増約4.5枚/G、最大7周期/平均859G、設定変更後AT比率50%を複数系統で照合。
- 出玉率は小数第1位表示と小数第2位精密値に丸め差があるため別スペックCONFLICTにはしない。
- 1gekiの初期ページでは設定変更/電断の一部項目が「調査中」のまま。後発複数解析でRESET/CARRY_OVER契約が一致するため、解析公開時点差として履歴を残し後発一致をcanonicalとした。
- 純電断時の液晶開始ステージ、ガックン発生条件/率、朝一出目による確定変更判別は検索語・資料系統変更後も固定できずUNVERIFIED。

## 2020-03-02群監査
- 既知6機: **S地獄少女 あとはあなたが決めることよ / いろはに愛姫 / パチスロ ケロット4 / エヴァンゲリオン フェスティバル / キングオブジャック / パチスロ ハナペカ**。
- S地獄少女 — No.1338 処理済み。
- いろはに愛姫 — No.1339 処理済み。
- パチスロ ケロット4 — No.1340 処理済み。
- エヴァンゲリオン フェスティバル — No.1341 処理済み。
- キングオブジャック — 未処理。
- パチスロ ハナペカ — 未処理。
- 群判定: **OPEN_4_OF_6_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回正式QA: `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md`。
- ピカゴロウV-B: `coreStatus: COMPLETE_CORE` は維持。reset側のみ **PARTIAL_RESEARCH_EXHAUSTED**。
- ピカゴロウV-Bは天井・有利区間は非該当。設定変更/据え置き/純電断の本機固有内部契約、ガックン/初期出目/ランプ変更判別、公開朝一数値を山佐公式・2007年当時業界記事・旧攻略・後年DBまで再探索したが直接契約を固定できず、一般的5号機ノーマル挙動から補完していない。
- Git追加履歴から次の遡及QA候補は **`docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan.md`（やったネ！はるみちゃん）** と確定。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1341を再取得。
2. **2020-03-02群の次の未処理 `キングオブジャック` をNo.1342候補として処理**。
3. 続いて `パチスロ ハナペカ` をNo.1343候補として処理。
4. 6機完了後、全メーカー/別型式/別スペック/PB/地域差を再監査して2020-03-02群CLOSED可否を判定する。
5. 遡及QAは `2007-04-15_yattane-harumi-chan.md` から開始し、性能側COMPLETE_COREを不用意に崩さずreset側のみ評価する。

## 主要出典 — 取得日 2026-09-11
### No.1341 エヴァンゲリオン フェスティバル
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/904/
- 岡山県公安委員会告示第7号: https://www.pref.okayama.jp/uploaded/life/1015492_9802691_misc.pdf
- P-WORLD: https://www.p-world.co.jp/machine/database/9164
- HAZUSE DATA: https://data.hazuse.com/?genre=208&machine_code=9S1599
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/103672/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_eva_fes/3/
- パチ7: https://pachiseven.jp/machines/5992/cutout/2
- SLOT HACK: https://slothack.net/matome/5097/

### 遡及QA ピカゴロウV-B
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_pkv/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2102/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/4662
- pacnk: https://pacnk.com/slot/tools/sh_pikagorouv.html
- パチスロ救急車: https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/pikagorouV/page_menu.html
- K-Navi: https://p-kn.com/slot/698/
