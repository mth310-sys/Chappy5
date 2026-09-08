更新日: 2026-09-09

## 現在地点
- recordCount: **1035**
- latestRecordAdded: **麻雀格闘倶楽部2**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_mahjong-fight-club-2.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **麻雀格闘倶楽部2 — No.1035**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-20_TO_2017-01-02_BOUNDARY_AUDIT_NEXT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1034実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- main正本は **1034件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN**。過去チャットの古い地点へ戻らず、handoff指定の次未処理KPE `麻雀格闘倶楽部2` をNo.1035として追加。
- 性能コアはKONAMI公式、HAZUSE、PiDEA X、ALL7、当時解析複数を横断。機械割/ART初当たり/ボーナス/純増は高一致。ベースのみ約37G/50枚と設定1約40G/50枚で資料差を保持。
- resetBehavior v0.7は設定変更 / 据え置き / 純電源OFF→ONを分離。設定変更で天井・周期RESET→1周期目、純電源OFF→ONで天井・周期CARRYOVER、朝一液晶は双方基本富士山、ガックンは右リール微ブレ報告だが実用性低として保存。
- 「据え置き」と明記した独立した本機固有比較表は再探索後も直接固定できず、純電源OFF→ON引継ぎから推測せず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH` とした。
- ALL7の12/19導入一覧と導入カレンダー/メーカー資料を再監査し、本線候補は既登録で埋まったため **2016-12-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。次は12/20以降の境界監査へ進む。

## No.1035 — 麻雀格闘倶楽部2
- manufacturer: **KPE**
- releaseDate canonical: **2016-12-19**
- formalModelName: **麻雀格闘倶楽部2／KA**
- certificationNumber: **6S0920**
- generation/system: **5号機 / 5.5号機期 / A+ART / 周期抽選 / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.3 / 98.4 / 100.2 / 103.1 / 106.2 / 110.1%**。
- ART「格闘倶楽部RUSH」初当たり: **1/297.0 / 276.5 / 285.8 / 245.8 / 249.9 / 228.7**。
- リアルボーナス「俺の強運」: **全設定1/213.0、9G、約54枚**。
- baseGamesPer50: 当時解析複数 **約37.0G/50枚**、PiDEA X導入前資料 **設定1約40G/50枚**。平均せず条件差/CONFLICT候補として保持。
- ART: **ボーナス込み約2.0枚/G、初期40〜480G**。
- 通常時は周期管理、**1周期平均約40G**。通常天井はcanonical **最大33周期**（約1320〜1350Gは目安換算）、到達時ART確定。
- CZ: 霊獣チャレンジ **10G・ART期待度約33%**、昇龍チャレンジ **8G・約43%**。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET / 周期RESET / 1周期目から開始**。朝一基本液晶は富士山。
- carryOverBehavior: 「据え置き」と明記した本機固有の独立比較表は **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。純電源OFF→ONから推測補完しない。
- powerCycleBehavior: **天井・周期状態CARRYOVER**。液晶は基本富士山。ただしART中/特殊ステージ滞在中の電断はステージ引継ぎ注記あり。
- ceilingAfterReset: **設定変更専用短縮天井なし / NONE_CONFIRMED_AFTER_RESEARCH**。通常どおり1周期目から周期天井契約。
- modeAfterReset: **リセット専用通常モード/チャンス周期振り分けなし / NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: RT1/RT2/RT3は公開されるが、設定変更時のRT初期化詳細は **UNVERIFIED_AFTER_RESEARCH**。イベント/CZ状態の専用初期振り分けも未確認。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 当時解析では **特に恩恵なし**。リセット専用初当たり優遇数値も未確認。
- resetPenalties: 前日の周期進捗は設定変更で消え、1周期目へ戻る。
- resetDetection: 設定変更/純電断とも基本富士山で液晶判別不可。2016-12-26公開の実機動画では右リールに僅かなガックン報告があるが、当時解析も「実用的ではない」評価。`GACKUN_REPORTED_BUT_PRACTICALLY_WEAK_NOT_RELIABLE`。

### public reset numeric data
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一特定G/周期以内の専用当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の周期天井振り分けは公開されるがリセット専用値ではないためnumericResetDataには転記しない。

## data quality
- `麻雀格闘倶楽部2 / 麻雀格闘倶楽部2／KA / KPE / KONAMI` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 周期状態 / モード / RT / ガックン` を組み替え、公式動画・HAZUSE・ALL7・PiDEA X・当時解析・旧攻略記事・実機動画を横断。
- 2023年スマスロ「麻雀格闘倶楽部 覚醒」の有利区間/160G+αリセット優遇等は別機種なので混入させていない。
- PiDEA X 2016-10-14記事の「納品12/4〜」と、KONAMI公式12月稼働開始/HAZUSE・ALL7・当時解析のホール導入12/19を分離。本DBのreleaseDateは全国ホール導入基準で **2016-12-19** をcanonicalとする。
- 通常天井の約1320〜1350Gは1周期平均約40Gからの目安であり、canonicalは **33周期**。

## 2016-12-19群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029
- **スーパービンゴ リゾート**（ベルコ）— No.1030
- **パチスロニュースモモチャンEX**（ニューギン / 25Φ）— No.1031
- **パチスロニュースモモチャンEX-30**（ニューギン / 30Φ）— No.1032
- **パチスロ ロリポップチェーンソー**（藤商事）— No.1033
- **パチスロ犬夜叉**（ロデオ）— No.1034
- **麻雀格闘倶楽部2**（KPE）— No.1035

監査結果:
- ALL7 2016年12月の12/19一覧で確認できるパチスロ本線は上記系列で既登録。別導入カレンダーでもSHAKE III、スーパービンゴ リゾート、ニュースモモチャン、麻雀格闘倶楽部2、犬夜叉を照合。
- ロリポップチェーンソーは資料によって12/12表記があるため、その導入日CONFLICTは既存No.1033側の扱いを維持し、12/19群監査では重複追加しない。
- 現調査で新たな全国導入12/19未登録機を固定できなかったため群をCLOSED。

## 次境界で注意する候補
- **パチスロ モンスターハンター～狂竜戦線～**: 後年資料/当時情報に地域先行導入と全国導入日の差がある。中国・九州等で2016-12-19以降の先行導入記述がある一方、K-Navi等は全国ホール導入を2017-01-09/10系列としている。
- 次回は12/20〜年末のHAZUSE日付ノード（特に12/26）とメーカー/業界一覧を横断し、**地域先行をcanonical releaseDateに採るか、全国導入日を採るかを既存DBルールと整合させてから登録**する。未確定のままNo.1036にしない。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19**。次は **2016-12-20_TO_2017-01-02_BOUNDARY_AUDIT**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1035を再取得。
2. **1035件 / chronologicalFrontier 2016-12-19 / 12/19群CLOSED** を正本として継続。
3. **2016-12-20〜2017-01-02境界監査**。HAZUSEの12/26日付ノード、ALL7、メーカー別一覧、当時業界記事、小規模メーカー資料を横断する。
4. `パチスロ モンスターハンター～狂竜戦線～` は地域先行導入2016-12-19/12月末系と全国導入2017-01-09/10系の差を公式/業界/当時解析で再固定し、既存DBのreleaseDate規則に従ってchronological queueへ置く。固定前に登録しない。
5. 年末に全国導入未登録機がなければ2017年1月最初の全国導入群へ進み、次の未処理機をNo.1036候補とする。
6. 性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
7. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-09
### No.1035 麻雀格闘倶楽部2
- KONAMIアミューズメント公式YouTube: https://www.youtube.com/watch?v=qiRyQ87raNo
- HAZUSE: https://hazuse.com/machine/pachislot/6S0920/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E9%BA%BB%E9%9B%80%E6%A0%BC%E9%97%98%E5%80%B6%E6%A5%BD%E9%83%A82%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 期待値見える化: https://slotjin.com/zone/mfc2/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/27152/
- すろぱちくえすと: https://www.slopachi-quest.com/article/majang-fightclub2/
- すろぱちくえすと（打ち方/ボーナス）: https://www.slopachi-quest.com/article/majanfight2-reel/
- pachislo-data: https://pachislo-data.com/kpe/30227
- ガックン実機動画（2016-12-26）: https://www.youtube.com/watch?v=XuyX-Uqxsuw

### 次境界監査
- HAZUSE 導入日カレンダー: https://hazuse.com/machine/pachislot/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
