# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **924**
- latestRecordAdded: **パチスロ デッドマン・ワンダーランド**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-19_deadman-wonderland.md`
- chronologicalFrontier: **2015-10-19**
- frontierLatestMachine: **パチスロ デッドマン・ワンダーランド**
- frontierRecord: `docs/real_machine_db/machines/2015-10-19_deadman-wonderland.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.923 `2015-10-19_jigoku-shoujo.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount 923 / chronologicalFrontier 2015-10-19 / `2015-10-19_GROUP_OPEN`。
- handoff指定の次の未処理機種 **パチスロ デッドマン・ワンダーランド（北電子）** をNo.924として追加。

## No.924 — パチスロ デッドマン・ワンダーランド

- record: `docs/real_machine_db/machines/2015-10-19_deadman-wonderland.md`
- manufacturer: **北電子**
- releaseDate: **2015-10-19**
- generation/system: **5号機 A+ART / ボーナス + 自力CZ + セット/G数上乗せART**
- formalModelName: **デッドマン・ワンダーランドKC**（北電子公式検定情報）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore

- 機械割: **97.8 / 98.9 / 100.8 / 103.9 / 108.5 / 110.9%**。
- ART「G-RUSH」初当たり: **1/452 / 409 / 398 / 313 / 242 / 213**。
- BB: **1/364 → 1/345**、RB: **1/728 → 1/596**、ボーナス合算 **1/243 → 1/219**。
- 50枚ベース: **約34G**。
- ART純増: **約1.6枚/G**（ボーナス込み約1.9枚/G表記あり）。
- ART基本: **1セット40G+α**、G数上乗せ + セットストック型。
- BIG: **約150枚**、REG: **約48枚**。
- CZ「ドッグレースショウ」ART期待度: **約40%**。
- 天井: **ボーナス間1155G + 前兆**。途中ARTでは天井カウンタをリセットしない。到達時 **ART5セット以上**。

### resetBehavior v0.7

- 設定変更: **ボーナス間天井RESET / 内部状態再抽選**。
- 据え置き: **天井進捗・内部状態CARRYOVER_SUPPORTED**（純電断直接比較から支持）。
- 純電源OFF→ON: 当時解析の直接比較表で **天井引継ぎ / 内部状態引継ぎ**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時状態: **低確 / 通常 / 高確 / 超高確**。
- 公開リセット状態振り分け:
  - 設定1: **低確70% / 通常5% / 高確20% / 超高確5%**。
  - 設定2〜6で取得テキストに明示されたセル: 低確 **68 / 66 / 60 / 58 / 55%**、高確 **22 / 24 / 30 / 32 / 35%**。
  - 元HTML表のrowspan等により設定2〜6の通常/超高確セルが取得テキスト上省略されるため、各5%を推測補完せず明示セルのみ保存。
- 朝一ステージは当時資料で調査中。
- 本機固有ガックン/初期出目/ランプ等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts / missing

- `INITIAL_HIT_DEFINITION_DIFFERENCE`: ART単独 **1/452→1/213** と、別資料の「ART+ボーナス」合算 **1/157.9→1/107.8** は定義違い。平均しない。
- inspectionNumber: 型式名 / 北電子 / 検定番号 / 5S 等へ検索語を変更し再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定2〜6のリセット時「通常/超高確」セルは、取得HTMLの構造上明示値を安全に復元できないため `UNVERIFIED_FROM_RENDERED_SOURCE_STRUCTURE`。

## 時系列境界監査

### 2015-10-19群
処理済み:
1. **パチスロ 地獄少女 — No.923**
2. **パチスロ デッドマン・ワンダーランド — No.924**

- K-Navi、2015年新台一覧、機種別当時解析を横断再確認。
- 10/19の全国導入機として追加の未登録パチスロを今回固定できなかったため **2015-10-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

### 2015-10-20〜10-25
- 2015年10月月間新台一覧、10/26各機種の具体日資料を再確認。
- この境界で具体的な全国初導入日を固定できる未登録パチスロは今回確認できず、**BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

### 次の具体日 2015-10-26
強い候補を複数確認済み:
- **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス — オーイズミ**（パチビーで10/26）
- **機甲戦記ドラグナー — サミー**（当時解析で10/26）
- **百花繚乱サムライガールズ — DAXEL**（当時解析/年次一覧で10/26）
- **パチスロ ハイスクールD×D — KPE系**（KONAMI当時公式で10/26コンテンツ開始・稼働時期を要再確認）

候補だけに限定せず、10/26全メーカー横断監査を行ってから同日群CLOSED判定する。

## 遡及 resetBehavior QA

- 今回は時系列新規収集を優先。
- retroQaCursorはリポジトリ実体で特定できていないため推測で前進させていない。
- retroQaStatus: **CURSOR_RESOLUTION_PENDING / NO_FALSE_PROGRESS**。

## 次回再開地点

1. **recordCount 924 / chronologicalFrontier 2015-10-19 / 2015-10-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.924を再取得。
3. 2015-10-20〜10-25境界CLOSEDを確認後、**2015-10-26群**へ進む。
4. 最初の未処理候補として **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス（オーイズミ）** をv0.7仕様で調査・登録する。
5. 続けて **機甲戦記ドラグナー / 百花繚乱サムライガールズ / ハイスクールD×D** と、10/26全メーカーを横断監査する。
6. 同日群を閉じる前に導入日定義（検定告示 / 発表 / 納品 / 地域先行 / 全国導入）を分離する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- HTMLのrowspan/省略セルは見た目から推測補完せず、直接取得できる値だけ保存する。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.924 パチスロ デッドマン・ワンダーランド
- 北電子公式製品: https://www.kitadenshi.co.jp/slot/deadman/
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/deadman/
- K-Navi: https://p-kn.com/slot/2345/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/12292/
- すろぱちくえすと: https://www.slopachi-quest.com/article/deadman-wonderland/
- 天井期待値: https://www.slopachi-quest.com/article/deadman-kitaichi/
- P-WORLD: https://www.p-world.co.jp/machine/database/7838
- 中一商事（型式）: https://www.nakaiti.com/html/sKitadenshi088.html
- 江戸スロ（型式）: https://edoslot.net/SHOP/deddoman.html
- 2015年新台一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html

### 次時系列候補
- STEINS;GATE（パチビー）: https://www.pachibee.jp/machines/index/215100000
- 機甲戦記ドラグナー: https://chonborista.com/slot/sammy-slot/12182/
- 百花繚乱サムライガールズ: https://jikyu2000.com/matome/samurai_girls/
- ハイスクールD×D 当時KONAMI記事: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_151027.html

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: OFFICIAL
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON_SINGLE_SOURCE
- resetNumericData: ANALYSIS_SINGLE_WITH_RENDERING_CAVEAT
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- 2015-10-19 boundary: CLOSED_FOR_CURRENT_RESEARCH_MULTI_SOURCE
- retroQaCursor: CURSOR_RESOLUTION_PENDING
