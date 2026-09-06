# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **813**
- latestRecordAdded: **緑ドンVIVA2**（エレコ）— 2014-04-21
- latestRecord: `docs/real_machine_db/machines/2014-04-21_midoridon-viva2.md`
- chronologicalFrontier: **2014-04-21**
- frontierLatestMachine: **緑ドンVIVA2**
- schema: **resetBehavior v0.7**
- status: **2014-04-21_GROUP_OPEN / MIDORIDON_VIVA2_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-04-21_magic-monster3-bucchigiri-makai-grand-prix.md` を再読して正本化。
- 作業開始時の正本は **812件 / 2014-04-21 マジックモンスター3 ぶっちぎり!魔界グランプリ / 04-21_GROUP_OPEN**。
- INDEXは旧19件集約のままなので、README規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- K-Navi 2014年4月全国一斉導入カレンダーで04/21群は **喧嘩祭 / マジックモンスター3 ぶっちぎり!魔界グランプリ / 緑ドンVIVA2 / ニューペガサス** の4機。
- 3機目の **緑ドンVIVA2** を813件目として追加。同日群は引き続きOPEN。

## 今回追加 — 緑ドンVIVA2

### identity / 性能コア

- manufacturer: **エレコ**。
- hall start: **2014-04-21**（K-Navi全国一斉導入開始日）。ユニバーサル公式は2014年4月発売。
- formalModelName: **緑ドンVIVA2MR**（実機流通資料。メーカー一次型式資料未取得のため留保）。
- generation/system: **5号機 / 疑似ボーナス+ART / CZ / ゲーム数上乗せ**。
- payout: **97.4 / 98.7 / 101.7 / 106.4 / 111.6 / 119.3%**。
- 疑似ボーナス合算: **1/265.0 / 262.9 / 250.0 / 241.8 / 231.5 / 220.8**。
- ART「アマゾンゲーム」初当たり: **1/617.5 / 599.0 / 566.1 / 506.1 / 476.0 / 404.7**。
- baseGamesPer50: **約30.0G/1000円**。旧パチマガスロマガ小役解析の直接値を取得。
- netIncrease: **約2.4枚/G**。公式・業界・複数解析で一致。
- BB: **60G / 約150枚**、葉月ボーナス: **平均20G / 約50枚**、XBB: **約150枚+α**。
- ART「アマゾンゲーム」: **1セット50G+α**、初当たり時は必ずX-RUSH経由。
- 第一天井: **疑似ボーナス間900G → CZビリゲゾーン確定**。
- 第二天井: **疑似ボーナス間1280G → XBB確定**。
- ARTを挟んでもボーナス間天井は継続。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: **天井G RESET / 内部状態再抽選 / CZテーブル再抽選 / 液晶ドンちゃんステージ**を当時解析から直接確認。
- carryOverBehavior: 純据え置き時の天井G・内部状態・CZテーブル保持契約は、検索語・資料系統変更後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更時RESETからの自動推定はしない。
- powerCycleBehavior: **電源OFF→ONのみでも液晶ドンちゃんステージ**は直接確認。天井G・内部状態・CZテーブルの保持/再抽選は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更 **RESET_CONFIRMED**（900G/1280G）。据え置き・電源OFF→ONのみは **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用の固定短縮天井 **NONE_CONFIRMED_AFTER_RESEARCH**。通常900G/1280Gをリセット専用値とは扱わない。
- modeAfterReset: **CZビリゲゾーン抽選テーブルを設定変更時に再抽選**。全設定共通の公開振り分けを取得。
- stateAfterReset: **内部状態再抽選 CONFIRMED**。通常/高確A/B等の具体的朝一状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: テーブル/内部状態再抽選による上振れ余地はあるが、当時朝一102件実践値では目立つ初当たり上昇なし。専用短縮天井・確定CZ等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 前日ハマリ台は設定変更でボーナス間天井G進捗を失う。
- resetDetection: 設定変更時も電源OFF→ONのみでも初期液晶はドンちゃんステージなので**初期ステージ単独判別不可**。朝一レア役なしのハナビムラ移行は設定変更濃厚とする当時解析あり。CZ高確候補G数との照合も変更推測材料。ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更後CZテーブル振り分け **T1 29.20 / T2 24.72 / T3 2.75 / T4 9.16 / T5 8.24 / T6 0.92 / T7 9.16 / T8 8.24 / T9 0.92 / T10 3.05 / T11 2.75 / T12 0.31 / T13 0.31 / T14 0.27 / T15 0.03%（全設定共通）**。
- resetBehaviorQA: **PARTIAL_DIRECT_SETTING_CHANGE_CONTRACT_AND_PUBLIC_MORNING_TABLE_CONFIRMED**。

## safeguards / definitions

- P-WORLDの「ボーナス・AT合算 1/185.4〜1/142.9」と、疑似ボーナス単独合算・ART単独初当たりは定義が異なるので平均しない。
- ARTでホールデータカウンターがリセットされる場合と、内部の疑似ボーナス間900G/1280G天井を混同しない。
- 2025年スマスロ `L緑ドン VIVA!情熱南米編 REVIVAL` の有利区間/リセット仕様を2014年VIVA2へ混入しない。
- 前作 `緑ドン VIVA!情熱南米編` のリセット契約を流用しない。

## 2014-04-21群

- 処理済み: **喧嘩祭 / マジックモンスター3 ぶっちぎり!魔界グランプリ / 緑ドンVIVA2**。
- 未処理: **ニューペガサス（エマ）**。
- K-Navi、HAZUSEでニューペガサスの **2014-04-21** 導入を再確認。
- status: **GROUP_OPEN**。

## 遡及 resetBehavior QA

- 次のQAカーソルは **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`** のまま。
- 今回は新規収集キューを優先し、QAカーソル変更なし。

## 次回再開地点

1. **recordCount 813 / chronologicalFrontier 2014-04-21 / 04-21_GROUP_OPEN** から開始。
2. 次の未処理機種は **ニューペガサス（エマ）— 2014-04-21**。
3. ニューペガサス追加後、04/21群をメーカー横断再監査し、漏れがなければ **GROUP_CLOSED**。
4. その後、次の具体的導入日境界へ時系列で進む。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md` から継続。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-06

### 緑ドンVIVA2
- ユニバーサル公式: `https://www.universal-777.com/product/slot/midoridon_viva2/`
- K-Navi: `https://p-kn.com/slot/2023/`
- グリーンべると: `https://web-greenbelt.jp/00000044/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7340`
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/94/a.php`
- パチマガスロマガ 小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/94/c-2.php`
- 期待値見える化 天井/テーブル: `https://slotjin.com/zone/midoridon-viva2/`
- 期待値見える化 朝一リセット: `https://slotjin.com/slot/midoridon-viva2-morning/`
- CrankySeven: `https://crankyseven.com/midoridon-viva-two-pc.htm`
- パチセブン 天井: `https://pachiseven.jp/machines/4127/cutout/78`
- 型式参考: `https://jmty.jp/chiba/sale-toy/article-1ld70m`

### 04-21群 / 次候補
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`
- K-Navi ニューペガサス: `https://p-kn.com/slot/2037/`
- HAZUSE ニューペガサス: `https://hazuse.com/machine/pachislot/3S1253/`
