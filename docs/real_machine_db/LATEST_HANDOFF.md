更新日: 2026-09-08

## 現在地点
- recordCount: **1030**
- latestRecordAdded: **スーパービンゴ リゾート**（ベルコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_super-bingo-resort.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **スーパービンゴ リゾート — No.1030**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1029実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1029件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** から継続。
- ベルコ `スーパービンゴ リゾート` をNo.1030として追加。ベルコ公式、PiDEA X、K-Navi、P-WORLD、当時解析、旧実機資料を横断。
- 12/19群はまだOPEN。次未処理はニューギン `パチスロニュースモモチャンEX`。

## No.1030 — スーパービンゴ リゾート
- manufacturer: **ベルコ**
- releaseDate canonical: **2016-12-19**
- formalModelName: **スーパービンゴリゾート/R5**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / リアルボーナスCZ / セット継続型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CERTIFICATION_PENDING**

### performanceCore
- 機械割: **97.5 / 99.0 / 101.0 / 104.0 / 107.5 / 111.0%**。
- ART「BINGO CHANCE」初当たり（ベルコ公式精密値）: **1/394.2 / 366.5 / 344.4 / 311.4 / 277.6 / 254.8**。
- BINGO CHALLENGE（リアルボーナス）: **全設定共通 約1/200、66枚、11G**。
- ベース: canonical **約39.5G/50枚**。PiDEA Xは約40G表記で丸め差として保持。
- ART純増: **約2.0枚/G**。
- ART基本: **1セット33G以上**。Hooah!時は3桁以上。
- 通常時ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: **高確スタート**。RT状態は引継ぎとする朝一比較資料あり。
- 据え置き/純電源OFF→ON: **内部状態・RT状態引継ぎ**。
- ゲーム数天井: **NOT_APPLICABLE_NO_CEILING**。設定変更専用短縮天井も非該当。
- 朝一表示: **バカラビーチ / 液晶出目865**。設定変更と純電断で共通のため単独変更判別には使えない。
- 朝一主要恩恵: **設定変更後高確スタート**。
- 設定変更後高確の保証/継続G数: 検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン契約: 再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### identity / quality
- ベルコ公式は2016年12月登場、5号機ART、ART初当たり精密値を掲載。
- K-Navi/ALL7/複数当時解析で **2016-12-19** 導入が一致。PiDEA Xは納品12/18〜。
- 型式 **スーパービンゴリゾート/R5** は中古実機資料で確認。
- 検定番号は機種名、R5、ベルコ、6S、検定番号、検定通過、公安委員会等へ検索語を変更し、公式・業界・旧DB・撤去資料まで横断したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

## 2016-12-12群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **ニューペガサスR**（エマ）— No.1027
- **パチスロ 涼宮ハルヒの憂鬱**（SANKYO）— No.1028

## 2016-12-19群 — OPEN
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029
- **スーパービンゴ リゾート**（ベルコ）— No.1030

未処理先行候補:
1. **パチスロニュースモモチャンEX**（ニューギン）
2. **パチスロ ロリポップチェーンソー**（藤商事）
3. **パチスロ犬夜叉**（ロデオ）
4. **麻雀格闘倶楽部2**（KPE）
- ALL7 2016年12月一覧ではいずれも2016-12-19導入予定。次回はメーカー/HAZUSE/P-WORLD/当時業界資料で実導入日・型式・重複を再固定してから順番に登録する。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19**、同日群はOPEN。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1030を再取得。
2. **1030件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** を正本として継続。
3. 次未処理の **ニューギン `パチスロニュースモモチャンEX`** をNo.1031候補として処理。導入日・型式・検定番号・重複を再確認する。
4. その後、**ロリポップチェーンソー → 犬夜叉 → 麻雀格闘倶楽部2**を先行候補とし、12/19同日全メーカー監査を継続。
5. 各機種で性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1029 SHAKE III
- ピロ式: https://piro-shiki.com/shake3-kaiseki/
- pachislo-data: https://pachislo-data.com/daito/29605
- 期待値見える化: https://slotjin.com/zone/shake3/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/27579/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/shake3/
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2016/12/shake3

### No.1030 スーパービンゴ リゾート
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/suberbingo_resort/
- ベルコ公式シリーズ沿革: https://www.s-bellco.co.jp/company/
- PiDEA X 発表記事: https://www.pidea.jp/articles/%E7%B6%99%E6%89%BF%E3%81%A8%E9%80%B2%E5%8C%96%E3%81%AE%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
- PiDEA X 機械評価: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- K-Navi: https://p-kn.com/slot/2647/
- P-WORLD: https://www.p-world.co.jp/machine/database/8201
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/27546/
- 期待値見える化: https://slotjin.com/slot/superbingoresort/
- 一撃: https://1geki.jp/slot/s_sbingoresort/81/
- 2-9伝説: https://29den.com/superbingoresort/
- 中古実機 中一商事: https://item.rakuten.co.jp/auc-nakaiti/bikori/

### 境界 / 次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
