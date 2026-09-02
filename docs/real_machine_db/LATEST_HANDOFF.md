# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **333件地点 / 時系列本線2008-12-15 トリプル沖V-30まで完了**。
- 今回、同日未処理の **334 `HAIBいちろう`（イープレイ / 歓喜社）** を追加。
- **既存334件の再追加禁止。**

## 334. HAIBいちろう

record:
- `docs/real_machine_db/machines/2008-12-15_haib-ichiro.md`

要点:
- machineName: **HAIBいちろう**
- manufacturer: **イープレイ / 歓喜社**
- releaseDate: **2008-12-15**（ALL7導入予定）
- generation: **5号機**
- 2008-10-20東京都公安委員会告示の検定情報にイープレイ「HAIBいちろう」が掲載された当時記事を確認。検定通過日とホール導入日は分離。
- 当時パチマガスロマガは **「完全告知/ノーマル」** と明記。BIGは345枚超払い出し終了・純増約**312枚**、REGは105枚超払い出し終了・純増約**104枚**。
- 同資料はオリジナル乱数抽選システムを採用した「チェーンヒットボーナス」を特徴として記載。ただし内部乱数・連鎖抽選詳細は物差しDB対象外。
- 設定別BIG/REG/合算、機械割、50枚ベースはパチマガスロマガ内に専用欄/ページが存在するものの本文が **「現在調査中」**。表記揺れ・メーカー名・項目名を変えて別系統も再探索したが数値を確定できず推測補完しない。
- 後年スロリスクタイムは **A+RT / 2008年11月** に分類するが、当時詳細資料のノーマル分類とALL7の2008-12-15具体導入予定に競合。RTの継続G数/突入条件/純増を当時本文で確認できないため **`CONFLICT_SYSTEM_TYPE` / `CONFLICT_RELEASE_MONTH`** として平均・融合せず保持。
- `coreStatus=PARTIAL_CORE_WITH_CONFIRMED_BASIC_PAYOUT_AND_SYSTEM_CONFLICT`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」項目の存在は確認したが、本機固有本文を回収できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。通常時ゲーム数天井自体を本機固有資料で確認できない。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モード/変更時モード振り分けを確認できず。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。当時掲示板に本機固有の特殊なリール始動挙動の記録はあるが、設定変更/据え置き判別との因果を示す資料はなく変更判別値に採用しない。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_NO_DEVICE_SPECIFIC_RESET_RULE`。

主要出典（取得日 2026-09-02）:
- https://www.all7.jp/plans/index/2008/12
- https://p-mans.blogspot.com/2008/10/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/eplay_slot_03.php
- https://pachisuro100.com/a-rt/
- https://kako.5ch.io/test/read.cgi/slot/1220309558/l-

## 2008-12-15境界監査

- ALL7同日一覧のうち、既存 **332 `シンゾウニンゲン`、333 `トリプル沖V-30`、今回334 `HAIBいちろう`** をパチスロ本線として処理済み。
- `F愛の戦士レインボーマン / KISSワールドツアー / ウイングマン / 加山雄三～海とエレキと若大将～ / 快傑ライオン丸 / 遠山の金さん` はALL7一覧上同日だがパチンコ側名称・メーカー機であり、本DBのパチスロ本線へ誤混入させない。
- HAIBいちろうの後年2008/11分類は、P-WORLD 2008年11月導入一覧にHAIBいちろうを確認できず、ALL7の具体日2008-12-15を本線日付として維持する。ただし後年分類差自体はCONFLICTとしてレコードに保存。

## resetBehavior遡及QA進捗

- 直前までに **大山鳴動漢みちスロ!（2006-09）** をv0.7化済み。
- **次は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）**。
- その後は時系列順にresetBehavior未収集機を進める。
- ジャックポット系は実ファイル `2006-11_jackpot-tropical-version.md` を既に同定済み。2017年Ver.2や2007年30φ派生と分離して処理する。

## 次回再開地点

1. **LATEST_HANDOFF基準334件地点 / 時系列本線は2008-12-15 HAIBいちろうまで完了。**
2. 次は具体日確定済み **2008-12-22 `スロット代紋TAKE2`（エレコ）** を最優先。既存照合 → 正式型式/導入日 → 性能コア → v0.7 resetBehavior の順で処理する。
3. 2008-12-16〜21に本線へ入る未処理機がないか、メーカー別一覧・当時新台/納品記事・旧DBで境界監査してから12/22を確定追加する。
4. `魔界城` / `シャドウハーツII` 等の月単位候補は具体導入日が確定した場合のみ時系列へ遡及挿入する。
5. 遡及QAは **竹中直人のパチスロ太閤記（2006-09）** から再開。
6. PARTIAL/UNVERIFIEDやreset欠損は、表記揺れ・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで再探索する。一般的な5号機挙動や別機種値から推測補完しない。

## コミット（今回）

- 334 HAIBいちろう: `47de48d3ee048fd324f2bd5f19a1a3710e5784f2`
