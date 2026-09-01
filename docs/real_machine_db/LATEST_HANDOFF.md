# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **287 `メガラニカ`（ウィンネットテクノロジー / ラスター / 2008-08）**。
- 今回新規で **288 `アカネ55`（NET / 2008-08-17納品開始予定）** を追加した。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 288. アカネ55

- record: `docs/real_machine_db/machines/2008-08-17_akane55.md`
- manufacturer: ネット（NET）
- generation: 5号機
- systemType: ボーナス+周期CZ+RT（55タイム）
- 当時グリーンべると2008-07-17記事で **2008-08-17から納品予定** を確認。
- BIGは設定1/2/3/4/5/7で約1/399.6 / 1/387.8 / 1/376.6 / 1/366.1 / 1/348.6 / 1/327.7。
- AKANE BONUSは中間設定で資料差あり。CrankySeven/当時解析Wiki系列はBIGと同等系列、K-Naviは1/399 / 1/390 / 1/378 / 1/368 / 1/348 / 1/327。平均せず `CONFLICT_AKANE_BONUS_INTERMEDIATE_SETTINGS`。
- ボーナス合算は約1/199.8〜1/163.8。
- 1000円あたり約35G（当時業界記事）。設定別ベースは未確認。
- BIG約277〜280枚、AKANE BONUSは約130〜132枚または約100〜108枚。
- CZ「55チャンス」はボーナス/RT終了後・通常99Gごとに移行。CZ中に特殊リプレイ成立/入賞でRT「55タイム」へ。
- RTは最大55G、純増約+0.4枚/G。
- 機械割98.1 / 99.1 / 100.2 / 101.2 / 103.3 / 105.9%は当時解析Wikiと後年5号機整理資料で一致。ただしK-Naviは機械割を未発表としているためメーカー公表値とは断定しない。
- coreStatus: `COMPLETE_CORE_WITH_BONUS_RATE_CONFLICT`

### resetBehavior（288）

- `settingChangeBehavior`: `CONFIRMED_SINGLE_ANALYSIS_SOURCE` — 当時解析Wiki（最終更新2008-10-14）が **設定変更後は55チャンスからスタート** と明記。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の99G周期カウンタ/CZ/RT状態引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみで99G周期カウンタ/CZ/RT状態をどう扱うか直接確定できず。
- `gameCounterReset`: `SETTING_CHANGE_CAUSES_CZ_START_BUT_COUNTER_RULE_UNVERIFIED` — 変更後CZ開始は確定。99G周期内部カウンタの具体的初期値・引継ぎ規則は未確認。
- `ceilingAfterReset`: `NOT_APPLICABLE_FOR_CONFIRMED_NORMAL_CEILING` — 通常ゲーム数天井/短縮天井は確認されず。変更後CZ開始は天井短縮と分離。
- `modeAfterReset`: `NO_SEPARATE_MODE_CONFIRMED`
- `stateAfterReset`: `SETTING_CHANGE_TO_55_CHANCE_CONFIRMED_SINGLE_SOURCE`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits`: 設定変更後55チャンス開始。CZ中にベルより先に特殊リプレイなら55G RTへ。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン/初期出目/液晶・周期表示など本機固有の変更判別は直接確定できず。
- `numericResetData`: 設定変更後開始状態=55チャンス、通常周期CZ=99Gごと、RT=55G・約+0.4枚/G。朝一専用当選率等の直接公開数値は未確認。

## 今回の主要出典

取得日: 2026-09-01

- https://news.p-world.co.jp/articles/2955/greenbelt
  - グリーンべると2008-07-17。2008-08-17納品開始予定、CZ/RT構造、RT55G・約+0.4枚/G、CZ別RT突入目安、ボーナス基本性能、約35G/1000円。
- https://w.atwiki.jp/dc2typer/pages/18.html
  - 当時解析Wiki（最終更新2008-10-14）。設定変更後55チャンス開始、設定別主要確率、機械割、99G周期CZ。
- https://p-kn.com/slot/842/
  - K-Navi。設定別BIG/AKANE BONUS/合算、払い出し条件、RT/CZ概要。AKANE BONUS中間設定値は別資料と競合。
- https://crankyseven.com/akane55-pc.htm
  - CrankySeven。精密設定別ボーナス確率、獲得目安、RT55G/約0.4枚G。
- https://5goki.com/net
  - 5号機クロニクル。2008年8月導入、機械割98.1〜105.9%、獲得枚数、RT性能の照合。
- https://www.p-world.co.jp/machine/database/5266
  - P-WORLD機種DB。払い出し終了条件とRT+CZ構造の照合。

## 境界監査・重複防止

- **既存288件の再追加禁止。**
- handoff候補だった `シオサイV-30` は当時グリーンべるとで **シオサイ-30（型式名シオサイV-30）、2008-11-03納品開始予定** と確認。2008年8月候補から外し、11月境界で処理する。
- `メガラニカDX` は2008-08-18検定の後発別型式痕跡。`メガラニカ` と混同せず、実販売/ホール導入の有無を後続で判定する。
- `メガラニカ` は具体導入日未確定のため2008-08月精度を維持。
- `爆音伝説サクラ` は2007年旧仕様と2008年発売版の数値を混在させない。
- `海人G-30` と25Φ `海人` は別レコード。
- `完熟チェリー` は2008年10月境界で再確認する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準288件地点。具体日付き本線は2008-08-17まで進行。**
2. 次は **2008-08-18以降の8月後半群を時系列再監査**。まず `メガラニカDX` の実販売/導入有無を公式・業界・旧DBで判定し、検定だけなら本線レコード化しない。
3. その後、2008年8月下旬〜9月初旬の未処理5号機を当時グリーンべると/P-WORLD、メーカー公式、旧解析DB、業界アーカイブで洗い、最古の実導入機から続行する。
4. `シオサイV-30` は2008-11-03納品開始予定が確認できたため11月まで保留し、時系列を前倒ししない。
5. v0.7 resetBehaviorは設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を毎機種再探索し、十分な再探索後のみ `UNVERIFIED` とする。
