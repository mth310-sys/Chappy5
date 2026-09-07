# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **909**
- latestRecordAdded: **スカイガールズ ～ゼロ、ふたたび～**（高砂電器産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-24_skygirls-zero-futatabi.md`
- chronologicalFrontier: **2015-08-24**
- frontierLatestMachine: **スカイガールズ ～ゼロ、ふたたび～**
- frontierRecord: `docs/real_machine_db/machines/2015-08-24_skygirls-zero-futatabi.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.908 `2015-08-24_slot-shadow-hearts2-unmei-no-michishirube.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **908件 / 2015-08-24 / 08-24_GROUP_OPEN**。
- 次の未処理候補「スカイガールズ ～ゼロ、ふたたび～」を調査中、mainへ先行レコードが追加されたため重複作成せず、その実レコードをNo.909として同期した。
- 08/24群を当時導入一覧、HAZUSE、メーカー/公式系告知、業界記事、後年年表で再監査。現時点で同日未登録5号機を追加固定できず、**08-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.909 — スカイガールズ ～ゼロ、ふたたび～

- record: `docs/real_machine_db/machines/2015-08-24_skygirls-zero-futatabi.md`
- manufacturer: **高砂電器産業（TAKASAGO / KPE系）**
- formalModelName: **スカイガールズ2RA**
- inspectionNumber: **5S0360**
- systemType: **A+ART / ボーナス+ART**
- canonical releaseDate: **2015-08-24**
- KONAMI公式アーカイブは2015年8月稼働開始、公式系当時ブログは2015-08-24開始、HAZUSEも08-24導入開始で一致。
- 機械割: **96.8 / 97.5 / 99.7 / 104.1 / 107.0 / 118.7%**。
- ボーナス合算: **1/268.6 / 262.1 / 256.0 / 244.5 / 237.5 / 227.6**。
- ART初当たり: **1/573.6 / 547.6 / 490.7 / 429.0 / 389.8 / 353.2**。
- 50枚ベース: **32.5G**（ANALYSIS_SINGLE）。
- ART純増: **約1.5枚/G**、1セット**30G+α**。
- SKY BIG/BIG: **最大210枚**、REG: **約56枚**。
- 通常天井: **ボーナス間995G → ART確定 + ライジングモード優遇**。

### resetBehavior v0.7

- 設定変更: **995G天井カウンタRESET / 内部状態再抽選 / 横須賀市街地開始 / 設定変更後専用の規定G数ART抽選が有効**。
- 据え置き: **995G天井進捗CARRYOVER**として朝一攻略上扱われる。設定変更専用664G ART保証は新規発動しない。
- 純電源OFF→ON: **天井・内部状態を引継ぎ**。
- 朝一最大恩恵: **設定変更後は通常間664G以内にART確定**。これは通常995Gボーナス間天井の置換ではなく、別系統のART規定G数保証。
- 通常995G天井はボーナスを引かない限り設定変更後も有効。
- 設定変更時664G保証ARTには**ライジングモード優遇なし**。
- 設定変更時の低確/高確/超高確具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 変更判別: **664G+前兆を超えてART非当選なら据え置き確定**とする当時解析あり。本機固有ガックンは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### numeric reset data / conflict

- すろぱちくえすと（帯別ART当選率表現）: **100～164G 20.00% / 200～264G 2.00% / 400～464G 2.04% / 600～664G 100.00%**。
- ちょんぼりすた（最終振り分け表現）: **20% / 1.6% / 1.6% / 76.8%**。
- 分母/条件定義が異なるため平均せず `RESET_ZONE_DEFINITION_DIFFERENCE` として双方保持。両系統とも **設定変更後664G以内ART確定**は一致。
- 導入時期は公式/HAZUSEの **08-24開始**に対し、後年解析の **09-07（一部8/24）**表記があるため `RELEASE_DATE_REGIONAL_ROLLOUT_DIFFERENCE`。全国導入起点08-24をcanonicalとする。

## 2015-08-24群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **SLOTシャドウハーツII-運命の道標-** — ユニバーサルブロス — No.908。
2. **スカイガールズ ～ゼロ、ふたたび～** — 高砂電器産業 — No.909。

- 08/24同日群を再監査し、現時点で上記以外の未登録5号機を強く固定できずCLOSED。

## 次回再開地点

1. **recordCount 909 / chronologicalFrontier 2015-08-24 / 08-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.909を再確認。
3. **2015-08-25～09-06境界を横断監査**し、地域先行・別日導入・未登録5号機があれば先に処理する。
4. 境界がCLOSEDなら **2015-09-07群**へ進む。強い候補として **パチスロ 北斗の拳 強敵（Sammy）**、**パチスロ聖闘士星矢-女神聖戦-（三洋）** 等を含め全メーカー横断監査し、最初の未処理機種から継続する。候補だけと決め打ちしない。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.909 スカイガールズ ～ゼロ、ふたたび～
- KONAMI公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2015/skygirls2/
- KONAMI公式系当時ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
- KONAMI公式系稼働開始告知: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150825.html
- ニッカンアミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1504631.html
- HAZUSE: https://hazuse.com/machine/pachislot/5S0360/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/09/a.php
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/10358/
- すろぱちくえすと（設定変更/664G）: https://www.slopachi-quest.com/article/sky-girls2-reset/
- すろぱちくえすと（朝一ゾーン）: https://www.slopachi-quest.com/article/skygirls2-resetzone/
- 後年朝一ガックン整理: https://sin-surobi.com/tatimawari/20388/
