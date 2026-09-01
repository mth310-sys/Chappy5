# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **318 `ハネスロナイツ`（オーイズミ / 型式ハネスロナイツ / 検定8S0770 / 2008-11月精度）**。
- 今回 **319 `バックトゥザフューチャーデラックス`（ロデオ / 2008-11月精度）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。既存性能値のやり直しはしていない。
- 2008年11月群はP-WORLD月間導入一覧、5号機クロニクル、後年2008年一覧を再監査し、本機を11月残候補として処理。具体日を推測せず月精度を維持。

## 319. バックトゥザフューチャーデラックス

- record: `docs/real_machine_db/machines/2008-11_back-to-the-future-deluxe.md`
- manufacturer: ロデオ
- modelNumber: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: **2008-11（月精度 / P-WORLD・5号機クロニクル一致）**
- generation: 5号機
- systemType: **A+RT（後年一覧分類。RT詳細は未確定）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/358.1 / 1/368.2 / 1/337.8 / 1/324.4 / 1/310.6 / 1/291.3**
- REG/MIDDLE BONUS: **1/574.9 / 1/574.9 / 1/516.0 / 1/516.0 / 1/474.9 / 1/474.9**
- 合算: **1/220.7 / 1/224.4 / 1/204.2 / 1/199.2 / 1/187.8 / 1/180.5**
- 機械割: **97.3 / 97.6 / 99.8 / 102.5 / 105.0 / 107.8%**（5号機クロニクル。別系統全設定一致照合は未回収）
- BIG: **345枚を超える払い出しで終了**
- MIDDLE BONUS: **140枚を超える払い出しで終了**
- 実獲得枚数: `UNVERIFIED_AFTER_RESEARCH`。規定払い出し条件から推算しない。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`
- RT継続G数/突入条件/純増: `UNVERIFIED_AFTER_RESEARCH`
- `coreStatus: PARTIAL`

### resetBehavior（319）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。表記揺れ（バックトゥザフューチャーデラックス / バック・トゥ・ザ・フューチャー デラックス / バックトゥザフューチャーDX / BTFデラックス）、ロデオ/サミーと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井短縮」「モード」「ガックン」「初期出目」「攻め時」「ヤメ時」を組み替え、P-WORLD、K-Navi、5号機クロニクル、後年DB、当時資料検索を横断したが本機固有処理を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。A+RT分類は確認したが、据え置き時のRT/内部状態/ゲーム数引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみのRT状態、ゲーム数、初期出目/表示等の本機固有処理は未確定。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH`。通常ゲーム数天井自体を強い資料で確定できず、設定変更時処理も推測しない。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。公開朝一専用モード/設定変更時モード再抽選は確認できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のRT/内部状態処理は直接資料なし。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示/ゲーム数挙動による本機固有判別は回収できず。
- `numericResetData`: リセット固有短縮天井・朝一当選率・恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`、リセットモード振り分けは `UNVERIFIED_AFTER_RESEARCH`。

## 319主要出典

取得日: 2026-09-02

- https://www.p-world.co.jp/machine/database/5367 — P-WORLD。設定別BIG/REG/合算、BIG 345枚超・MIDDLE BONUS 140枚超払い出し終了。
- https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2008-11 — P-WORLD 2008年11月新台。ロデオ製・11月導入群の存在確認。
- https://5goki.com/rodeo — 5号機クロニクル。2008年11月、機械割97.3 / 97.6 / 99.8 / 102.5 / 105.0 / 107.8%。
- https://pachisuro100.com/2008slot/ — 後年2008年一覧。ロデオ、2008年11月、A+RT分類の補助確認。
- https://p-kn.com/slot/874/direct/ — K-Navi。ロデオ新機種内覧会コンテンツの現存確認。数値根拠には不使用。

## 境界監査・重複防止

- **既存319件の再追加禁止。**
- 2008年11月の具体日未確定機は、強い日付根拠なしに順序を推測しない。319は月精度のまま保持。
- 12月境界を先行監査。ALL7の当時導入予定一覧では、最古の明示日として **2008-12-08** に `AうたテレQUEEN(80’sアイドルS)` / `いみそ～れ2 ピュアエディション プレミアムビスカス` / `ぱちスロST ゴジラ` / `ぱちスロST 行け!稲中卓球部` / `ウルトラマン・ザ・スロット` / `カイジ2` / `ハイサイ蝶特急` が並ぶ。12/14 `鬼浜爆走紅蓮隊 爆音烈士編`、12/15 `HAIBいちろう` / `シンゾウニンゲン` / `トリプル沖V` 等、12/22 `スロット代紋TAKE2` の候補を確認。
- ネイチャー・アセスメント `バケーション` は2008-12-01発表だが、グリーンべると本文で **2009年1月中旬納品開始予定**のため2008年12月導入列へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準319件地点。2008年11月メーカー別一覧を最終確認し、漏れがなければ2008年12月へ移行。**
2. 12月最古の具体導入候補は **2008-12-08群**。まず `AうたテレQUEEN(80’sアイドルS)` が本DB対象のパチスロ機であること、正式型式・メーカー・性能コアを確認し、同日群の時系列は同日扱いで漏れ防止優先とする。
3. 続けて `いみそ～れ2 ピュアエディション プレミアムビスカス`、`ぱちスロST ゴジラ`、`ぱちスロST 行け!稲中卓球部`、`ウルトラマン・ザ・スロット`、`カイジ2`、`ハイサイ蝶特急` の既存登録有無と導入日を確認し、未処理のみ追加する。
4. 各機種で性能コアに加えv0.7 `resetBehavior` を同時収集し、欠損判定前に表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語を変えて横断再探索する。
