# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **332件地点 / 時系列本線2008-12-14 シンゾウニンゲンまで完了**。
- 今回、2008-12-15群の最優先候補 **333 `トリプル沖V-30`（デンケン販売）** を追加。
- 同時にresetBehavior遡及QAを進め、**大山鳴動漢みちスロ!（2006-09）** をv0.7化。既存性能コアの `PARTIAL` は維持し、リセットQAを別管理した。
- **既存333件の再追加禁止。**

## 333. トリプル沖V-30

record:
- `docs/real_machine_db/machines/2008-12-15_triple-oki-v-30.md`

要点:
- machineName: **トリプル沖V-30**
- manufacturer: **デンケン販売**
- releaseDate: **2008-12-15**（ALL7導入予定）
- generation: **5号機**
- identity: ALL7は「トリプル沖V」、パチンコFAN・後年デンケン回顧・5号機一覧は「トリプル沖V-30 / トリプル沖V 30」。30φ機として複数系統一致。
- 性能コアは表記揺れを変えて再探索したが、設定別BIG/REG/合算、機械割、50枚ベース、ボーナス純増、RT/ART/CZの有無と純増/Gを本文で確定できず **`coreStatus=PARTIAL_IDENTITY_AND_RELEASE_ONLY_AFTER_RESEARCH`**。
- 清龍ゲームジャパンの「トリプルクラウンV-30」等、名称の近い別機種が検索上大量混入するため、後年機の数値を本機へ流用していない。

### v0.7 resetBehavior

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時ゲーム数天井そのものを本機固有資料で確定できず。
- ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBehaviorQA: **UNVERIFIED_AFTER_RESEARCH_NO_DEVICE_SPECIFIC_RESET_RULE**

主要出典（取得日 2026-09-02）:
- https://www.all7.jp/plans/index/2008/12
- https://pacnk.com/photoslot/mlist_2008.html
- https://psumma.jp/pachislo/26345/
- https://onlineslotpro.blog.fc2.com/blog-entry-1229.html

## resetBehavior遡及QA進捗

### 今回補完: 大山鳴動漢みちスロ!（2006-09）

record:
- `docs/real_machine_db/machines/2006-09_oyama-meido-otokomichi-slot.md`

QA要点:
- 既存 `coreStatus=PARTIAL` は崩さず維持。
- 当時HAZUSEで **6種類BB / RT「みちのくチャンス」/ 最大引き戻し率78.5% / 同時当選なし** を再確認。
- 設定別機械割 **95.0 / 97.4 / 99.7 / 102.6 / 105.2 / 106.7%** は既存旧DBと当時HAZUSEで一致したため、機械割信頼度を複数系統一致へ補強。
- グリーンべるとで、最大純増416枚BBにはRTを絡めず、**出玉のない2種類のBB終了時にRT発動**する構造を再照合。
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。RT残G/内部RT状態の本機固有処理を直接資料で確定できず。
- 通常時ゲーム数天井、変更時短縮天井、朝一恩恵/不利、変更判別、公開朝一数値は **NONE_CONFIRMED / UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- `resetBehaviorQA=PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH`。

追加出典（取得日 2026-09-02）:
- https://hazuse.com/i/data/sasuke/top.htm
- https://web-greenbelt.jp/00004919/
- https://p-mans.blogspot.com/2006/
- https://goraku-gakkou.com/5gouki-2005-2006/

### 遡及QA次回地点

- **次は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）**。
- その後は時系列順にresetBehavior未収集機を進める。
- 旧handoffで名称混同が続いたジャックポット系は実ファイル `2006-11_jackpot-tropical-version.md` を既に同定済み。2017年Ver.2や2007年30φ派生と分離して処理する。

## 次回再開地点

1. **LATEST_HANDOFF基準333件地点 / 時系列本線は2008-12-15 トリプル沖V-30まで完了。**
2. 次は同日群の **`HAIBいちろう`（イープレイ）** を既存照合 → 正式メーカー/型式/具体導入日 → 性能コア → v0.7 resetBehavior の順で処理する。
3. 2008-12-15群の残候補を監査後、具体日確定済み **2008-12-22 `スロット代紋TAKE2`** へ進む。
4. `魔界城` / `シャドウハーツII` 等の月単位候補は具体導入日が確定した場合のみ時系列へ遡及挿入する。
5. 遡及QAは **竹中直人のパチスロ太閤記（2006-09）** から再開。
6. PARTIAL/UNVERIFIEDやreset欠損は、表記揺れ・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで再探索する。一般的な5号機挙動や別機種値から推測補完しない。

## コミット（今回）

- 333 トリプル沖V-30: `03b938de625238557828606ee221086e2d19e7de`
- 大山鳴動漢みちスロ! v0.7 reset QA: `69daf5df0fd11c25814a8ed91789011cb0063ea0`
