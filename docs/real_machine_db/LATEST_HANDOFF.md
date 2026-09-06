# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **827**
- latestRecordAdded: **テンパイラッシュ**（パイオニア）— 2014-06-16
- latestRecord: `docs/real_machine_db/machines/2014-06-16_tenpai-rush.md`
- chronologicalFrontier: **2014-06-16**
- frontierLatestMachine: **テンパイラッシュ**
- schema: **resetBehavior v0.7**
- status: **2014-06-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、826件目 `2014-06-16_souten-no-ken-2.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時の正本は **826件 / 2014-06-16 / 06-16_GROUP_OPEN**。
- handoff指定の次候補 **「テンパイラッシュ」（パイオニア）**を827件目として処理。
- 06-16同日群を `2014-06-16 / パチスロ / 導入 / 新台`、パチ7、K-Navi系検索、当時記事で再監査。今回安全に具体日付きで固定できた未処理パチスロはテンパイラッシュ以外に見つからず、**06-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 06-16検索では同日パチンコ機が多数混在するため、本DBへ混入しない。

## 今回追加 — テンパイラッシュ

### identity / 性能コア

- manufacturer: **パイオニア**。
- hall start: **2014-06-16**。パチ7で具体日、パイオニア公式で2014年6月発売、グリーンべるとで6月15日納品予定を確認。
- generation/system: **5号機 / ノーマル / BIG+REG / 25Φ**。
- payoutRate: **97 / 99 / 101 / 103 / 106 / 110%**。
- BIG: **1/289 / 1/280 / 1/270 / 1/261 / 1/250 / 1/239**。
- REG: **1/504 / 1/461 / 1/420 / 1/378 / 1/337 / 1/295**。
- ボーナス合算: **1/184 / 1/174 / 1/164 / 1/154 / 1/143 / 1/132**。
- baseGamesPer50: **約38～39G**。
- BIG: **約300枚**（346枚超払い出し終了）。
- REG: **約100枚**（109枚超払い出し終了）。
- AT/ART非搭載、通常時ゲーム数天井は確認されず。
- formalModelName / inspectionNumber: 表記揺れ・型式/検定検索を行ったが今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**。

## テンパイラッシュ — resetBehavior v0.7

- settingChangeBehavior: 本機固有のリール初期化・成立済みボーナス等を示す直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior / powerCycleBehavior: 天井・AT/ARTモードは非該当。本機固有の電断跨ぎリール/成立ボーナス契約は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING / NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **NOT_APPLICABLE_NO_AT_ART_CZ_GAME_MODE_CONFIRMED**。
- stateAfterReset: 朝一高確等の本機固有状態振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 朝一・設定変更・据え置き・電源OFF ON・ガックン・リールガックンまで再探索したが本機固有契約は **UNVERIFIED_AFTER_RESEARCH**。
- 通常演出として搭載する「スロー / シェイク / リバース / アタック」等の特殊リールアクションを、設定変更ガックンと混同しない。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## 再探索 / safeguards — テンパイラッシュ

- `テンパイラッシュ / パイオニア / 2014 / 型式名 / 検定番号` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 短縮 / モード / 状態 / ガックン / リールガックン / 50枚 / 1000円` を組み合わせて再探索。
- パイオニア公式、グリーンべると、P-WORLD、パチマガスロマガ旧攻略、パチ7、pacnk、中古実機資料を横断。
- ノーマル機の非該当項目を、他機種の一般論で推測補完していない。

## 2014-06-16群 / 次候補

- 2014-06-16群は **パチスロ蒼天の拳2 / テンパイラッシュ**まで処理済み。
- 同日群横断再監査で新たな具体日付き未処理パチスロを今回固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH**。
- 次回は **2014-06-17～06-22境界監査**を行い、漏れがなければ **2014-06-23同日群を全メーカー横断で洗い出す**。
- 06-23は検索結果に記事公開日・検定日が混入しやすいため、必ず「ホール導入開始日」と区別する。

## 遡及 resetBehavior QA

- 直前handoffからQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`。
- 新規時系列収集を止めず、余力のあるリレーで既存PARTIALへv0.7を遡及する。

## 次回再開地点

1. **recordCount 827 / chronologicalFrontier 2014-06-16 / 06-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 827件目を再確認。
3. **2014-06-17～06-22境界監査**。
4. 漏れがなければ **2014-06-23同日群をK-Navi / パチ7 / HAZUSE / P-WORLD / 当時業界資料で全メーカー横断監査**し、最初の未処理機種を828件目として処理。
5. 遡及QAは `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### テンパイラッシュ
- パイオニア公式 2014年製品一覧: `https://www.slot-pioneer.co.jp/products/2014.html`
- パイオニア公式: `https://www.slot-pioneer.co.jp/product/tenpairush/`
- グリーンべると: `https://web-greenbelt.jp/00006883/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7413`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/110/a.php`
- パチマガスロマガ 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/110/c.php`
- pacnk: `https://pacnk.com/slot/2014/tenpairush/top.php`
- パチ7: `https://pachiseven.jp/machines/4141/cutout/92`
