# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは362件地点 `もっと楽シーサー25Φ`。既存362件を再追加せず、HANDOFF指定どおり30Φ全国/沖縄の独立スペックを監査。
- SANKYO公式で25Φ、30Φ全国、30Φ沖縄がゲーム性・ボーナス確率の異なる3スペックとして明確に分離されているため、30Φを独立レコード対象と確定。
- **今回 363「もっと楽シーサー30Φ全国バージョン」を追加。既存363件の再追加禁止。**

## 363. もっと楽シーサー30Φ全国バージョン

record:
- `docs/real_machine_db/machines/2009-05-07_motto-tanoshisa-30-zenkoku.md`

要点:
- manufacturer: SANKYO
- formalModelName: `もっと楽シーサー30N`
- inspectionNumber: `8S0919`
- releaseDate: **2009-05-07**。ハズセ全国版固有ページの導入開始日を主値。SANKYO公式は2009.05。グリーンべるとにはシリーズ記事中「納品は5月6日から」があるが、25Φ説明直後の文で30Φ各仕様への直接適用が明確でないため、推測で5/6へ遡らせない。
- generation: 5号機
- systemType: **ノーマル / 完全告知 / 30Φ / ボーナス主体**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: **95.3 / 97.3 / 99.4 / 102.2 / 106.5 / 111.5%**。P-WORLD、ハズセ、pacnkで一致。
- BIG: **1/307 / 1/296 / 1/286 / 1/273 / 1/258 / 1/236**。
- CB: **1/319 / 1/307 / 1/296 / 1/282 / 1/266 / 1/242**。
- 合算: **1/156.4 / 1/150.7 / 1/145.5 / 1/138.7 / 1/131.0 / 1/119.5**。SANKYO公式丸め値と整合。
- BIG約312枚、CB約104枚。
- **25Φと異なり777G天井RTは非搭載**。P-WORLDが全国30Φは天井RTなしと明記。通常時はボーナスのみで出玉を増やす。
- 50枚ベースは、30N/全国Ver/全国バージョンと「50枚/1000円/ベース/コイン持ち/小役」を組み替えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガ現存ページも1000円あたりゲーム数を「現在調査中」としているため推測採用しない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のリール初期挙動・ランプ等の全国30Φ固有処理を直接確認できず。
- carryOverBehavior: `NOT_APPLICABLE_TO_GAME_COUNT_OR_PUBLISHED_MODE`。ゲーム数天井・ゲーム数管理・公開通常モードは確認されない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時のリール/告知ランプ等の固有挙動を確定できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。25Φの777G天井RTを全国30Φへ流用しない。
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM`。
- stateAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_GAMEPLAY_STATE`。朝一狙いに影響する高確/低確等の公開状態は確認されない。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、初期出目、告知ランプ等の設定変更判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: normalCeiling=`NOT_APPLICABLE`、resetSpecificCeiling=`NOT_APPLICABLE`、朝一当選率/恩恵率=`NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- SANKYO / 「もっと楽シーサー」の機種詳細 — OFFICIAL
  - https://www.sankyo-fever.jp/collection/536/
- グリーンべると / 全てがパワーアップ！『もっと楽シーサー』 — INDUSTRY
  - https://web-greenbelt.jp/00003039/
- P-WORLD / もっと楽シーサー30Φ全国バージョン — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5502
- ハズセ / もっと楽シーサー30φ(全国ver.) — OLD_ANALYSIS_DATABASE
  - https://hazuse.com/machine/pachislot/8S0919/
- pacnk / もっと楽シーサー30Φ全国バージョン — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_mottotanocsazenkokuv.html
- パチマガスロマガ / もっと楽シーサー30 全国Ver — OLD_ANALYSIS_INDEX/HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/17/sankyo_slot_17.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/17/c.php

commit:
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`

## 2009年5月初頭 境界監査

- 362 もっと楽シーサー25Φの後、SANKYO公式により30Φ全国/沖縄が独立スペックであることを確定。
- 全国版はハズセで具体導入日2009-05-07を確認したため363へ追加。
- 30Φ沖縄バージョンはSANKYO公式で型式 `もっと楽シーサー30S`、P-WORLDで検定番号 `8S1160`、2009年5月導入、BIG 1/309〜1/234、CB 1/496〜1/356、合算1/190.4〜1/141.2、機械割94.4〜109.7%、BIG約312枚/CB約130枚、**天井RTなし**まで先行確認済み。ただし今回の検索では沖縄版固有の具体日をまだ安全に確定できていないため、363より前後へ推測挿入しない。
- 30Φ沖縄版の具体納品/導入日を表記・型式30S・検定8S1160・当時業界/古いDBで再監査し、全国版と同日または直後と確定できれば364へ追加する。
- 30Φ群を閉じた後、2009-05-07前後の `タイムリミット` 等を時系列監査する。
- `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、現時点では5月1日へ挿入せず2009年6月境界で再監査する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準363件地点。既存363件の再追加禁止。**
2. **まず `もっと楽シーサー30Φ沖縄バージョン` の具体納品/導入日を再探索する。独立スペックであること自体は公式確定済み。時系列位置を確定できた場合、364件目へ追加する。**
3. 沖縄版先行候補値: 型式 `もっと楽シーサー30S`、検定 `8S1160`、BIG 1/309→1/234、CB 1/496→1/356、合算1/190.4→1/141.2、機械割94.4→109.7%、BIG約312枚、CB約130枚、天井RTなし。必ず次回再取得・再照合してから採用する。
4. 30Φ群を閉じた後、2009-05-07前後の `タイムリミット` など同日群へ進む。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`
- 360 プリティ戦記: `a834bd17236dc67a52086fa0c7a7f4941080972a`
- 361 国際サラリーマンとおるくん: `f8a9510d08507ee4c2ab86600a3997a92b6f4903`
- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`
