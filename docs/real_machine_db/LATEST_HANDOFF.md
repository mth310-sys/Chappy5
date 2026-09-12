更新日: 2026-09-12

## 現在地点
- recordCount: **1433**
- latestRecordAdded: **マジカルハロウィン～Trick or Treat！～ — No.1433**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-21_magical-halloween-trick-or-treat.md`
- chronologicalFrontier: **2021-09-21**
- frontierLatestMachine: **マジカルハロウィン～Trick or Treat！～ — No.1433**
- schema: **resetBehavior v0.7**
- status: **2021-09-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1432「HIT128」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1433「マジカルハロウィン～Trick or Treat！～」を追加。
- 2021-09-21群はHIT128 + マジカルハロウィンToTの2機を処理。2021年導入カレンダーと当時業界発表をクロス監査し、既知群をCLOSED。
- 遡及resetBehavior QAは `2007-05_kidou-keisatsu-patlabor-x.md` を処理。既存 `COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- Git追加履歴を追跡し、次の遡及QAカーソルを `2007-05_kemonocchi.md`（けものっち!）へ進めた。

## No.1433 — マジカルハロウィン～Trick or Treat！～
- path: `docs/real_machine_db/machines/2021-09-21_magical-halloween-trick-or-treat.md`
- manufacturer: **コナミアミューズメント（製造元: ファイトクラブ）**
- formalModel: **SマジカルハロウィンFP**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-09-21**
- generation/system: **6.2号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.3 / 98.4 / 100.0 / 103.2 / 105.1 / 107.0%**
- bonusCombined: **1/169.8 / 1/168.0 / 1/166.3 / 1/163.0 / 1/161.4 / 1/159.8**
- ART初当たり: **1/370.0 / 1/365.6 / 1/353.5 / 1/330.9 / 1/303.8 / 1/285.7**
- baseGamesPer50: **解析系33.2〜34.1G/50枚。ただし導入時業界記事の設定1 32.2GとCONFLICT**
- netIncrease: **約1.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_BASE_GAMES_CONFLICT**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_INTERNAL_CZ_START**

### resetBehavior v0.7 — No.1433
- **設定変更**: 333G天井・内部状態・有利区間RESET。内部的にCZ「詠唱チャレンジ」状態から開始。
- **据え置き**: 天井・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態・有利区間CARRY_OVER。
- **ゲーム数/天井**: 通常時333Gで詠唱チャレンジ。設定変更専用の短縮天井は確認できず。
- **モード/状態**: 通常時は内部モード0〜3等を持つが、設定変更専用の確率付き初期振り分けは未確認。朝一変更時は内部CZ開始を直接確認。
- **有利区間**: 6.2号機・3000G。有利区間ランプは通常時基本消灯のため、朝一ランプ単独での変更判別は困難。
- **朝一恩恵**: 内部CZ開始。3択コインこぼし後の6択リプレイ正解でART突入可能。解析では平均10G前後・実質ART突入率1/6以上という説明があるが、固定当選率としては扱わない。
- **朝一不利**: 天井到達時の状態/モード依存追加恩恵は朝一CZには付かないとの解析あり。
- **変更判別**: 朝一ガックン有無、3択コインこぼし後のリール挙動/ART突入を利用可能。ただし個体差・対策・ボーナス先当たりで不確定になるため「濃厚」止まり。
- **公開朝一数値**: 333G天井、内部CZ開始、実質ART突入率1/6以上という解析表現を分離保存。
- **CONFLICT**: 50枚ベースは設定1 33.2G（解析系） vs 32.2G（導入時業界記事）。平均化しない。

## 遡及QA — 機動警察パトレイバーX
- path: `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`
- 性能側: **COMPLETE_CORE維持**。
- reset側: **PARTIAL_RESEARCH_EXHAUSTED**。
- 通常時スイカ契機25G RTの存在は高信頼解析で確認済み。
- 設定変更/据え置き/純電断時の25G RT残G・内部RT状態・成立済みボーナス/告知状態、本機固有ガックン/初期出目判別は、当時解析・P-WORLD・古いDB・回顧資料へ検索語/系統を変えて再探索しても直接契約を固定できず。
- 一般的5号機挙動による推測補完はしていない。

## 2021-09-21群 — CLOSED
1. **HIT128 — No.1432 / DONE**
2. **マジカルハロウィン～Trick or Treat！～ — No.1433 / DONE**
- 2021年導入日カレンダーでは9/21群はこの2機。業界記事でも両機の導入時期を照合し、次の主要導入群は2021-10-04。

## 次回本線の再開地点
- **2021-10-04群 / No.1434候補: ファンキージャグラー2（北電子）**。
- 同日既知キュー: **ファンキージャグラー2 → ツインエンジェルPARTY → タブー・タトゥー → ニューパルサーDX3 → かまいたちの夜**。
- 各機で性能コア＋resetBehavior v0.7を収集し、群末尾でメーカー横断・PB・地域先行・別型式・延期/段階導入を再監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）**。
- カーソル根拠: パトレイバーX追加commit `f405c96c...` の直後に、けものっち!追加commit `fc18d719...` が続くGit追加履歴を確認。

## GitHub保存
- No.1433追加 commit: `e7d9db9b61d79195cde2f99d48bdcfb179d19917`
- パトレイバーX reset QA commit: `a10c0988484be41b7a6a427c876fac7c5974d3d0`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1433 マジカルハロウィン～Trick or Treat！～
- https://prtimes.jp/main/html/rd/p/000000075.000053327.html
- https://news.p-world.co.jp/articles/17264/nippon
- https://web-greenbelt.jp/post-50855/
- https://nana-press.com/kaiseki/machine/144/4998/
- https://nana-press.com/kaiseki/machine/144/5012/
- https://ichikatsu.com/magihallo8/
- https://slotjin.com/slot/magihallotot/
- https://www.pachibee.jp/machines/kouryaku/221080001

### 機動警察パトレイバーX reset QA
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/abilit_slot_16.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/c.php
- https://www.p-world.co.jp/machine/database/4591
- https://pachinko.hatenablog.jp/entry/2007/06/patlabor-X

### 次群境界監査
- https://ichikatsu.com/newslot/
- https://news.p-world.co.jp/articles/18048/greenbelt
