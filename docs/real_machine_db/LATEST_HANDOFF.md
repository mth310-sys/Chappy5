# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **302 `アカギ～永続の闘牌～`（藤商事 / 2008-10-14）**。
- 2008-10-15〜18を再監査し、302より後かつ10月19日より前の具体日付き未処理機を高信頼資料で確定できなかったため、一次業界資料で納品日が明記された同日群へ進行。
- **303 `天地を喰らう`（ロデオ / 2008-10-19）** を追加。性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 303. 天地を喰らう

- record: `docs/real_machine_db/machines/2008-10-19_tenchi-wo-kurau.md`
- manufacturer: ロデオ
- releaseDate: **2008-10-19**。グリーンべると2008-10-01記事で「納品は10月19日より開始予定」と明記。
- generation: 5号機
- systemType: ボーナス+RT / 天井RT / 技術介入。
- 設定別機械割: **95.4 / 98.3 / 100.5 / 103.2 / 106.4 / 110.7%**。
- BIG合成: **1/309.1 → 1/231.6**、MIDDLE: **1/428.3 → 1/282.5**、ボーナス合算: **1/179.6 → 1/127.3**。
- 1000円ベース: **35.23 / 35.83 / 36.45 / 37.11 / 37.81 / 38.88G**。
- BIG最大約310枚、MIDDLE最大約116枚。解析目安はBIG約299〜310枚、MIDDLE約104〜116枚。
- RT「昇天モード」はSUPER BIG後、BIG後777G、MIDDLE後500Gで突入し、次回ボーナスまで継続。純増約**+0.1枚/G**。
- `coreStatus: COMPLETE_CORE`。

### resetBehavior（303）

- `settingChangeBehavior`: 旧攻略資料で**設定変更時も天井到達までのゲーム数はクリアされない**と明記。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE**。BIG後777G/MIDDLE後500Gの残り天井G数を引き継ぐ。
- `ceilingAfterReset`: 固定の朝一短縮天井ではなく、変更前の残りG数を維持。短縮専用数値は確認なし。
- `carryOverBehavior`: 天井カウンタは設定変更でも引継ぐため据え置き時も継続と整合するが、RT内部状態等の直接資料は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみの天井カウンタ/RT状態を直接確定できず。
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。朝一専用モード確認なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。RT中/RT待機状態の変更時処理は直接資料未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: 前日ハマリは設定変更されても残り天井G数が短い可能性がある。短縮抽選ではなくカウンタ非クリア由来。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示等の本機固有変更判別は未確定。
- 公開朝一数値: 通常天井 **BIG後777G / MIDDLE後500G**。設定変更専用の朝一当選率・モード振り分け・恩恵発生率は確認なし。
- `resetBehaviorQA: PARTIAL_WITH_CEILING_COUNTER_CARRYOVER_CONFIRMED_POWER_CYCLE_AND_STATE_UNVERIFIED`。

## 303主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003882/
  - 当時グリーンべると。2008-10-19納品開始予定、BIG最大310枚/MIDDLE最大116枚、BIG後777G/MIDDLE後500G天井RT、SUPER BIG後RT、技術介入。
- https://news.p-world.co.jp/articles/3080/greenbelt
  - P-WORLD現存ミラー。上記一次業界記事内容を照合。
- https://www.p-world.co.jp/machine/database/5326
  - P-WORLD機種DB。5号機/RT/天井/技術介入、S-BIG約305枚/N-BIG305枚/MID約110枚、RT条件。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/50/c.php
  - パチマガスロマガ。1000円あたり35.23〜38.88G。
- https://www.mb.ccnw.ne.jp/seven-peace.com/a-na/tatata/tentiwokurau/tenntiwokurau.html
  - 旧攻略資料。設定別機械割/ボーナス確率、RT純増約0.1枚/G、天井、**設定変更時も天井G数をクリアしない**。
- https://w.atwiki.jp/5gouki/pages/131.html
  - 当時系5号機まとめ。機械割/ボーナス合算/天井RTを照合。SUPER BIG後RTの内部段階表現は一次業界説明と差があり、実機完全再現範囲外としてレコード内に注記。
- https://pachinko.hatenablog.jp/entry/2008/10/tenchi-wo-kurau
  - 後年機種回顧。設定別機械割、BIG/MIDDLE/合算を独立照合。

## 境界監査・重複防止

- **既存303件の再追加禁止。**
- 302 `アカギ～永続の闘牌～` は2008-10-14納品開始で処理済み。
- 303 `天地を喰らう` は2008-10-19納品開始で処理済み。
- 同日群の **`まつり屋華恋`（フォープ企画 / KPE製造）** は未登録。グリーンべると2008-09-11記事で**2008-10-19納品予定**を確認済み。
- `まつり屋華恋` は一次業界記事でスーパーART「超まつり屋タイム」純増約1.0枚/G、ART「まつり屋タイム」純増約0.4枚/G、華恋BB約308枚/太郎BB約210枚/RB約100枚、1000円約38Gまで先行確認済み。
- `ハードボイルド～グリフォンの幻影～` は2008-11-03納品予定のため10月19日同日群へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 旧handoffで次候補として記録されてきた「ジャックポット・トロピカルバージョン2（2006-09）」は名称再監査が必要。2006年ヤーマ初代機と後年Ver.2を混同しない。
- 新規収集を優先しつつ、次回QA時に2006年8〜10月の既存実ファイルを直接走査して正しいレコードを同定後、v0.7を補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準303件地点。同じ2008-10-19納品群の未処理 `まつり屋華恋` から再開。**
2. 先にrepo内既存登録を検索して重複禁止。未登録なら性能コア + v0.7 resetBehaviorを収集。
3. `まつり屋華恋` 後は2008-10-20以降〜月末の未処理機を具体導入日順に監査し、その後11月へ進む。
4. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せず `CONFLICT` を維持する。
