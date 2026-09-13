更新日: 2026-09-14

## 現在地点
- recordCount: **1636**
- latestRecordAdded: **忍魂参 ～奥義皆伝ノ章～ — No.1636**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-18_shinobidamashii3-ougi-kaiden-no-sho.md`
- chronologicalFrontier: **2024-03-18**
- frontierLatestMachine: **忍魂参 ～奥義皆伝ノ章～ — No.1636**
- schema: **resetBehavior v0.7**
- status: **2024-03-18_BOUNDARY_OPEN_2_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1635 `スマート沖スロ ドラゴンハナハナ～閃光～` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 最新handoffがNo.1635まで進んでいたため、前回会話上の古い地点ではなく、指定キューの次未処理No.1636候補 `忍魂参 ～奥義皆伝ノ章～` から継続。
- 性能コア、CZ確率、天井、resetBehavior v0.7を複数系統資料で照合。純電断単独契約・周期カウンター/CZ間周期回数・ガックンは根拠強度を分け、推測で埋めずUNVERIFIEDを残した。

## No.1636 — 忍魂参 ～奥義皆伝ノ章～
- path: `docs/real_machine_db/machines/2024-03-18_shinobidamashii3-ougi-kaiden-no-sho.md`
- manufacturer: **大都技研**
- formalModel: **L忍魂参～奥義皆伝ノ章～A3**
- inspectionCode: **3S1553**
- releaseDate: **2024-03-18**
- generation: **6号機 / スマスロ**
- systemType: **AT / 周期抽選 + CZ / ゲーム数上乗せAT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 99.1 / 101.4 / 105.5 / 108.5 / 112.0%**
- AT初当り: **1/368.7 / 1/362.9 / 1/352.4 / 1/334.4 / 1/318.1 / 1/305.0**
- CZ: **1/147.0 / 1/145.7 / 1/143.1 / 1/138.6 / 1/133.7 / 1/132.0**
- base: **約34.0G/50枚**
- 純増: **月光ノ刻 約2.0枚/G / 神速ノ刻・真神速ノ刻 約4.5枚/G**
- AT基本性能: **月光ノ刻 初回50G+α**
- 疑似BIG: **約100枚**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1636 resetBehavior v0.7
- setting change: **有利区間RESET / AT間天井RESET / 内部状態RESET。通常979G+αのAT間天井が579G+αへ短縮。**
- carry over: **有利区間・AT間天井・内部状態CARRY_OVER。**
- power OFF→ON: **後年攻略整理では有利区間・天井・内部モードCARRY_OVER。ただし主要解析による純電断単独の直接裏取りが弱いためANALYSIS_SINGLE扱い。周期表示/内部状態全般/ガックンはUNVERIFIED_AFTER_RESEARCH。**
- game/ceiling: **通常AT間天井979G+α、設定変更後579G+α。CZ間4周期スルー後、5周期目CZ当選濃厚。**
- mode/state: **設定変更で内部状態RESET、据え置きでCARRY_OVER。設定変更専用モード振り分け公開値は確認できずPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER。有利区間ランプ判別不可。純電断CARRY_OVERは補助資料のみのためANALYSIS_SINGLE。**
- morning benefit: **AT間天井が979G+α→579G+αへ400G短縮。これ以外の設定変更専用AT/CZ当選率やモード振り分け固定値は確認できず。**
- reset detection: **有利区間ランプでは不可。朝一579G+αを超えてAT非当選なら据え置き濃厚材料。本機固有ガックン条件/発生率は再探索後もUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_CYCLE_CYCLE_COUNTER_AND_GACKUN_CONTRACT**

## conflicts / quality notes — No.1636
- 型式表記は `L忍魂参～奥義皆伝ノ章～A3` とHAZUSE旧表示の省略形 `L忍魂~奥義皆伝ノ章~` があるが、検定番号3S1553・機種・導入日が一致するため前者をcanonicalとする。
- 性能コア（AT初当り、CZ確率、機械割、ベース、純増）に実質的な数値競合は今回確認されない。
- 純電源OFF→ON時については二次整理資料でCARRY_OVERが示されるが、設定変更/据え置き比較を明記するなな徹機種専用ページでは純電断単独まで直接記載しないため、信頼度を分離して保存。

## 2024-03-18境界 — OPEN 2/4 known candidates
1. スマート沖スロ ドラゴンハナハナ～閃光～ — No.1635 DONE
2. 忍魂参 ～奥義皆伝ノ章～ — No.1636 DONE
3. SLOT忍者じゃじゃ丸くん — NEXT
4. ドラゴンハナハナ～閃光～ — PENDING / 25φ・30φ・既存レコード関係を再監査してから新規No.確定

境界監査メモ:
- 直前handoffのHAZUSE 2024年3月一覧・複数導入資料に基づく4候補キューを継続。
- No.1636の2024-03-18導入はAmusement Japan、グリーンべると/P-WORLD、K-Navi、HAZUSEで一致。
- `ドラゴンハナハナ～閃光～` 系は性能共通でも別型式・25φ/30φ/スマスロ・段階導入があるため、既存2023-12-18系レコードとの重複監査を必須とする。

## 次回再開地点
1. 最新mainを再同期し、No.1636と本handoffの反映を再取得確認。
2. **No.1637候補 `SLOT忍者じゃじゃ丸くん` — 2024-03-18** から性能コア + resetBehavior v0.7で処理する。
3. その後 `ドラゴンハナハナ～閃光～` を、既存2023-12-18系レコード・正式型式・25φ/30φ/スマスロ差までmainで再監査し、独立新規機種か既存レコードの段階導入かを確定してからNo.を採番する。
4. PB・別型式・地域先行・延期/段階導入を再監査して2024-03-18群の件数を固定し、CLOSED判定へ進む。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### 忍魂参 ～奥義皆伝ノ章～
- 大都技研 公式PV: https://www.youtube.com/watch?v=P9VNz58sYr0
- 大都技研 公式解説動画: https://www.youtube.com/watch?v=haAw7lxMqmo
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10004121/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/26977/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/3S1553/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/83053/
- パチ&スロ必勝本 システム解説: https://p.hisshobon.jp/vpage/2604/4
- K-Navi: https://p-kn.com/slot/4110/
- なな徹 初当たり/CZ/機械割: https://nana-press.com/kaiseki/machine/714/19644/
- なな徹 CZ「潜入」: https://nana-press.com/kaiseki/machine/714/20090/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/714/20086/
- 一撃 天井/朝一: https://1geki.jp/slot/l_shinodama3_kaiden/3/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/205577/
- ぽこすろっと: https://www.nankaikoya.jp/shinobi3-kitaichi/
- スロパチクエスト（純電断補助）: https://www.slopachi-quest.com/article/lshinobi3-tenjou/
- 回胴に散る。（有利区間後/リセット天井比較補助）: https://kaidou.repop.jp/archives/513

### 境界監査 / 次群
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
- マルっとWAVE 3/18導入一覧: https://marutto-w.com/industry_news/20240307
- K-Navi SLOT忍者じゃじゃ丸くん: https://p-kn.com/slot/4097/
