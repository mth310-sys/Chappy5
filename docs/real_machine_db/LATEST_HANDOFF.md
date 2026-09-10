更新日: 2026-09-11

## 現在地点
- recordCount: **1274**
- latestRecordAdded: **パチスロ猛獣王 王者の咆哮**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-01_moujuuou-ouja-no-houkou.md`
- chronologicalFrontier: **2019-04-01**
- frontierLatestMachine: **パチスロ猛獣王 王者の咆哮 — No.1274**
- schema: **resetBehavior v0.7**
- status: **2019-04-01_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1273を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1273、2019-04-01群OPEN。
- handoff指定の次の未処理 `パチスロ猛獣王 王者の咆哮` をNo.1274として性能コア + resetBehavior v0.7で登録。
- HAZUSEで型式 `S猛獣王 王者の咆哮ZZ` / 検定番号 `8S1172` / 導入開始2019-04-01を固定。Sammy公式2019-01-11発売告知は4月上旬稼動予定。
- 設定1〜6のAT初当たり1/356.0→1/231.3、機械割97.8→110.1%、48.9〜49G/50枚、純増約6.0枚/Gを複数解析・業界資料で照合。
- 通常A/B最大800G+前兆、チャンス600G+前兆、天国100G+前兆。
- 設定変更時は天井/モード/内部状態再抽選、肉0、獣レベル再抽選、非有利区間へ。電源OFF→ONのみでは天井/モード/内部状態/肉/獣レベル/有利区間引継ぎを機種固有表で確認。
- 朝一有利区間ランプ、ガックン実機確認、液晶G数差、前兆タイミングの変更判別情報を収録。ランプは前日非有利区間ヤメやホール対策の例外を明記。
- 設定1の有利区間移行時モードは通常A46.9 / 通常B31.3 / チャンス3.1 / 天国18.8%、状態は通常71.9 / 高確25.0 / 超高確3.1%。朝一専用別テーブルと誤解しないよう有利区間移行時値として保存。
- 2019-04-01群には未処理 `新世紀エヴァンゲリオン 暴走400` が残るためOPEN維持。

## No.1274 — パチスロ猛獣王 王者の咆哮
- manufacturer: **Sammy**
- formalModel: **`S猛獣王 王者の咆哮ZZ`**
- certificationNumber: **`8S1172`**
- generation/system: **6号機 / AT / 規定ゲーム数 + CZ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- AT初当たり: **1/356.0 / 1/341.4 / 1/314.2 / 1/275.5 / 1/256.7 / 1/231.3**
- 機械割: **97.8 / 98.7 / 100.5 / 104.3 / 107.2 / 110.1%**
- baseGamesPer50: **48.9〜49G**
- AT純増: **約6.0枚/G**
- 天井: **通常A/B 800G+前兆 / チャンス600G+前兆 / 天国100G+前兆**

### resetBehavior v0.7
- settingChange: 天井/内部モード/内部状態再抽選、肉0、獣レベル再抽選、非有利区間、有利区間ランプ消灯。
- carryOver: 据え置きは純電断側の引継ぎ契約と整合。外観判別は対策/前日非有利区間ヤメの例外あり。
- powerCycle: 天井/内部モード/内部状態/肉/獣レベル/有利区間を引継ぎ。液晶ステージ復帰先は資料上未確定。
- gameCounterReset: 設定変更でリセット、純電断/据え置きで引継ぎ。
- ceilingAfterReset: 専用固定短縮天井なし。再抽選モードにより100/600/800G+前兆。
- modeAfterReset: 設定1有利区間移行時 = 46.9 / 31.3 / 3.1 / 18.8%。
- stateAfterReset: 通常71.9 / 高確25.0 / 超高確3.1%。
- advantageousSectionReset: 設定変更で非有利区間、純電断は引継ぎ。
- resetBenefits: 高確以上28.1%、天国18.8%の選択余地。ただし0G期待値恩恵と断定しない。
- resetPenalties: 前日天井進捗/肉/獣レベル/モード/状態消失。
- resetDetection: 有利区間ランプ、ガックン実機確認、筐体G数差、前兆タイミング。ガックン公式発生率は未取得。

## 2019-04-01群
### 登録済み
- No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～（4/1 vs 4/8導入日CONFLICT保持）
- No.1274 パチスロ猛獣王 王者の咆哮

### 未処理確認済み
- **新世紀エヴァンゲリオン 暴走400（ビスティ）** — K-Navi/ちょんぼりすた等で2019-04-01。次回No.1275候補。

### 群監査
- 4/1群の全メーカー/別型式/別スペック/PB/地域差の最終監査は未完。
- エヴァ暴走400処理後に4/1群CLOSED可否を判定する。
- 4/8側にはゴーゴージャグラー2 / マイフラワー-30 / ワンダフルジャック等の候補があるため、4/1群CLOSED後に重複確認して進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- handoffの旧 `2006-12_thunder-v-special.md` は誤記。Git履歴と実ファイルを照合し、正しいパスは **`docs/real_machine_db/machines/2006-11-27_thunder-v-special.md`** と確定。
- サンダーVスペシャルは既にv0.7 resetBehavior収録済み。
- その後の追加順をGit履歴で確認し、アイムジャグラーEX → バトルリーガーX → 空手バカ一代もresetBehavior収録済みのため重複編集せず通過。
- 今回、次の再監査対象 **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY 25Φ）** を再探索。
- 性能側 `coreStatus: PARTIAL` は維持し、reset側のみ **`PARTIAL_RESEARCH_EXHAUSTED`** へ更新。
- 設定変更/据え置き/純電断別の20G RT残G、内部RT状態、ボーナス成立/告知状態の直接契約は、山佐公式・当時業界・K-Navi・解析/回顧系を再探索しても固定できず。純電断を据え置きから推定していない。
- 通常ゲーム数天井/朝一専用モード/朝一恩恵/ガックン率等も確定値を取得できず、NONE_CONFIRMED/PUBLIC_VALUE_NOT_FOUNDとして保存。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1274を再取得。
2. **2019-04-01群OPENを継続し、`新世紀エヴァンゲリオン 暴走400`をNo.1275候補として性能コア + resetBehavior v0.7収集。**
3. エヴァ処理後、2019-04-01群を全メーカー/別型式/別スペック/PB/地域差まで再監査しCLOSED可否判定。
4. 4/1群CLOSED後、2019-04-08群へ時系列順に進む。
5. 遡及QAは **`2007-02_playboy-30.md`** から再開。既存性能CONFLICTは崩さず、resetBehaviorだけ再探索・別管理する。

## 主要出典 — 取得日 2026-09-11
### パチスロ猛獣王 王者の咆哮
- Sammy公式: https://www.sammy.co.jp/japanese/news/2019/1200.html
- HAZUSE: https://hazuse.com/machine/pachislot/8S1172/
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/10714/greenbelt
- 一撃: https://1geki.jp/slot/s_mojyuo_hoko/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3308/1/72826
- K-Navi: https://p-kn.com/slot/3176/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/04/01/post-5441/
- すろぱちくえすと: https://www.slopachi-quest.com/article/moujyuuou-tennjou/
- 期待値見える化: https://slotjin.com/slot/moujuou-reset/

### パチスロPLAYBOY QA
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_plb/
- K-Navi当時業界ニュース: https://p-kn.com/topics/news/124/
- グリーンべると: https://web-greenbelt.jp/00004967/
- pacnk: https://pacnk.com/slot/tools/sh_pureiboi2007a.html
- 5号機クロニクル 山佐: https://5goki.com/yamasa
