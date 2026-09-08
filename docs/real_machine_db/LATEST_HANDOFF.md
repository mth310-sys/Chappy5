# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **969**
- latestRecordAdded: **キングパルサー～DOT PULSAR～**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-04_king-pulsar-dot-pulsar.md`
- chronologicalFrontier: **2016-04-04**
- frontierLatestMachine: **キングパルサー～DOT PULSAR～**
- schema: **resetBehavior v0.7**
- status: **2016-04-04_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、No.968 `2016-04-04_kidou-keisatsu-patlabor.md` を再取得。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **968** / chronologicalFrontier **2016-04-04** / 04-04群OPEN。
- 直前handoff指定の先頭未処理 **キングパルサー～DOT PULSAR～** が未登録であることをGitHub code searchでも確認し、No.969として追加。

## No.969 — キングパルサー～DOT PULSAR～
- record: `docs/real_machine_db/machines/2016-04-04_king-pulsar-dot-pulsar.md`
- manufacturer: **山佐**
- releaseDate canonical: **2016-04-04**
- formalModelName: **ドットパルサーKPV／CC**
- certificationNumber: **5S1153**
- generation/system: **5号機 / AT / 疑似ボーナス / ゲーム数モード+シークレットストック**

### performanceCore
- 機械割: **97.0 / 99.0 / 101.0 / 104.0 / 109.0 / 115.0%**。
- ボーナス初当たり: **1/387.7 / 381.0 / 358.4 / 324.9 / 295.3 / 268.8**。
- ベース: **約45.4G/50枚**。
- 疑似ボーナス純増: **約2.9枚/G**。
- BIG: **平均約185枚**、REG: **平均約63枚**。
- 通常最大天井: **1280G**。モードにより32 / 128 / 256 / 512 / 768 / 1280Gの振り分け。
- HAZUSE、K-Navi、グリーンべると、必勝本、当時解析を照合。

### resetBehavior v0.7
- 設定変更時: **天井再抽選 / 内部モード再抽選 / 内部ボーナスストックRESET**。
- 純電源OFF→ON: **天井ゲーム数 / 内部モード / 内部ストックすべてCARRYOVER**。当時直接比較表で確認。
- 据え置き: 純電断比較と整合する範囲で上記3要素を **CARRYOVER_SUPPORTED**。
- 設定変更時モード振り分け:
  - 設定1～4: リセット **25.0%** / 通常A **37.5%** / 通常B **37.5%**。
  - 設定5: リセット **29.7%** / 通常A **32.8%** / 通常B **37.5%**。
  - 設定6: リセット **34.4%** / 通常A **28.1%** / 通常B **37.5%**。
- リセットモード選択時の天井振り分け: **128G 25.0% / 256G 25.0% / 512G 50.0%**。最大512G。
- リセットモード終了後は通常B以上。公開解析では天国約40.3～40.6%、超天国約1.3%、高ストック約0.9%。
- 朝一実践値は新台初日328件で初当たり **1/297**、0～257Gのみ **1/247**。メーカー値ではないため `EMPIRICAL_SINGLE_DATASET` として性能コアから分離。
- 設定変更で内部ストック消去・前日天井進捗消失が明確なリセット不利。
- ガックン: 当時比較では設定変更時に微弱なガックン、電源OFF→ONではなし。ただし目視困難のため `PRACTICAL_WEAK_GAKKUN_INDICATOR`、確定判別にはしない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / caution
- 後年5号機クロニクルは導入日 **2016年1月** / 純増約**2.8枚/G** とするが、HAZUSE・K-Navi・必勝本・当時業界記事は **2016-04-04 / 約2.9枚/G** で一致。`RELEASE_DATE_AND_NET_INCREASE_RETROSPECTIVE_CONFLICT` として双方保持し、canonicalは当時複数一致値。
- ちょんぼりすた本文に設定6初当たり整数 **1/267** がある一方、HAZUSE・必勝本等の精密値は **1/268.8**。canonicalは複数一致の1/268.8。
- 設定変更後は必ず512G天井ではない。リセットモード選択率は25.0～34.4%で、通常A/B選択時は通常モードの天井振り分けに従う。

## 2016-04-04群 — OPEN
- No.968 **パチスロ 機動警察パトレイバー** 登録済み。
- No.969 **キングパルサー～DOT PULSAR～** 登録済み。
- 次の強い未処理候補:
  1. **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL） — K-Navi / 一撃 / 複数解析で2016-04-04を確認。型式候補 **ミルキィホームズ／DE**。次回、検定番号を一次/当時DBまで再探索して固定する。
  2. 04/04同日群の残存機種を全メーカー横断で再監査し、漏れ確認後にCLOSED判定。
- ミルキィの先行確認値: 機械割 **97.3～110.0%**、MB **1/382.7→1/264.4**、ART初当たり **1/638.0→1/473.5**。ベース/純増は資料定義に差が見えるため次回必ず原資料照合してcanonical化する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.969を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 969 / chronologicalFrontier 2016-04-04 / 04-04群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.969をmainから再取得。
3. **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌** を最初の未処理機として、identity→性能コア→resetBehavior v0.7を収集する。
4. 続いて04/04群を全メーカー横断で残存監査し、漏れがない場合のみCLOSEDへ進める。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
7. 遡及QAは **`2006-02_nurse-witch-komugi-chan-magicalte.md`** から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.969 キングパルサー～DOT PULSAR～
- HAZUSE: https://hazuse.com/machine/pachislot/5S1153/
- K-Navi: https://p-kn.com/slot/2449/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/8156/greenbelt
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2710/1/56992
- パチ＆スロ必勝本 システム: https://p.hisshobon.jp/machine/2710/1/56994
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/17100/
- 期待値見える化 リセット: https://slotjin.com/slot/kingpulsar-reset/
- すろぱちくえすと 設定/モード: https://www.slopachi-quest.com/article/kingpulsar-dotpulsar-settei/
- キングパルサー解析wiki: https://w.atwiki.jp/kingpulsar777/pages/30.html
- 5号機クロニクル山佐一覧: https://5goki.com/yamasa

### 04/04次候補
- K-Navi ミルキィホームズ: https://p-kn.com/slot/2466/
- 一撃 ミルキィホームズ基本確率: https://1geki.jp/slot/s_milkyholmes/1/
- pachinavi ミルキィホームズ: https://pachinavi.net/machines/milky-holmes/

## confidence
- No.969 identity/formalModel/certification/releaseDate: **PERIOD_DATABASE_HIGH_MULTI_SOURCE**
- No.969 performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.969 settingChange/powerCycle: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- No.969 reset numeric tables: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- No.969 resetDetection: **ANALYSIS_SINGLE_EMPIRICAL_WEAK_INDICATOR**
- 2016-04-04 group: **OPEN**
