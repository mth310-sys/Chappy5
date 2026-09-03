# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **499**
- latestMachineAdded: **幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～**（SNKプレイモア / 2010-07-20）
- latestRecord: `docs/real_machine_db/machines/2010-07-20_bakumatsu-roman-gekka-no-kenshi-gaiden.md`
- chronologicalFrontier: **2010-07-20**
- frontierLatestMachine: **幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- 作業開始時には497「お座敷の茶々」地点だったが、調査中にmainが498「悪魔城ドラキュラII」まで先行更新されたことを検知。競合更新を上書きせず最新mainへ追従した。
- `INDEX.md` は旧地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 498のLATEST_HANDOFF指定候補「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」をrepo検索し未登録を確認して499件目として追加。
- 2010-07-20同日群の主要候補として「悪魔城ドラキュラII」「月華の剣士外伝」を処理済み。

## 499 — 幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～ 要約

- メーカー: **SNKプレイモア**
- 型式名: **ゲッカノケンシ S**（2010年当時資料で確認）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入主値: **2010-07-20**（パチビー明記）
- 世代/タイプ: **5号機 / ノーマルタイプ / 演出用プチRT**
- 機械割: **97.0 / 98.4 / 100.2 / 104.3 / 107.6 / 112.1%**
- BIG合算: **1/297.9 / 1/292.6 / 1/282.5 / 1/270.8 / 1/256.0 / 1/239.2**
- REG: **1/300.6 / 1/295.2 / 1/284.9 / 1/273.1 / 1/258.0 / 1/240.1**
- ボーナス合算: **1/149.6 / 1/146.9 / 1/141.9 / 1/136.0 / 1/128.5 / 1/119.8**
- 50枚ベース（プチRT非考慮）: **34.20 / 34.67 / 35.16 / 35.65 / 36.15 / 36.95G**
- BIG **MAX312枚** / REG **104枚固定**
- 特殊リプレイ後は高確率で**7G間の演出用プチRT**へ移行。
- 出玉はボーナスのみで増加。長期ART/ATではないためART純増値は `NOT_APPLICABLE_NORMAL_TYPE`。
- 通常ゲーム数天井・周期天井・長期ゲーム数モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_NUMBER_UNVERIFIED**

## resetBehavior v0.7 — 月華の剣士外伝

- **設定変更**: 長期天井/周期/ゲーム数モードは確認されない。設定変更時の7GプチRT・呪印/魔道ゾーン演出状態のclear/retainは本機固有の直接資料を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 宵越し対象となるゲーム数天井・長期ART/AT/CZ・ストックは確認されない。7GプチRT/演出途中の保持のみ未確認。
- **電源OFF→ON**: 長期カウンタ対象なし。7GプチRT/演出状態の処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: `NONE_CONFIRMED_AFTER_RESEARCH`。リセット短縮天井も確認なし。
- **モード/状態**: 通常/天国等の長期ゲーム数モードなし。特殊リプレイ契機の7GプチRTは確認済みだが設定変更時初期処理は未確認。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の短縮天井、朝一高確率、ボーナス優遇/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: 型式名・メーカー名とガックン/初期出目/朝一/リセット等まで変えて再探索したが、本機固有の確定判別法は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一関連数値**: 設定変更専用の数値は `NONE_CONFIRMED_AFTER_RESEARCH`。7Gは通常時特殊リプレイ後のプチRT長でありリセット専用数値ではない。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- ジャックと豆の木直後の実在 `resetBehavior` 欠損ファイルを順序保証付きで確定してから補完する。推測でQA進捗を進めない。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### 幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～
- パチビー: `https://www.pachibee.jp/machines/index/210060001`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5997`
- K-Navi ボーナス出現率: `https://p-kn.com/slot/1231/20149/`
- パチマガスロマガ 小役確率・1000円あたりのゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/30/c.php`
- 5号機クロニクル SNKプレイモア: `https://5goki.com/snkplaymore`
- 2010年当時型式資料: `https://pachinko.hatenablog.jp/archive/2010/07`
- グリーンべると: `https://web-greenbelt.jp/00002452/`

## 今回のGitHub更新

- 499 月華の剣士外伝追加: commit `3173ce2d1fceea72454a0615360bc1308109ba58`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 499 / chronologicalFrontier 2010-07-20**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-07-20同日群の最終漏れ監査**を行い、未登録機がなければ2010-07-21〜25を境界監査する。
3. 次の明確な全国導入候補は **2010-07-26「科学忍者隊ガッチャマンGR」（岡崎産業）**。repo重複確認後、未登録なら500件目候補。
4. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実在resetBehavior欠損パス確定から再開。
5. 499の後続QA対象は検定番号、設定変更/単純電源OFF→ON時の7GプチRT・演出状態、ガックン/初期出目等の変更判別のみ。既存性能コアは再調査しない。
