更新日: 2026-09-09

## 現在地点
- recordCount: **1117**
- latestRecordAdded: **パチスロ 世界でいちばん強くなりたい！**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-07_sekai-de-ichiban-tsuyoku-naritai.md`
- chronologicalFrontier: **2017-08-07**
- frontierLatestMachine: **パチスロ 世界でいちばん強くなりたい！ — No.1117**
- schema: **resetBehavior v0.7**
- status: **2017-08-07_GROUP_OPEN_RELEASE_DATE_CONFLICT_AUDIT_REQUIRED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1116「アイムジャグラーEX-AE」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1116件 / chronologicalFrontier 2017-08-07 / 8/7群OPEN**。
- HANDOFF指定の次候補No.1117「パチスロ 世界でいちばん強くなりたい！」をperformance core + resetBehavior v0.7で登録。
- 欠損判定前に「世界でいちばん強くなりたい / せかつよ / FSA / 藤商事」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 悶ポイント / 悶倍率 / 天井 / ガックン / 検定番号」を組み替え、藤商事公式、当時業界記事、K-Navi、P-WORLD、当時解析、古いDB、中古実機資料、回顧資料を横断。

## No.1117 — パチスロ 世界でいちばん強くなりたい！
- manufacturer: **藤商事**
- releaseDate canonical: **2017-08-07**
- formalModelName: **世界でいちばん強くなりたい！FSA**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ART / BR非搭載 / 周期ポイント管理 / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT_2017_08_07_VS_2017_08_MID_OR_08_20_21**

### identity / releaseDate
- 藤商事公式現存ページでパチスロ版の存在を一次確認。
- K-Navi、ちょんぼりすた、パチスロデータ、パチ7は **2017-08-07** で一致するためchronological canonicalは8/7。
- PiDEA X当時記事は **8月中旬予定**、当時スペック紹介は **8/20(日)～**、ALL7は **8/21**。納品/地域差と推測統合せず `CONFLICT_RELEASE_DATE_2017_08_07_VS_2017_08_MID_OR_08_20_21` として保持。
- 中古実機資料2系統で末尾 **FSA** を確認。検定番号は表記・資料系統変更後も直接固定できずUNVERIFIED。

### performanceCore
- 機械割: **96.8 / 98.2 / 100.6 / 103.8 / 106.4 / 110.2%**。
- ART初当たり: **1/356.9 / 335.2 / 316.9 / 274.7 / 246.8 / 209.6**。
- ベース: **約43G/50枚**（別当時資料43.2G）。
- ART「悶ラッシュ」純増: **約1.7枚/G**、基本 **30G+α**。
- 通常天井: **1250pt**。平均約900〜925G表記と実践値約1100G前後表記はゲーム数換算の定義/観測差として分離。
- 設定1機械割97.8%・純増2.0枚/Gとする中古相場整理1系統は主要複数資料と競合するため平均せずsecondary CONFLICT。

### resetBehavior v0.7
- settingChange: **天井/悶ポイントRESET、内部モードRESELECT**。
- pure power OFF→ON: **天井進捗CARRYOVER、内部モードCARRYOVER**。
- explicit stay-setting contract: 純電断表から推測転記せず **UNVERIFIED_AFTER_RESEARCH**。
- resetModeDistribution: **通常37.6% / リセット37.6% / 天国24.8%**。
- resetCeilingByMode: 通常 **1250pt** / リセット **1000pt相当（内部250pt加算）** / 天国 **50pt**。
- resetBenefits: 24.8%で50pt天国、37.6%で内部250pt加算リセットモード。
- resetPenalties/caution: リセットモードでは内部250pt加算のため、解析上「朝一50ptで周期抽選を受けられない点」に注意。その他の確定的な不利はNONE_CONFIRMED。
- stateAfterReset: 悶倍率など主要モード以外の個別状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- resetDetection: 期待値見える化は **ガックン判別不可**。朝一ステージはテーマパークorトレーニングジム表記があるが確定判別にはしない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-07群監査 — 継続中
- 登録済み: No.1116 アイムジャグラーEX-AE / No.1117 パチスロ 世界でいちばん強くなりたい！。
- 政宗2はNo.1115として7/31地域先行で登録済み。8/7一般導入表記があっても重複登録しない。
- 8/7群を複数カレンダーで再監査したところ、**イノキロードトゥゴッド**が2-9伝説で **2017-08-07**、ALL7で **2017-08-21** と競合。未処理候補の可能性があるため群を閉じない。
- 世界でいちばん強くなりたい！自身も8/7 vs 8月中旬/8/20〜21の資料競合があるため、日付単独では群CLOSEしない。
- 一撃の後年カレンダーは8/7を政宗2のみとするなど資料差がある。次回は8/7〜8/21境界を機種個別一次/当時資料で監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1117を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1117を再取得。
2. **1117件 / chronologicalFrontier 2017-08-07 / 8/7群OPEN_RELEASE_DATE_CONFLICT_AUDIT_REQUIRED** を正本として継続。
3. 最優先で **「イノキロードトゥゴッド」** の2017-08-07 vs 2017-08-21導入日競合を、メーカー/ユニバーサル系公式、当時業界記事、検定/新台カレンダー、個別解析で再固定する。
4. 8/7導入の独立未処理機と判定した場合は **No.1118** としてperformance core + resetBehavior v0.7を登録。8/21がcanonicalなら8/7群には登録せず、8/7群の残り候補を監査してCLOSED可否を判定する。
5. あわせて8月の候補 **ロボットガールズZ / 神の左手 悪魔の右目 / イミソーレ3A等** の実導入日を境界監査し、日付資料のズレによる漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1117 パチスロ 世界でいちばん強くなりたい！
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_sekatsuyo/
- PiDEA X 2017-06-28: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E3%81%9B%E3%81%8B%E3%81%A4%E3%82%88%E3%80%8D%E3%81%AF%E7%97%9B%E3%81%81%EF%BD%9E%E3%81%84ART%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
- K-Navi: https://p-kn.com/slot/2840/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/41739/
- P-WORLD: https://www.p-world.co.jp/machine/database/8442
- パチスロデータ: https://pachislo-data.com/fuji/47522
- 期待値見える化: https://slotjin.com/zone/sekatsuyo/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sekaideichibantuyokunaritai/
- パチ7: https://pachiseven.jp/machines/5229/cutout/98
- 当時スペック紹介: https://pachinkopachisro.com/archives/50258654.html
- ALL7 2017年8月: https://www.all7.jp/plans/index/2017/08
- 愛品館中古実機資料: https://www.aihin.co.jp/new/news-1002290/
- 中古相場整理: https://slot-kakaku.com/sekaide/

### 8/7〜8/21境界監査
- 2-9伝説新台一覧: https://29den.com/newslot/
- ALL7 2017年8月: https://www.all7.jp/plans/index/2017/08
- 一撃 2017年8月カレンダー: https://1geki.jp/newmachinecalender/201708/
