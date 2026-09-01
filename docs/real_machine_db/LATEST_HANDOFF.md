# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **303 `天地を喰らう`（ロデオ / 2008-10-19）**。
- repo内で `まつり屋華恋` の既存登録がないことを確認し、同じ2008-10-19納品群を継続。
- **304 `まつり屋華恋`（フォープ企画・プロデュース / KPE製造 / 2008-10-19）** を追加。性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 304. まつり屋華恋

- record: `docs/real_machine_db/machines/2008-10-19_matsuriya-karen.md`
- manufacturer: フォープ（企画・プロデュース） / KPE（製造）
- releaseDate: **2008-10-19**。グリーンべると2008-09-11記事で「納品は10月19日からの予定」と明記。
- generation: 5号機
- systemType: ボーナス+ART / ボーナス後ART。
- 設定別機械割: **97.9 / 99.9 / 101.9 / 103.9 / 106.5 / 108.3%**。現時点では5号機クロニクルの単一整理値のため `ANALYSIS_SINGLE`。
- 設定別BIG/REG/ボーナス合算確率: 機種名表記揺れ・メーカー名・ボーナス種別・設定1〜6等で当時攻略/旧DB/回顧資料を再探索したが比較可能な設定別表を確定できず `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガ現存ページも「現在調査中」。
- 1000円ベース: **約38G**（当時グリーンべると）。設定別値は未確認。
- 華恋BB約308枚、太郎BB約210枚、REG約100枚。
- 規定払い出しはS・BIG430枚超、BIG290枚超、REG140枚超で終了。
- ART「まつり屋タイム」は約**+0.4枚/G**、スーパーART「超まつり屋タイム」は約**+1.0枚/G**。
- 華恋BB後200G、太郎BB後150GのART、REG後50GのスーパーART。BIG中「超」マークでスーパーART昇格。
- ART中のボーナス当選、および**ボーナス間888G以降のボーナス当選**でスーパーART確定。
- 888Gは到達即発動型の通常天井として扱わず、「以降のボーナス当選時スーパーART確定」という恩恵条件として分離保存。
- `coreStatus: PARTIAL`（設定別ボーナス確率が未回収のため）。

### resetBehavior（304）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガ現存TOPに「攻め時・ヤメ時・設定変更時」専用項目が存在することは確認したが本文を回収できず、設定変更時の888Gカウンタ/ART状態を直接確定できない。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時のボーナス間888Gカウンタ・ART残G・内部状態の引継ぎを本機固有資料で確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみのカウンタ/ART状態/表示処理を直接確定できず。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH`。888G恩恵条件カウンタが設定変更でリセットか引継ぎか未確定。
- `ceilingAfterReset`: `NOT_APPLICABLE_OR_UNVERIFIED`。通常の到達即発動型天井は確認できず、888G恩恵条件の設定変更後短縮/据え置き数値は未確認。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。朝一専用モード/変更専用モード振り分け確認なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のART/RT/内部状態処理を直接確定できず。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示/BGM等による本機固有の変更判別を確定できず。
- 公開朝一数値: 設定変更専用の短縮天井、モード振り分け、朝一当選率、恩恵発生率は確認なし。通常側の比較値としてボーナス間888G以降のボーナス当選でスーパーART確定のみ保持。
- `resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH`。

## 304主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003825/
  - 当時グリーンべると。2008-10-19納品開始予定、フォープ企画/KPE製造、ART純増約0.4枚/G・スーパーART約1.0枚/G、888G以降ボーナス時スーパーART確定、華恋BB約308枚/太郎BB約210枚/RB約100枚、1000円約38G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/a.php
  - パチマガスロマガ。ボーナス後ART/RT構造、規定払い出しS・BIG430枚/BIG290枚/REG140枚、純増約308/210/100枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/h.php
  - パチマガスロマガ。ボーナス抽選確率/PAYOUTが現存ページでは「現在調査中」であることを確認。欠損を推測補完しない根拠。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/akushima_slot_01.php
  - パチマガスロマガTOP。「攻め時・ヤメ時・設定変更時」項目の存在確認。本文条件は回収不能。
- https://www.p-world.co.jp/machine/database/5319
  - P-WORLD。S・BIG430枚超/BIG290枚超/REG140枚超の払い出し終了条件を照合。
- https://5goki.com/others
  - 5号機クロニクル。2008年10月導入、メーカー表記フォープ、設定別機械割97.9〜108.3%。
- https://p-mans.blogspot.com/2008/09/
  - 2008年当時業界記事アーカイブ。フォープ企画・KPE製造、発表/内覧会時系列を補助照合。

## 境界監査・重複防止

- **既存304件の再追加禁止。**
- 302 `アカギ～永続の闘牌～` は2008-10-14納品開始で処理済み。
- 303 `天地を喰らう` は2008-10-19納品開始で処理済み。
- 304 `まつり屋華恋` は2008-10-19納品開始予定で処理済み。
- 2008-10-20〜31は次回境界監査対象。今回の追加検索では、10月21〜22日の実店舗新台入替記録に `天地を喰らう`、`アカギ～永続の闘牌～`、`爺サマー`、`バウンティキラー` 等が見えるが、これらが全国納品開始日を示す一次根拠ではないため、時系列順確定には使わない。
- `ハードボイルド～グリフォンの幻影～`、`南国育ち` はグリーンべるとで2008-11-03納品予定を確認しており10月群へ混入させない。
- `サイサイ` は2008-11-24納品開始予定のため10月群へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 旧handoffで次候補として記録されてきた「ジャックポット・トロピカルバージョン2（2006-09）」は名称再監査が必要。2006年ヤーマ初代機と後年Ver.2を混同しない。
- 新規収集を優先しつつ、次回QA時に2006年8〜10月の既存実ファイルを直接走査して正しいレコードを同定後、v0.7を補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準304件地点。2008-10-20〜31の未処理5号機を具体導入/納品日順に境界監査して再開。**
2. メーカー/業界一次資料、当時導入カレンダー、旧機種DBを横断し、10月19日より後かつ11月3日より前の具体日付き未登録機を優先する。
3. 10月後半に未処理機を確定できなければ、2008-11-03納品群（`ハードボイルド～グリフォンの幻影～`、`南国育ち` 等）のrepo既存登録を先に検索し、最古未処理から進む。
4. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せず `CONFLICT` を維持する。
