# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は372件 `緑ドン`。2009-05-25同日群の未処理候補 `がんばれゴエモン` を確認し、**今回373として追加**。
- 遡及resetBehavior QAは `ホークIII-30` の次として **`ホークIII（25φ）` をv0.7補完**。
- 新規性能コアとresetBehavior QAは分離管理し、既存 `COMPLETE_CORE` / `PARTIAL` 判定をreset欠損だけで不用意に変更しない方針を維持。

## 373. がんばれゴエモン

record:
- `docs/real_machine_db/machines/2009-05-25_ganbare-goemon.md`

要点:
- manufacturer: KPE
- formalModelName: **がんばれゴエモンJD**
- releaseDate主値: **2009-05-25**（K-Navi全国一斉導入開始）。グリーンべるとは2009-05-24納品予定、KONAMI公式は2009年5月稼働開始。定義差を保持。
- generation: 5号機
- systemType: **ボーナス + ART / A+ART / 次回ボーナスまで継続ART**
- ボーナス合成: 全設定 **1/199.80**。
- BIG合成: **1/436.91 / 1/422.81 / 1/420.10 / 1/409.60 / 1/397.19 / 1/387.79**。
- REG合成: **1/368.18 / 1/378.82 / 1/381.02 / 1/390.10 / 1/402.06 / 1/412.18**。
- 50枚ベース: **38.05 / 38.03 / 38.16 / 38.28 / 38.53 / 38.56G**（パチマガ旧解析）。
- ART「きらきら街道タイム」: **約+1.0枚/G、原則次回ボーナスまで継続、ストック可能**。
- 獲得目安: インパクトBIG約408枚+ART2回、BIG約204枚、REG約56枚。
- 機械割は平均せず `CONFLICT`:
  - 市場/業界掲載系列: **97.9 / 98.8 / 100.8 / 102.9 / 105.9 / 109.1%**
  - パチマガ旧シミュレート: **98.10 / 99.06 / 101.04 / 103.18 / 106.14 / 109.60%**
- 通常ゲーム数による固定天井は旧解析で「なし」。P-WORLDの最大128G救済ゾーンはART非突入ボーナス後専用であり、通常ハマリ天井と分離。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT`。

### v0.7 resetBehavior — がんばれゴエモン

- settingChangeBehavior: `ART_STOCK_CLEARED_CHARACTER_COUNT_RESET_STAGE_RETAINED_ANALYSIS_SINGLE`。
  - 旧攻略資料で設定変更時 **ARTストック消滅 / キャラ数はゴエモン1人 / 表示ステージ変化なし** を確認。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: `NOT_APPLICABLE_FOR_NORMAL_GAME_CEILING`。通常固定天井なし。
- modeAfterReset: 表示ステージ維持のみ確認。内部モード/状態は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `ART_STOCK_LOST_ON_SETTING_CHANGE`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目等の本機固有確定情報なし。
- 公開朝一数値: 設定変更専用の短縮天井・朝一ART当選率・恩恵率は確認できず。
- `resetBehaviorQA=PARTIAL_WITH_SETTING_CHANGE_ART_STOCK_CLEAR_AND_STAGE_BEHAVIOR_RECOVERED`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- KONAMI公式機種アーカイブ
- グリーンべると当時業界記事
- K-Navi 2009年5月導入カレンダー
- P-WORLD
- パチマガスロマガ旧解析（確率/PAYOUT、50枚ベース、基本システム）
- SLONET旧攻略
- 中一商事回顧DB

## resetBehavior遡及QA進捗

### ホークIII（25φ） — 補完済み

record:
- `docs/real_machine_db/machines/2006-10-15_hawk-iii.md`

- existing `coreStatus=PARTIAL` は維持。
- 25φ通常天井: **ボーナス間978G**。
- 当時グリーンべるとが **設定変更後に無限RT発動** と直接記載。HAZUSE旧機種ページも25φのRT発動契機に設定変更を列挙し照合。
- 設定変更後は978G到達を待たず **朝一から次回ボーナスまで無限RT**。実用上のreset-specific ceilingは0G相当。
- 据え置き時の前日G数/RT状態引継ぎ: `UNVERIFIED_AFTER_RESEARCH`。
- 電源OFF→ONのみのG数/RT状態処理: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時に内部978Gカウンタ自体をclear/retainするか: `UNVERIFIED_AFTER_RESEARCH`。即RTという公開挙動のみ確定。
- 有利区間: `NOT_APPLICABLE`。
- 朝一恩恵: **無限RT from morning until next bonus**。
- 朝一RTは設定変更示唆になり得るが、据え置き/電断時挙動未確定のため一意な変更判別にはしない。ガックン等も未確認。
- 当時記事のRT中ベース105%は純増枚/Gと同義でないため換算しない。
- `resetBehaviorQA=PARTIAL_WITH_CORE_SETTING_CHANGE_INFINITE_RT_CONFIRMED`。

主要出典はレコード本文に保存:
- グリーンべると2006-09-15当時記事
- HAZUSE旧「ホーク3(-30)」
- P_Style777旧解析

## 次回再開地点

### 本線
1. **373件地点から2009-05-25同日群残監査**。
2. 直前handoffで未処理候補だった **`デュエルドラゴンキングダム`** を既存登録有無→具体導入日→性能コア→resetBehaviorの順で再確認。
3. 2009-05-26〜31を境界監査。
4. 未処理がなければ2009-06-01群へ進む。
5. `レキオ2-30` は既収録のため重複追加禁止。

### 遡及resetBehavior QA
1. **ホークIII（25φ）より後**をrepo実ファイルの時系列順に走査。
2. 最初の `resetBehavior` 未補完レコードを選び、性能 `coreStatus` を維持したままv0.7のみ補完。
3. 既にv0.7補完済みの機種は飛ばし、新規本線を止めない。

## 今回の保存

- 373 がんばれゴエモン: `docs/real_machine_db/machines/2009-05-25_ganbare-goemon.md`
- ホークIII（25φ） reset QA: `docs/real_machine_db/machines/2006-10-15_hawk-iii.md`
- 本 `LATEST_HANDOFF.md` を373件地点へ更新。

次回も作業開始時に必ず最新mainのREADME / ミッション / INDEX / LATEST_HANDOFF / 対象既存レコードを再取得し、この引継ぎよりmainが進んでいればGitHub最新mainを優先する。
