# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **908**
- latestRecordAdded: **SLOTシャドウハーツII-運命の道標-**（ユニバーサルブロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-24_slot-shadow-hearts2-unmei-no-michishirube.md`
- chronologicalFrontier: **2015-08-24**
- frontierLatestMachine: **SLOTシャドウハーツII-運命の道標-**
- frontierRecord: `docs/real_machine_db/machines/2015-08-24_slot-shadow-hearts2-unmei-no-michishirube.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-24_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.907 `2015-08-17_otome-soul-hikari-to-muzuki.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **907件 / 2015-08-17 / 08-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 08/18～08/23境界は前handoffでCLOSED済みのため、次の未処理候補 **ユニバーサルブロス「SLOTシャドウハーツII-運命の道標-」** がmain未登録であることを確認しNo.908として追加。

## No.908 — SLOTシャドウハーツII-運命の道標-

- record: `docs/real_machine_db/machines/2015-08-24_slot-shadow-hearts2-unmei-no-michishirube.md`
- manufacturer: **ユニバーサルブロス**
- formalModelName: **シャドウハーツII運命の道標SS**
- inspectionNumber: **5S0365**
- systemType: **A+ART / ボーナス+ART**
- canonical releaseDate: **2015-08-24**
- ユニバーサル公式で5号機・ボーナス+ART・2015年8月発売、HAZUSE・当時解析で08-24導入開始を確認。
- 機械割: **97.7 / 99.5 / 102.5 / 106.4 / 110.7 / 115.1%**。
- ボーナス合算: **1/200 / 195 / 200 / 190 / 200 / 165**。
- ART初当たり: **1/499 / 469 / 460 / 377 / 368 / 325**。
- 50枚ベース: **約31.7G**。
- ART純増: **約1.5枚/G**、ボーナス込み **約2.1枚/G**。
- 幻影ボーナス: **102～約104枚（表示差を保持）**、再生の刻102枚、天凱凰BONUS204枚。
- ART「幻影RUSH」: **1セット30G+α**。
- 通常天井: **ボーナス間777G → 50%継続以上ART確定**。

### resetBehavior v0.7

- 設定変更: **777G天井RESET / 内部状態再抽選 / 基本ドンレミ村開始**。
- 据え置き: **天井進捗CARRYOVER**として当時朝一攻略上扱われる。
- 純電源OFF→ON: **天井・内部状態を引継ぎ**。通常時は基本ドンレミ村だが、グレイヴヤード・ART・ボーナス中は引継ぎ。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時内部状態: 設定1～3 **通常75% / 高確25%**、設定4～5 **67% / 33%**、設定6 **60% / 40%**。
- 鍵チャンス目用モード（通常時規定Gモードとは別定義）の設定変更時振り分け: **リセット74.22% / LOW0.39% / MID25.00% / HI0.39%**。
- リセットモード実質鍵チャンス目: **1/122.1**。
- 変更判別: 朝一ドンレミ村以外（グレイヴヤード/ART/ボーナス状態等）なら据え置き濃厚とする当時解析。高確示唆は設定推測補助で変更確定ではない。本機固有ガックンは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflicts / definition separation

- 幻影ボーナス獲得表記: P-WORLD **102枚** / パチマガスロマガ **約104枚**。平均せず両方保持。
- 純増: ART単体 **約1.5枚/G** / ボーナス込み **約2.1枚/G** は定義差として分離。
- ART初当たり1/499～1/325と、通常時ART直撃（天井救済含む）1/1681.1～1/749.4は定義が異なるため混同しない。

## 2015-08-24群 — OPEN

処理済み:
1. **SLOTシャドウハーツII-運命の道標-** — ユニバーサルブロス — No.908。

次の強い未処理候補:
1. **スカイガールズ ～ゼロ、ふたたび～** — 高砂電器産業 — 2015-08-24。
   - KONAMI公式機種アーカイブ: 2015年8月稼働開始。
   - KONAMI公式系当時ブログ: **2015年8月24日をスタートに順次全国ホール登場予定**。
   - HAZUSE: 型式 **スカイガールズ2RA** / 検定 **5S0360** / 導入開始 **2015-08-24**。
2. 上記処理後、08/24群をK-Navi / HAZUSE / メーカー・業界記事 / P-WORLD系年表 / 当時攻略で全メーカー横断再監査する。候補2機だけと決め打ちしない。

## 次回再開地点

1. **recordCount 908 / chronologicalFrontier 2015-08-24 / 08-24_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.908を再確認。
3. 次は **高砂電器産業「スカイガールズ ～ゼロ、ふたたび～」**。main未登録確認後、性能コア + resetBehavior v0.7を本機固有資料で収集する。
4. 同機追加後、08/24群を全メーカー横断監査し、追加未処理機がない場合のみCLOSED判定する。
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

### No.908 SLOTシャドウハーツII-運命の道標-
- ユニバーサル公式: https://www.universal-777.com/product/slot/shadowhearts2_unmei/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0365/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/10311/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/02/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7788
- パチ＆スロ必勝本 鍵チャンス目: https://p.hisshobon.jp/machine/2617/1/53896
- パチ＆スロ必勝本 ART抽選: https://p.hisshobon.jp/machine/2617/1/54160

### 次候補 スカイガールズ ～ゼロ、ふたたび～
- KONAMI公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2015/skygirls2/
- KONAMI公式系当時ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
- HAZUSE: https://hazuse.com/machine/pachislot/5S0360/
