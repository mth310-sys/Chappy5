更新日: 2026-09-11

## 現在地点
- recordCount: **1337**
- latestRecordAdded: **パチスロ ファンタシースターオンライン2 — No.1337**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-02-24_pachislot-phantasy-star-online2.md`
- chronologicalFrontier: **2020-02-24**
- frontierLatestMachine: **パチスロ ファンタシースターオンライン2 — No.1337**
- schema: **resetBehavior v0.7**
- status: **2020-02-24_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1335「DIAMOND」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- main上に **No.1336「スロまる」** が既に存在することを確認。handoffのみ未同期だったため重複作成せず引き継いだ。
- No.1336はJPS/ひぐちグループPB `Sオリスロ3AA`。同一型式PBであることを理由に無条件転記せず、スロまる固有ページ・業界一次記事・PB資料を照合済み。天井非搭載ノーマル機としてresetBehaviorの非該当項目を整理し、機種固有ガックン/電断時ボーナス成立状態のみ十分な再探索後UNVERIFIEDとしている。
- 次の未処理 **No.1337「パチスロ ファンタシースターオンライン2」** を追加。
- 2020-02-24群はK-Navi全国一斉導入カレンダーの **DIAMOND / スロまる / パチスロファンタシースターオンライン2** の3機をすべて処理済み。P-Summa等の2020年2月新台一覧とも照合し、同日追加独立機を固定できなかったため群をCLOSEDへ進めた。

## No.1336 — スロまる
- path: `docs/real_machine_db/machines/2020-02-24_slomaru.md`
- manufacturer: **JPS（ジェイピーエス） / ひぐちグループPB**
- formalModel: **Sオリスロ3AA**
- certificationNumber: **9S1375（同一型式）**
- releaseDate canonical: **2020-02-24**（業界一次は2月末九州導入予定）
- generation/system: **6号機 / ノーマル / 完全告知 / 技術介入 / 2段階設定**
- payoutRate: 設定5/6とも **チェリー狙い101% / 完全攻略104%**
- BIG: 設定5 **1/172** / 設定6 **1/218**
- REG: 設定5 **1/437** / 設定6 **1/218**
- 合算: 設定5 **1/124** / 設定6 **1/109**
- base: 設定5 **36.8G / 39.8G**、設定6 **37.6G / 40.8G**（チェリー狙い / 完全攻略）
- BIG: **210枚超払い出し終了 / 実獲得約195枚**
- REG: **105枚超払い出し終了 / 実獲得約104枚**
- 天井: **非搭載**
- resetBehaviorQA: **COMPLETE_NOT_APPLICABLE_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION**

## No.1337 — パチスロ ファンタシースターオンライン2
- path: `docs/real_machine_db/machines/2020-02-24_pachislot-phantasy-star-online2.md`
- manufacturer: **Sammy（製造元: 銀座）**
- formalModel: **S SLOT PSO2 MB**
- certificationNumber: **9S1571**
- releaseDate canonical: **2020-02-24**
- releaseDate conflict: **2020-02-24 / 2020-02-25 / 2020-03-02**
- generation/system: **6号機 / AT / 擬似ボーナス連チャン / 集中モード**
- payoutRate: **98.0 / 99.2 / 100.6 / 104.2 / 107.3 / 109.0%**
- BONUS初当り: **1/263.3 / 1/244.9 / 1/227.8 / 1/198.2 / 1/180.7 / 1/167.1**
- base: **約32.9G/50枚**
- netIncrease: **約5.8枚/G**
- BIG: **約200枚**
- REG: **約75枚**
- 通常天井: **最大800G+前兆 → BIG**

### resetBehavior v0.7 — No.1337
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_ANALYSIS_SINGLE_DETECTION**
- settingChangeBehavior: 天井RESET、内部状態RESET。設定変更後は **350G+前兆** に天井短縮。
- carryOverBehavior: 据え置きでは前日の天井進行・内部状態を引き継ぐ整理。
- powerCycleBehavior: 純電源OFF→ONでは **天井G数・内部状態CARRY_OVER** とする後発当時解析あり。
- gameCounterReset: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- ceilingAfterReset: **最大800G+前兆 → 350G+前兆**。天井恩恵BIG。
- modeAfterReset: 通常時複数モードは確認済みだが、設定変更時専用モード振り分けは十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: 設定変更RESET / 据え置き・純電断CARRY_OVER扱い。通常時は有利区間ランプ基本点灯とする当時攻略を根拠にする。
- resetBenefits: **350G+前兆への短縮天井**。
- resetDetection: **朝一有利区間ランプ点灯=据え置き濃厚 / 非点灯=設定変更濃厚**。ホール対策の可能性があるため確定扱いしない。
- publicMorningNumbers: 通常最大800G+前兆、設定変更後350G+前兆。設定変更専用モード振り分け/朝一専用当選率は公開確定値を固定できず。
- ガックン: 本機固有発生条件/率は検索語・資料系統変更後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1337 品質注記 / CONFLICT
- 導入日はK-Navi **2020-02-24**、HAZUSE/パチビー等 **2020-02-25**、全国本格導入を **2020-03-02** とする資料が競合。平均せず `CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02` として保持。
- 初期1geki資料では設定変更/電源OFF→ON詳細が「調査中」だったが、後発当時解析で350G短縮天井、変更時RESET、純電断CARRY_OVERが確認されたため、初期欠損だけでPARTIALにしていない。
- 有利区間ランプ判別は単一攻略系統の直接記述のため `ANALYSIS_SINGLE_DETECTION` とし、確定判別へ格上げしない。

## 2020-02-24群監査
- K-Navi掲載: **DIAMOND / スロまる / パチスロファンタシースターオンライン2**。
- DIAMOND — No.1335 処理済み。
- スロまる — No.1336 処理済み。
- パチスロファンタシースターオンライン2 — No.1337 処理済み。
- P-Summaの2020年2月新台一覧も同月主要スロットとして青鬼 / 絆2 / Sオリスロ3系 / PSO2を列挙し、2/24群監査と整合。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 今回は本線2/24群完了を優先し、遡及QAは進めていない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1337を再取得。
2. **2020-02-25〜03-01境界を監査**し、地域先行/全国本格導入日の重複を除外する。
3. その後 **2020-03-02群** を全メーカー/別型式/別スペック/PB/地域差込みで確定し、次の未処理機種から登録する。
4. 2020-03-02群の先行確認候補として **パチスロ ハナペカ（ニューギン）** が存在するが、群全体監査前にNo.1338へ固定しない。
5. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11
### No.1336 スロまる
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001537/
- PiDEA X: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%ADpb%E6%A9%9F%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C123%E3%83%BB%E3%81%BE%E3%82%8B%E3%81%BF%E3%81%A4%E3%83%BB%E3%82%A2%E3%83%97%E3%83%AA%E3%82%A4%E3%81%AB%E5%B1%95%E9%96%8B%EF%BC%8Fjps
- 日刊スポーツ/娯楽産業: https://www.nikkansports.com/amusement/pachislot/news/202001170000194.html
- P-WORLD: https://www.p-world.co.jp/machine/database/9130
- HAZUSE: https://hazuse.com/machine/pachislot/SX0033/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/47/a.php

### No.1337 PSO2
- PiDEA X: https://www.pidea.jp/articles/bonus%E9%9B%86%E4%B8%AD%E3%83%A2%E3%83%BC%E3%83%89%E3%82%92%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B32
- P-WORLD: https://www.p-world.co.jp/machine/database/9136
- HAZUSE: https://hazuse.com/machine/pachislot/9S1571/
- グリーンべると/P-WORLDニュース: https://news.p-world.co.jp/articles/12723/greenbelt
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/104167/
- 1geki: https://1geki.jp/slot/s_pso2/3/
- スロパチクエスト: https://www.slopachi-quest.com/article/phantasystaronline2-tennjou/
- イチカツ: https://ichikatsu.com/pso2/

### 群監査 / 次境界
- K-Navi 2020年2月新台カレンダー: https://p-kn.com/calendar/202002/
- P-Summa 2020年2月新台機械割一覧: https://psumma.jp/pachislo/48250/
