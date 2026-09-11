更新日: 2026-09-11

## 現在地点
- recordCount: **1338**
- latestRecordAdded: **S 地獄少女 あとはあなたが決めることよ — No.1338**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-02_s-jigoku-shoujo-atoha-anataga-kimerukotoyo.md`
- chronologicalFrontier: **2020-03-02**
- frontierLatestMachine: **S 地獄少女 あとはあなたが決めることよ — No.1338**
- schema: **resetBehavior v0.7**
- status: **2020-03-02_GROUP_OPEN_1_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1337「パチスロ ファンタシースターオンライン2」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 開始時main最新DBコミットが No.1337 / handoff 1337であることを再確認し、並行更新によるNo競合なしを確認。
- 2020-02-25〜03-01境界を監査。No.1337 PSO2には2/25一部導入および3/2全国本格導入という日付差があるため、3/2群へ重複登録しない。
- 1geki 2020年3月新台スケジュールで2020-03-02のパチスロ **6機種**を確認: `S地獄少女 あとはあなたが決めることよ / いろはに愛姫 / パチスロ ケロット4 / エヴァンゲリオン フェスティバル / キングオブジャック / パチスロ ハナペカ`。
- 別系統の当時新台カレンダーでも `S地獄少女` と `SハナペカY` を3/2導入として確認。群はOPENのまま全6機を順次処理する。
- 群先頭として No.1338「S 地獄少女 あとはあなたが決めることよ」を追加。

## No.1338 — S 地獄少女 あとはあなたが決めることよ
- path: `docs/real_machine_db/machines/2020-03-02_s-jigoku-shoujo-atoha-anataga-kimerukotoyo.md`
- manufacturer: **藤商事**
- formalModel: **S地獄少女 あとはあなたが決めることよFD**
- certificationNumber: **9S1436**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / AT / 擬似ボーナス＋セット数管理AT**
- payoutRate: **97.44 / 99.01 / 101.12 / 104.12 / 109.27 / 114.99%**
- ボーナス合算: **1/398.5 / 1/378.3 / 1/344.2 / 1/294.2 / 1/255.6 / 1/228.2**
- AT初当たり: **1/795.9 / 1/733.6 / 1/652.4 / 1/560.8 / 1/445.5 / 1/366.6**
- base: **約50.5G/50枚**
- netIncrease: **約3.0枚/G**
- 怨み晴らしボーナス: **約90枚**
- きくり姫ボーナス: **約40枚**
- AT「地獄廻廊」: **1セット30G+α**

### resetBehavior v0.7 — No.1338
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChangeBehavior: **天井G・CZスルー回数・内部状態RESET / 非有利区間へ移行 / 有利区間ランプ消灯**。
- carryOverBehavior: 据え置きでは **天井G・CZスルー回数・内部状態・有利区間をCARRY_OVER**。
- powerCycleBehavior: 純電源OFF→ONでは **天井G・CZスルー回数・内部状態CARRY_OVER**。表示ステージはカフェ/電気街へ戻るが、前兆等では朱の河原の可能性あり。
- gameCounterReset: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- ceilingAfterReset: 設定変更/有利区間リセット後は **有利区間移行から128Gでボーナス超高確**。超高確中は **約1/25でボーナス当選**。
- normalCeiling: 有利区間 **800G**でつぐみフリーズ抽選。非当選時は有利区間リセット→128G後ボーナス超高確。
- stateAfterReset: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- advantageousSectionReset: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- resetBenefits: 128G後ボーナス超高確、非有利区間中レア役でボーナス確定とする当時攻略あり。
- resetPenalties: 前日天井/CZスルー進行消去。実戦値系解析では低設定の0Gリセット狙い自体はマイナス評価。
- resetDetection: **通常時ランプ常時点灯 → 朝一点灯=据え置き濃厚 / 消灯=設定変更濃厚**。店対策/前日非有利区間終了など例外あり。
- 時計: 設定変更/電断とも白発光で単独判別不可。
- ガックン: 本機固有条件/率は表記揺れ・型式・メーカーを含む再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- setting-change専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## No.1338 品質注記
- 藤商事公式でボーナス合算/AT確率を直接確認し、機械割・ベース・獲得枚数・resetBehaviorは業界資料/複数当時解析で照合。
- 主要性能値に重大CONFLICTなし。
- 朝一ランプ判別は例外条件があるため「確定」ではなく「濃厚」として保持。

## 2020-03-02群監査
- 1geki掲載6機: **S地獄少女 あとはあなたが決めることよ / いろはに愛姫 / パチスロ ケロット4 / エヴァンゲリオン フェスティバル / キングオブジャック / パチスロ ハナペカ**。
- S地獄少女 — No.1338 処理済み。
- いろはに愛姫 — 未処理。
- パチスロ ケロット4 — 未処理。
- エヴァンゲリオン フェスティバル — 未処理。
- キングオブジャック — 未処理。
- パチスロ ハナペカ — 未処理。
- PSO2はNo.1337で2/24 canonical、2/25一部・3/2全国本格のCONFLICTを既に保持しているため3/2群へ重複登録しない。
- 群判定: **OPEN_1_OF_6_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- main recent commit `f8d83ae288e20590d4c4f97f50162a2528add01d` で `わんぱくパイロット大冒険` のresetBehavior QAが完了していることを確認。
- 次回の遡及QA再開地点はmain実ファイル順から再計算する。旧handoffの「わんぱくパイロット大冒険から」は再処理しない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1338を再取得。
2. **2020-03-02群の次の未処理 `いろはに愛姫` をNo.1339候補として処理**。
3. 続いて `パチスロ ケロット4 → エヴァンゲリオン フェスティバル → キングオブジャック → パチスロ ハナペカ` を同じ群キューで処理。
4. 6機完了後、全メーカー/別型式/別スペック/PB/地域差を再監査して2020-03-02群CLOSED可否を判定する。
5. 遡及QAは旧handoffではなくmain実ファイル順から次の未formalizedレコードを再計算して継続する。

## 主要出典 — 取得日 2026-09-11
### No.1338 S 地獄少女 あとはあなたが決めることよ
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_jigoku3/
- パチビー機種DB: https://www.pachibee.jp/machines/about/220010009
- パチビー発表会記事: https://www.pachibee.jp/pparticles/view/1225
- HAZUSE: https://hazuse.com/machine/pachislot/9S1436/
- HAZUSE 天井/設定変更: https://hazuse.com/machine/pachislot/9S1436/genre/207/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/102559/
- 期待値見える化: https://slotjin.com/slot/jigoku3-reset/
- K-Navi: https://p-kn.com/slot/3400/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/30/a.php

### 群監査
- 1geki 2020年3月新台スケジュール: https://1geki.jp/newmachinecalender/202003/
- パチンコ・パチスロ.com 2020導入日カレンダー: https://pachinkopachisro.com/archives/53951811.html
