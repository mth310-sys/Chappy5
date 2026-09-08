更新日: 2026-09-09

## 現在地点
- recordCount: **1066**
- latestRecordAdded: **押忍！番長3**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-03_osu-bancho3.md`
- chronologicalFrontier: **2017-04-03**
- frontierLatestMachine: **押忍！番長3 — No.1066**
- schema: **resetBehavior v0.7**
- status: **2017-04-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1065実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1065件 / chronologicalFrontier 2017-04-03 / 4/3群OPEN**。直前handoffの次未処理 **「押忍！番長3」** をNo.1066として登録。
- HAZUSEで2017-04-03、型式 `押忍！番長3／A5`、検定番号 `6S1594` を固定。一撃、パチ＆スロ必勝本、P-WORLDで性能コアを照合。
- 性能コアは機械割 **98.2 / 99.4 / 101.6 / 106.7 / 116.0 / 119.3%**、初当たり **1/430.1 / 414.0 / 389.3 / 335.6 / 334.0 / 242.3**、約41G/50枚、ART純増約2.0枚/G、1セット40G+α。
- 設定5初当たりのみ HAZUSE `1/334.2` vs 一撃/必勝本/P-WORLD `1/334.0` の差を確認。平均せず `CONFLICT_ART_INITIAL_SETTING5` として保持。
- resetBehaviorは通常ART間天井ベル最大200回→**設定変更後128回**。対決モード＆規定ベル回数は設定変更時 **50%再抽選 / 50%引継ぎ**。再抽選時4モード各25%。内部状態・RT状態は設定変更でも引継ぎ。
- 設定変更後は約10%で初回対決勝利確定。その特殊抽選当選時は25%/80%ループが1:1（50%で80%ループ）。
- 純電源OFF→ONは天井・対決モード/規定ベル回数・内部状態・RT状態を引継ぎ。設定変更/純電断とも液晶は公園ステージ。
- ガックンは設定変更有無にかかわらず基本発生しない仕様と複数解析で一致。朝一128ベル天井、前日MB仕込み等は判別材料だが確定判別とはしない。

## No.1066 — 押忍！番長3
- manufacturer: **大都技研**
- releaseDate: **2017-04-03**
- formalModelName: **押忍！番長3／A5**
- certificationNumber: **6S1594**
- generation/system: **5号機 / ボーナス+ART / セット数管理型ART / 規定ベル回数管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.2 / 99.4 / 101.6 / 106.7 / 116.0 / 119.3%**。
- 初当たり: **1/430.1 / 414.0 / 389.3 / 335.6 / 334.0 / 242.3**。
- 設定5のみ別資料 **1/334.2** → `CONFLICT`。
- 50枚ベース: **約41G**。
- ART「頂JOURNEY」: **純増約2.0枚/G、1セット40G+α**。
- 番長ボーナス: 50G疑似ボーナス。
- 超番長ボーナス: **全設定1/32768.0、最大245枚**。

### resetBehavior v0.7
- ART間天井: **通常ベル最大200回 / 設定変更後128回**。
- settingChange: 天井RESET、対決モード＆規定ベル回数 **50% RESELECT / 50% CARRYOVER**、内部状態CARRYOVER、RT状態CARRYOVER。
- RESELECT時モード: **通常A / 通常B / チャンス / 対決連 各25%**。
- powerCycle: 天井・モード/規定ベル・内部状態・RT状態 **CARRYOVER**。
- settingChange/powerCycle共通の液晶開始: **公園ステージ**。
- reset benefit: **約10%で初回対決勝利確定**。特殊抽選当選時は **25%ループ/80%ループ=1:1**。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- ガックン: **基本発生しないため変更判別不可**。

## 2017-04-03群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  1. **ドキドキマンゴー-30 — No.1062**
  2. **ドキドキマンゴー-25 — No.1063**
  3. **パチスロ 機動戦士Zガンダム — No.1064**
  4. **パチスロ恵比寿マスカッツ — No.1065**
  5. **押忍！番長3 — No.1066**
- 一撃2017年4月カレンダーは4/3スロットをZガンダム/番長3とする。2-9伝説は番長3/Zガンダム/恵比寿マスカッツ、別2017導入一覧はドキドキマンゴー25/30も4/3としており、個別公式・解析で既登録済み。
- 前handoff候補 **「キン肉マン3 夢の超人タッグ編」** は日付再監査で4/3から除外。当時/後年解析の複数資料が **2017-04-17導入**で一致し、一撃4月カレンダーも4/17群に置く。4/3表記の単一整理一覧はcanonicalに採用しない。
- 現調査で4/3全国導入本線の追加未登録機を固定できなかったため群をCLOSED。

## 次境界の注意
- 2017-04-04〜04-16を次回境界監査する。
- **パチスロ獣王 王者の覚醒** は資料に **2017-04-14** と **2017-04-17** の日付差があるため、メーカー/当時業界/解析を再照合して全国導入canonicalを固定するまで早取りしない。
- 2017-04-17群の既知候補: **パチスロ キン肉マン ～夢の超人タッグ編～ / 鬼浜爆走紅蓮隊 愛情恋歌編 / パチスロ おそ松くん / 獣王 王者の覚醒（日付要再固定）**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1066を再取得。
2. **1066件 / chronologicalFrontier 2017-04-03 / 4/3群CLOSED** を正本として継続。
3. **2017-04-04〜04-16境界監査**を実施。特に「獣王 王者の覚醒」の4/14 vs 4/17を一次/当時資料で固定。
4. 境界に未登録全国導入機がなければ4/17群へ進む。
5. 4/17群では導入日再固定後の時系列順で、**キン肉マン3 / 鬼浜爆走紅蓮隊 愛情恋歌編 / おそ松くん / 獣王 王者の覚醒**等を処理し、全メーカー監査する。
6. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1066 押忍！番長3
- HAZUSE: https://hazuse.com/machine/pachislot/6S1594/
- 一撃 機種概要: https://1geki.jp/slot/s_osubancho3/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_osubancho3/3/
- パチ＆スロ必勝本: https://hisshobon.news/uncategorized/2846/
- P-WORLD: https://www.p-world.co.jp/machine/database/8215
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/banchou3-reset/
- 期待値見える化: https://slotjin.com/zone/osubancho3/

### 4/3群・次境界監査
- 一撃 2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- 2-9伝説 新台一覧: https://29den.com/newslot/
- 2017年導入機種まとめ: https://squid-and-ball.net/archives/776
- キン肉マン3 すろぱちくえすと: https://www.slopachi-quest.com/article/kinnikuman3/
- キン肉マン3 ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/33436/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
