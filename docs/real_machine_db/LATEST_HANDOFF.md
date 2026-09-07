# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **891**
- latestRecordAdded: **パチスロ大工の源さん～桜満開！源DREAM Ver.～**（三洋物産）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-08_daiku-no-gensan-sakura-mankai-gen-dream-ver.md`
- chronologicalFrontier: **2015-06-08**
- frontierLatestMachine: **パチスロ大工の源さん～桜満開！源DREAM Ver.～**
- frontierRecord: `docs/real_machine_db/machines/2015-06-08_daiku-no-gensan-sakura-mankai-gen-dream-ver.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、直前No.890 `2015-06-08_otome-youkai-zakuro.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **890件 / 2015-06-08 / GROUP_OPEN**。
- 旧会話上の進捗ではなく、main実体のLATEST_HANDOFFを優先した。

## No.891 — パチスロ大工の源さん～桜満開！源DREAM Ver.～

- record: `docs/real_machine_db/machines/2015-06-08_daiku-no-gensan-sakura-mankai-gen-dream-ver.md`
- manufacturer: **三洋物産**
- releaseDate canonical: **2015-06-08**
- modelName: **パチスロ大工の源さん桜満開KF**
- inspectionNumber: **4S0800**
- generation: **5号機**
- systemType: **AT / 100G周期管理 / CZ経由 + 直撃**

### 性能コア

- パチマガスロマガ精密PAYOUT: **96.95 / 98.17 / 100.16 / 104.14 / 107.70 / 112.86%**。
- AT初当たり: **1/347.7 / 341.2 / 333.9 / 319.1 / 299.9 / 279.9**。
- 50枚ベース canonical: **約24G/50枚**。別資料に約25Gがあるため平均せず軽微CONFLICT保持。
- AT「源DREAM」: **純増約3.0枚/G、1セット40G+α**。
- 通常時は原則 **1周期100G**。9周期消化でAT非当選なら次遊技でAT、天井ATは山車演武3個ストック。

### resetBehavior v0.7 — 重要

- 本機は例外的に、**設定変更しても内部の天井周期数・周期残りゲーム数を引き継ぐ**とする当時解析が複数一致。
- 据え置きも内部周期進捗を引継ぎ。前日深いハマりを設定変更後も宵越し可能として当時攻略で扱われている。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED**。むしろ前日天井進捗を消さないこと自体が朝一の主要価値。
- 内部状態は設定変更時に再抽選とする後年整理資料があるが、当時高信頼資料で初期振り分け数値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ONは周期進捗・源魂・状態を引継ぐとする整理資料があるが、当時一次/当時解析で完全に独立した表を固定できないため **CARRYOVER_SUPPORTED_SECONDARY / PARTIAL**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetDetection / CONFLICT

- **液晶表示だけは競合を保持**。
- すろぱちくえすと本文・追記は「設定変更時は液晶0G/初期表示」とする一方、当時雑誌情報として「リセットでも液晶ゲーム数・周期数を引継ぐ」とされた痕跡があり、その後実戦報告で誤情報の可能性が指摘されている。
- 後年整理資料は設定変更/電断で周期表示1になるが内部進捗は引継ぐとする。
- したがって **内部天井進捗CARRYOVERは高信頼、液晶表示はCONFLICT** と分離。液晶0G/周期1を変更確定にはしない。
- 本機固有ガックンは十分な再探索後も固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### definition control

- パチマガスロマガ精密PAYOUTとP-WORLD等の丸め値は平均しない。
- 50枚ベース24Gと約25Gも平均しない。
- 「内部周期進捗」と「液晶表示周期/G」を混同しない。
- 源魂5個到達時は100G到達前に昇格チャンスへ進むため、周期数と単純な実ゲーム数換算を完全同一視しない。

## 2015-06-08群監査 — OPEN

処理済み:
1. **吉宗～極～** — 大都技研 — No.888。
2. **デビルサバイバー2 最後の7日間** — オリンピア — No.889。
3. **パチスロ おとめ妖怪ざくろ** — 北電子 — No.890。
4. **パチスロ大工の源さん～桜満開！源DREAM Ver.～** — 三洋物産 — No.891。

同日未処理の強い候補:
1. **パチスロ ガン×ソード** — 高砂電器産業 / TAKASAGO。

- KONAMI公式系「こちらマジハロ情報局」が **2015年6月8日より全国ホール稼働開始**と明記しており、実導入日の強い一次系根拠あり。
- 型式候補は **ガン×ソードDT**。
- 未処理機が残るため **`2015-06-08_GROUP_OPEN`** を維持。

## 次回再開地点

1. **recordCount 891 / chronologicalFrontier 2015-06-08 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.891を再確認。
3. 次の未処理機種 **「パチスロ ガン×ソード」（高砂電器産業 / TAKASAGO）** をNo.892候補として性能コア + resetBehavior v0.7を収集する。
4. ガン×ソード処理後、06/08群を全メーカー横断で最終監査し、追加がなければCLOSED判定して06/09以降へ進む。
5. exact release dateでは検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名とreset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・後継スマスロ機のresetBehaviorを流用しない。
- 内部周期/Gと液晶表示Gを分離する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。

## 主要出典 — 取得日 2026-09-07

### パチスロ大工の源さん～桜満開！源DREAM Ver.～
- K-Navi: https://p-kn.com/slot/2263/
- パチ7天井: https://pachiseven.jp/machines/4492/cutout/78
- P-WORLD: https://www.p-world.co.jp/machine/database/7713
- パチマガスロマガ概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/h.php
- パチマガスロマガゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/l.php
- パチマガスロマガ源魂: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/24/06.php
- 期待値見える化: https://slotjin.com/zone/daikunogensan/
- すろぱちくえすと: https://www.slopachi-quest.com/article/daikuno-gensan/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/daikunogensan-sakuramankai
- クランキーセブン: https://crankyseven.com/daikunogensan-sakura-pc.htm
- 後年整理資料: https://the-onlinecasino.org/jp/queen-gensan-5gouki/

### 次候補 ガン×ソード
- KONAMI公式系 こちらマジハロ情報局: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150623.html
- 当時機種情報: https://pachinko.hatenablog.jp/entry/2015/06/gun-sword
