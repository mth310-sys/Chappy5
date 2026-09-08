更新日: 2026-09-08

## 現在地点
- recordCount: **1009**
- latestRecordAdded: **天下布武3**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-12_tenkahubu3.md`
- chronologicalFrontier: **2016-09-12**
- frontierLatestMachine: **天下布武3**（山佐）
- schema: **resetBehavior v0.7**
- status: **2016-09-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2016-09-13_TO_09-19_THEN_2016-09-20**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1008 `2016-09-12_3x3eyes-seima-kakusei.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定に従い `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。
- 開始時点は recordCount 1008 / 2016-09-12群OPEN / 次未処理 `天下布武3`。
- 天下布武3をNo.1009として登録。性能コア、ART間999G天井、設定変更/据え置き/純電断、3武将モード再抽選、公開朝一モード振り分け、ガックン判別まで収集。
- 09/12同日について日付別・新台・導入カレンダー・メーカー一覧を追加監査。既登録 `3×3EYES ～聖魔覚醒～` と今回の `天下布武3` 以外に、全国導入本線として日付を固定できる未登録パチスロを今回確認できなかったため **2016-09-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 1gekiの2016年9月新台カレンダーは09/12に天下布武3のみを掲載するが、3×3EYESのような掲載漏れがあるため単独資料で完全性を主張せず、他検索と併用してCLOSED判定。
- HAZUSEの2016年9月導入日境界は 09/05 → 09/12 → 09/20 → 09/26。次回は09/13〜09/19を漏れ防止監査してから09/20群へ進む。

## No.1009 — 天下布武3
- manufacturer: **山佐**
- releaseDate: **2016-09-12**
- formalModelName: **天下布武3／ZZ**
- certificationNumber: **6S0492**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.9 / 98.6 / 100.7 / 104.3 / 107.2 / 112.2%**。
- ART初当たり: **1/356.8 / 351.7 / 298.4 / 284.6 / 224.4 / 213.1**。
- ボーナス合算: **1/992.9 / 936.2 / 992.9 / 819.2 / 992.9 / 799.2**。
- ベース: **約38G/50枚**（算出条件資料では38.1G）。
- ART純増: **約1.7枚/G**。一部のボーナス込み約1.9枚/Gは別定義。
- 天下ボーナス **200枚固定**、決戦 **30枚固定**。
- 覚醒 **20G+α**、天雅モード **30G+α or 130G+α**、真・天雅モード **10G+α**。
- 通常天井: **ART間999GでART「覚醒」**。天下ボーナス/決戦では天井G数をリセットしない。

### resetBehavior v0.7
- 設定変更: **ART間天井RESET / 3武将内部モードRESELECT**。
- 据え置き: **ART間天井・内部モードCARRYOVER**。
- 純電源OFF→ON: **ART間天井・内部モードCARRYOVER**。
- 設定変更後は信長/秀吉/家康の3武将モードの抽選順を3パターン各1/3で選び、その順で状態抽選。**最低1武将は高確以上確定**。
- 抽選1番目の高確/超高確は設定1-2 **25.0/75.0%**、設定3-4 **37.5/62.5%**、設定5-6 **50.0/50.0%**。
- 抽選2番目は設定1-2 **通常B68.8 / 高確25.0 / 超高確6.3%**、3-4 **53.1 / 37.5 / 9.4%**、5-6 **37.5 / 50.0 / 12.5%**。
- 抽選3番目は設定1-2 **通常A82.8 / 通常B12.5 / 高確3.1 / 超高確1.6%**、3-4 **71.9 / 18.8 / 6.3 / 3.1%**、5-6 **56.3 / 25.0 / 12.5 / 6.3%**。
- 高確以上モードは対応CZ当選まで転落しないため、朝一0G〜最初のCZまでに設定変更恩恵が存在。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。朝一恩恵は天井短縮ではなくモード再抽選。
- ガックンは当時解析複数で **設定変更時あり / 電源ON-OFFのみなし**。ただし小さく判別難度が高く対策影響もあるため `GACKUN_REPORTED_USEFUL_NOT_MANUFACTURER_GUARANTEE`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### data quality
- 一撃2016-10-12時点では設定変更/電断後の状態が「調査中」だったが、後発当時解析で3武将モードの再抽選/引継ぎと詳細数値が公開。古い未確定表と後発解析を時系列分離し、後発複数一致をcanonicalとした。
- 朝一表示ステージは「信長ステージ」「信長(夕方)ステージ」の表記差があるため `RESET_STAGE_PRESENTATION` として保持。内部数値には影響なし。
- ART単体純増約1.7枚/Gとボーナス込み約1.9枚/Gは定義差でありCONFLICTではない。

## 2016-09-12群 — CLOSED FOR CURRENT RESEARCH
登録済み:
- **3×3EYES ～聖魔覚醒～**（大都技研） — No.1008
- **天下布武3**（山佐） — No.1009

追加の日付別・メーカー横断検索で、09/12全国導入本線へ固定できる他の未登録パチスロは今回確認できず。

## 次の時系列候補
- 境界監査: **2016-09-13〜2016-09-19**。月表記だけの機種を強制的に09/12/09/20へ置かない。
- 次の強い具体日: **2016-09-20**。
- 強候補: **SLOT魔法少女まどか☆マギカ2**（メーシー）。1geki月次カレンダーで09/20、HAZUSEも09/20境界を掲載。次回はメーカー公式/業界記事/当時解析で個別日付を再固定してからNo.1010候補とする。
- 月内未配置候補として `パチスロスーパー海物語IN沖縄2 / ニューアイムジャグラーEX-KA / 乱嵐エイサー-30` 等は個別導入日を確認して時系列へ挿入する。月表記だけで日付確定しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1009を再取得。
2. **1009件 / 2016-09-12群CLOSED** から再開し、09/13〜09/19境界をメーカー・当時カレンダー・古DBで漏れ防止監査。
3. 未処理機がなければ **2016-09-20群**へ進み、`SLOT魔法少女まどか☆マギカ2` の導入日を公式/業界/解析で再固定してNo.1010候補として収集。
4. 09/20同日群は1機種だけと決め打ちせず、全メーカー横断監査を継続。
5. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/据え置き/電断/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古DB・回顧資料を横断した後のみ確定。競合は平均せずCONFLICT。
6. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。

## 主要出典 — 取得日 2026-09-08
### No.1009 天下布武3
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8602/greenbelt
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%A4%A9%E4%B8%8B%E5%B8%83%E6%AD%A63%E3%80%8D%E7%99%BA%E8%A1%A8/
- P-WORLD: https://www.p-world.co.jp/machine/database/8128
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/213/a.php
- 一撃 機種: https://1geki.jp/slot/s_tenkahubu3/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_tenkahubu3/3/
- 期待値見える化: https://slotjin.com/tenjou/tenkafubu3/
- スロパチクエスト reset: https://www.slopachi-quest.com/article/tenkahubu3-reset/
- スロパチクエスト summary: https://www.slopachi-quest.com/kisyubetsu/tenkahubu3/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/23583/
- パチスロ解析ガイド: https://pachislot-guide.net/2016/tenkafubu3/

### 境界
- 一撃 2016年9月新台カレンダー: https://1geki.jp/newmachinecalender/201609/
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
