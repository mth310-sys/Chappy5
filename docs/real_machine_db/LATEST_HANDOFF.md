# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **463**
- latestMachineAdded: **青ドン～花火の匠～**（ホール導入2010-03-08 / 納品開始2010-03-07）
- latestRecord: `docs/real_machine_db/machines/2010-03-08_aodon-hanabi-no-takumi.md`
- chronologicalFrontier: **2010-03-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード「パチスロポパイブリッド」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- 開始時正本はrecordCount 462 / chronologicalFrontier 2010-03-08 / latestMachineAdded「パチスロポパイブリッド」。前回チャットの458件地点より他リレーが進んでいたため462件を吸収して継続。
- 2010-03-08同日群の未登録候補「青ドン～花火の匠～」をrepo検索し未登録を確認して463件目へ追加。

## 463 — 青ドン～花火の匠～ 要約

- メーカー: **エレコ / ユニバーサルエンターテインメント**
- 正式型式: **アオドンハナビノタクミX**
- 検定番号: **9S1022**
- 導入: **2010-03-08**をホール導入主値。グリーンべると/HAZUSEは2010-03-07納品・導入開始表記。メーカー公式は2010年3月発売。
- 世代: **5号機**
- タイプ: **ノーマルAタイプ / ボーナス主体 + 救済天井RT**
- 機械割（旧パチマガシミュレート）: **98.44 / 99.53 / 102.17 / 105.37 / 108.65 / 113.35%**
- BIG: **1/297.89 → 1/240.94**
- REG: **1/431.16 → 1/297.89**
- 合算: **1/176.17 → 1/133.20**
- 50枚ベース: **35.53 / 35.54 / 35.86 / 36.55 / 37.27 / 37.96G**
- BIG: **約320枚 / 最大336枚**
- REG: **約104枚**
- 救済天井RT: **BIG後1000G / REG後800G**で突入し、次回ボーナスまで継続。
- 後年5号機クロニクルの機械割98.5〜112.6%、導入2009年11月、BIG最大415枚は他資料と不整合が大きく、混同疑いとしてCONFLICT分離。

## resetBehavior v0.7 — 青ドン～花火の匠～

- **設定変更**: `PARTIAL_CONFIRMED_LOW_CONFIDENCE`。旧パチマガに「攻め時・ヤメ時・設定変更時」項目の存在は確認できたが本文を直接回収できず。後年低信頼回顧資料には天井回転数を設定変更後も引継ぐとの記述あり。
- **据え置き/朝一**: `PARTIAL_CONFIRMED`。K-Naviが明示的に「宵越アリ」と分類。前日ゲーム数を利用した朝一天井狙いが成立する挙動は確認。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。設定変更と区別した本機固有本文を確定できず。
- **gameCounterReset**: `PARTIAL_CONFIRMED_CARRYOVER`。朝一宵越し可能は確認。設定変更後の引継ぎは低信頼補助資料止まりなので完全確定に格上げしない。
- **ceilingAfterReset**: 通常天井BIG後1000G / REG後800G。設定変更専用短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **modeAfterReset**: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。朝一専用内部モードなし。ドンちゃん/クラシックは演出選択で内部モード扱いしない。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。天井RT中/直前の設定変更・電断処理は確定できず。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 宵越し天井狙い価値を `PARTIAL_CONFIRMED_CARRYOVER_VALUE`。設定変更専用追加恩恵はなし確認。
- **不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、液晶、ランプまで検索語変更済み。
- **公開朝一数値**: 通常天井BIG後1000G / REG後800Gのみ。リセット専用モード振分・当選率・恩恵率は確認なし。

## 主要出典（取得日 2026-09-03）

- ユニバーサルエンターテインメント公式: `https://www.universal-777.com/product/slot/aodon_takumi/`
- グリーンべると: `https://web-greenbelt.jp/00002535/`
- ALL7 2010年3月導入一覧: `https://www.all7.jp/plans/index/2010/03/10`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0029/`
- K-Navi: `https://p-kn.com/slot/1172/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5691`
- パチマガスロマガ旧解析 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/a.php`
- パチマガスロマガ旧解析 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/c.php`
- パチマガスロマガ旧解析 ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/h.php`
- パチマガスロマガ旧解析トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/eleco_slot_80.php`
- 5号機クロニクル（CONFLICT補助）: `https://5goki.com/universal`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線前進を止めず、次の遡及QA対象はスロ原人直後の実ファイル順で最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 463 / chronologicalFrontier 2010-03-08**。最新追加は「青ドン～花火の匠～」。
2. **2010-03-08同日群を継続監査**。次の最優先未登録候補は **「パチスロまことちゃん」（ヤーマ）**。追加前に最新mainで重複確認し、性能コア＋resetBehavior v0.7を横断収集する。
3. 当時スケジュールの **「哲也 新宿VS上野天涯孤独DX」** は、既存457「哲也 新宿VS上野DX」/型式「哲也DX2」と同一機・別表記/別スペックの可能性を先に照合し、重複なら新規追加しない。別型式・別スペックと確定した場合のみ独立レコード化する。
4. 2010-03-08同日群を閉じたら、次の具体日 **2010-03-15「満福箱」（メテオ/ラスター）** へ進む。当時スケジュールでは3月14日納品・3月15日導入。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。現時点では4月側を優勢とし、4月境界で再確認する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
