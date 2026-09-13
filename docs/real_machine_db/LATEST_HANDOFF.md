更新日: 2026-09-13

## 現在地点
- recordCount: **1557**
- latestRecordAdded: **スマスロ北斗の拳 — No.1557**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-04-03_smaslo-hokuto-no-ken.md`
- chronologicalFrontier: **2023-04-03**
- frontierLatestMachine: **スマスロ北斗の拳 — No.1557**
- schema: **resetBehavior v0.7**
- status: **2023-04-03_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED / NEXT_2023-04-17_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1556 `スロドル` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 直前handoffはNo.1556 / 2023-03-20群CLOSED。次の未処理として2023-04-03群をPB・別型式・地域先行・延期/段階導入を含めて再監査。
- 一撃2023年4月新台スケジュールでは2023-04-03のパチスロ新台は `スマスロ北斗の拳` 1機のみ。P-WORLD、業界記事、北斗公式でも4/3導入を照合したため2023-04-03群をCLOSED。
- No.1557 `スマスロ北斗の拳` を性能コア + resetBehavior v0.7で追加。

## No.1557 — スマスロ北斗の拳
- manufacturer: **サミー（製造: タイヨーエレック）**
- formalModel: **L パチスロ北斗の拳AD XR**
- inspectionCode: **2S1502**
- releaseDate: **2023-04-03**
- generation/system: **6.5号機 / スマスロAT / 継続率管理BATTLE BONUS**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate: **98.0 / 98.9 / 105.7 / 110.0 / 113.0%**
- BATTLE BONUS初当り: **1/383.4 / 1/370.5 / 1/297.8 / 1/258.7 / 1/235.1**
- 北斗揃い: **1/7274.0（全設定共通）**
- baseGamesPer50: **約34.7G/50枚**
- netIncrease: **約4.1枚/G（小役パート）**
- basicPayout: **1セット約110枚 / 基礎継続率66・79・84・89% / 無想転生バトル平均約94%ループ**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION**

### resetBehavior v0.7 — No.1557
- 設定変更: **有利区間・天井・モード・内部状態RESET**。
- 据え置き: **有利区間・天井・モード・内部状態CARRY_OVER**。
- 純電源OFF→ON: **有利区間・天井・モード・内部状態CARRY_OVER**を複数解析で確認。
- 通常天井 **1268G+α** → 設定変更時 **800G+α**へ短縮。
- 通常時300G / 777G / 800Gに天井短縮抽選あり。設定変更後800Gは短縮当選濃厚扱い。
- 設定変更後モード振り分け:
  - 設定1: 地獄48.73 / 通常33.07 / 天国17.57 / 本前兆0.63%
  - 設定2: 47.59 / 33.45 / 18.32 / 0.64%
  - 設定4: 39.15 / 36.32 / 23.47 / 1.07%
  - 設定5: 34.95 / 37.78 / 26.07 / 1.20%
  - 設定6: 30.01 / 40.75 / 27.92 / 1.32%
- 朝一開始ステージは高信頼解析で **シン/サウザー/ジャギ各33.3%**。内部モードとは一致しない。
- 本機はスマスロのためガックンしないとする複数解析あり。見た目だけの確定変更判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。
- CONFLICT: 朝一開始ステージについて、なな徹/パチマガスロマガ系は各33.3%再抽選、一部後年まとめは「ステージ引き継ぎ」。前者をcanonical、後者を `CONFLICT_DISPLAY_STAGE_DESCRIPTION` として保持。

## 2023-04-03群 — CLOSED 1/1
1. スマスロ北斗の拳 — No.1557

## 次導入境界 — 2023-04-17
- 現時点のknown:
  1. **アナザーゴッドハーデス-解き放たれし槍撃ver.-**（ミズホ / 型式候補 `S/アナザーゴッドハーデス/SL`）
  2. **Lゴブリンスレイヤー**（オレンジ）
- 次回は2023-04-17群をPB・別型式・地域先行・延期/段階導入まで再監査して正式キューを確定し、No.1558から時系列継続する。

## resetBehavior 遡及QA
- 本線の新規機種収集を優先して継続。
- 既存QA再開候補は前handoffどおり `2007-06-25_morning-musume.md` の安全な全文更新可否確認後、`2007-07-08_caribbean-queen.md`。
- 既存性能値は再収集せず、resetBehaviorのみ必要時に遡及補完する。

## 今回の主要資料
### No.1557 スマスロ北斗の拳
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9786
- 遊技日本/P-WORLD販売発表: https://news.p-world.co.jp/articles/22776
- グリーンべると/P-WORLD正式発表: https://news.p-world.co.jp/articles/22756/greenbelt
- 北斗の拳公式: https://hokuto-no-ken.jp/3340
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/514/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/514/13776/
- パチマガスロマガ 設定変更時モード抽選: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/203/tj09.php
- 一撃 天井/朝一: https://1geki.jp/slot/s_sma_hokutonoken/3/
- Altema 朝一: https://altema.jp/pachimo/lhokutoasaiti

### 境界監査
- 一撃 2023年4月新台スケジュール: https://1geki.jp/newmachinecalender/202304/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9786

## 保存コミット
- No.1557追加: `9456d31a6f45ffc529665231d440815119564ee6`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1558候補 `アナザーゴッドハーデス-解き放たれし槍撃ver.-`（2023-04-17）から継続。最初に2023-04-17群のPB・別型式・地域先行・延期/段階導入を再監査し、同日knownの `Lゴブリンスレイヤー` を含め順番を確定する。各機種で正式型式・検定番号、性能コア、resetBehavior v0.7を収集し、欠損は再探索後にのみUNVERIFIED判定する。**
