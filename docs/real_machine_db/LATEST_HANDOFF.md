更新日: 2026-09-08

## 現在地点
- recordCount: **982**
- latestRecordAdded: **コクッチーブラック**（タイヨー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-05-30_kokucchi-black.md`
- chronologicalFrontier: **2016-05-30**
- frontierLatestMachine: **コクッチーブラック**
- schema: **resetBehavior v0.7**
- status: **2016-05-30_GROUP_OPEN_BOUNDARY_AUDIT_REQUIRED**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.980 `2016-05-30_nights2.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点: recordCount 980 / chronologicalFrontier 2016-05-30 / 05-30群OPEN。
- GitHub重複検索後、No.981「めぞん一刻 桜の下で」、No.982「コクッチーブラック」を追加。
- 既存性能値をやり直さず、各新規機種で性能コア + resetBehavior v0.7を同時収集。

## 2016-05-30群 — 現在の登録済み
- No.978 **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
- No.979 **パチスロ 翠星のガルガンティア**（D-light / ディ・ライト）
- No.980 **ナイツ2**（山佐）
- No.981 **めぞん一刻 桜の下で**（オリンピア）
- No.982 **コクッチーブラック**（タイヨー）

## No.981 — めぞん一刻 桜の下で
- manufacturer: **オリンピア**
- releaseDate canonical: **2016-05-30**
- formalModelName: **めぞん一刻桜の下でN／F4**
- certificationNumber: **5S1452**
- generation/system: **5号機 / ノーマルA / A+RT / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.0 / 99.6 / 101.5 / 103.2 / 107.3 / 112.2%**。
- BIG: **1/344.9 / 336.1 / 326.0 / 318.1 / 296.5 / 273.1**。
- REG: **1/532.8 / 512.0 / 496.5 / 481.9 / 445.8 / 409.6**。
- 合算: **1/209.4 / 202.9 / 196.8 / 191.6 / 178.1 / 163.8**。
- 50枚ベース: 設定1→6 **34.5 / 34.8 / 35.3 / 35.8 / 36.5 / 37.3G**。
- BIG最大 **311枚** / REG最大 **155枚**。
- 全ボーナス後に30G RT「ドラマチックTIME」。RTは現状維持型。
- 天井: **非搭載**。

### resetBehavior v0.7
- 天井/ゲーム数モード/朝一天国等: **NOT_APPLICABLE**。
- 設定変更後の赤7BIG時SPエピソード選択率を公開解析から取得:
  - 設定1〜4 **10.0%**
  - 設定5 **25.0%**
  - 設定6 **12.5%**
- 上記は設定変更後に適用される公開数値だが、初当たり恩恵ではなく主に設定推測/演出選択差として扱う。
- 設定変更/据え置き/純電断時の30G RT残ゲーム数・内部RT状態は、本機固有資料を検索語・資料系統変更後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目/ランプによる本機固有の確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### quality / conflicts
- 平和公式年別一覧は「登場年月2016年03月」、業界記事は3/29展示会・5/29納品予定、複数解析は5/30ホール導入。発表/製品登場とホール導入の定義差としてcanonical 5/30。
- RT純増は **0枚/G** と **約0.1枚/G** があるため平均せず `CONFLICT_MINOR_DEFINITION_ROUNDING`。どちらも現状維持型という定性は一致。

## No.982 — コクッチーブラック
- manufacturer: **タイヨー**
- releaseDate canonical: **2016-05-30**
- formalModelName: **コクッチーブラック**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマルA / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割 canonical丸め: **94.9 / 98.6 / 100.9 / 104.7 / 109.4 / 113.5%**。
- pacnk精密: **94.92 / 98.64 / 100.95 / 104.72 / 109.41 / 113.50%**。
- グリーンべると発表の設定6は **113.59%**。平均せず原値保持。
- BIG canonical精密: **1/307.68 / 292.57 / 282.48 / 270.81 / 258.02 / 255.00**。
- REG canonical精密: **1/390.10 / 354.25 / 337.81 / 295.21 / 270.81 / 225.99**。
- 当時解析丸め合算: **約1/172 / 160 / 154 / 141 / 132 / 120**。業界発表端点 **1/172.92〜1/119.81** と概ね整合。
- 50枚ベース: **35.1 / 35.4 / 35.7 / 36.0 / 36.4 / 36.7G**。
- BIG最大 **312枚** / REG最大 **104枚**。
- 天井: **非搭載**。

### resetBehavior v0.7
- ノーマルAで天井・ゲーム数モード・AT/ART状態を持たないため、天井リセット/短縮、朝一モード、CZ優遇は **NOT_APPLICABLE / NONE_CONFIRMED**。
- 設定変更後専用ボーナス率・朝一恩恵数値は再探索でも **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断の成立済みボーナス・告知状態等のエッジ処理は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目/告知ランプによる確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### quality / conflicts
- 後年回顧1資料にBIG/REG別系列（例:設定1 BIG1/293.88・REG1/420.10）がある。pacnk/当時解析系列と平均せず `CONFLICT_RETROSPECTIVE_BONUS_SERIES`。
- 設定6機械割113.5/113.50% vs 業界発表113.59%は原値保持。

## 2016-05-30境界監査 — 重要修正
### パチスロ バルタン星人
- 事前予定資料には **2016-05-30導入予定** があるが、後続のグリーンべると2016-05-30業界記事は **納品開始6月19日予定**、K-Naviは **ホール導入開始2016-06-20** と記録。
- したがって5/30へ前倒し登録せず、**2016-06-20群へDEFER**。
- status: `DEFERRED_TO_2016-06-20_ACTUAL_DELIVERY_AUDIT`。

### 秘宝伝 The Last — 次回境界監査必須
- グリーンべると2016-05-18業界記事は **納品5/29開始予定**。
- ちょんぼりすたは導入日 **2016-06-06（一部5/30）** と記録。
- 全国canonicalを5/30にするか6/6にするかは、次回まず公式/業界/当時ホール導入資料を追加照合して決定する。
- 5/30群はこの日付variant監査が残るため現時点ではCLOSEDにしない。

### ビッグドリーム in ロストアイランド2
- 複数当時解析は **2016-06-06**、K-Naviは **2016-06-20** と日付競合。
- 次回以降、納品/全国導入/地域導入の定義を分離して日付監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_cutie-honey.md**
- retroQaNextInspection: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 982 / chronologicalFrontier 2016-05-30 / 05-30群OPEN_BOUNDARY_AUDIT_REQUIRED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.982を最新mainから再取得。
3. 最優先で **「秘宝伝 The Last」5/30（一部） vs 6/6（全国）** の導入日variantを公式・業界・当時資料で固定。5/30 canonicalなら次の未処理として登録、6/6 canonicalなら5/30群からDEFER。
4. 5/30群を全メーカー横断で再監査し、漏れがなければCLOSED。
5. 次の明確な候補は **2016-06-06群**。`ビッグドリーム in ロストアイランド2` は6/6 vs 6/20競合を先に解決する。
6. **パチスロ バルタン星人**は5/30予定情報を採用せず、6/19納品予定 / 6/20ホール導入を優先して **2016-06-20群で再監査**。
7. **トリプルクラウンG-30** は2016年6月群で具体導入日を再監査。
8. 遡及QAの次対象は **`2006-02-19_heisei-katsuo-densetsu.md`（平成カツヲ伝説）**。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
10. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。
- ノーマルAの成立済みボーナス/表示状態を一般論で推定しない。

## 主要出典 — 取得日 2026-09-08
### No.981 めぞん一刻 桜の下で
- 平和公式: https://www.heiwanet.co.jp/products/pachislot/2016/
- グリーンべると: https://web-greenbelt.jp/00008549/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%82%81%E3%81%9E%E3%82%93%E4%B8%80%E5%88%BB%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- P-WORLD: https://www.p-world.co.jp/machine/database/8017
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/125/a.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/mezon-sakura/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/18800/
- Pachinavi: https://pachinavi.net/machines/maison-ikkoku-sakura/

### No.982 コクッチーブラック
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/8292/greenbelt
- グリーンべると: https://web-greenbelt.jp/00008501/
- 娯楽産業: https://www.goraku-sangyo.com/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%80%8D%E7%99%BA%E8%A1%A8/
- P-WORLD: https://www.p-world.co.jp/machine/database/8015
- ちょんぼりすた: https://chonborista.com/slot/taiyo/19545/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/83/c.php
- pacnk: https://pacnk.com/slot/tools/sh_kokutchiburakku.html
- PiDEA X: https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%80%8D%E7%AC%AC2%E5%BC%BE%E3%82%82%E3%82%AA%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A5%E3%81%9F%E3%81%A3%E3%81%B7%E3%82%8A

### 境界監査
- バルタン星人 グリーンべると: https://web-greenbelt.jp/00008665/
- バルタン星人 K-Navi: https://p-kn.com/slot/2527/
- 秘宝伝 The Last グリーンべると: https://news.p-world.co.jp/articles/8375/greenbelt
- 秘宝伝 The Last ちょんぼりすた: https://chonborista.com/slot/daito-slot/20454/
- ビッグドリーム in ロストアイランド2 解析: https://slotkaku.com/lostisland2
- ビッグドリーム in ロストアイランド2 K-Navi: https://p-kn.com/slot/2493/
