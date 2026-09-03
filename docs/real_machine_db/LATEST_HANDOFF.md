# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **470**
- latestMachineAdded: **鮪伝説**（大都技研 / 2010-04-05）
- latestRecord: `docs/real_machine_db/machines/2010-04-05_maguro-densetsu.md`
- chronologicalFrontier: **2010-04-05**
- frontierLatestMachine: **鮪伝説**（大都技研 / 2010-04-05）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近レコードを再取得。
- `INDEX.md` は旧地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **469** / chronologicalFrontier **2010-04-05** / latestMachineAdded「ペガサスW（ニューペガサスブラック）」。
- 2010-04-05同日群を継続監査し、repo内検索で「鮪伝説」が未登録であることを確認して470件目として追加。
- K-Naviとパチビーはホール導入を **2010-04-05** とする。一方、2010-02-15公開の事前スペック記事には「納品3/22〜・導入3/23〜」という旧予定値が残る。2010-03-12の業界発表は「4月上旬から納品開始予定」として4/5側を補強するため、本DB主値は2010-04-05としつつ `CONFLICT` を保持した。

## 470 — 鮪伝説 要約

- メーカー: **大都技研**
- 型式: **鮪伝説 S3**（回顧資料単独のため formal identity は部分確定）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010-04-05**を主値 / 旧事前予定 **2010-03-23** とCONFLICT保持
- 世代/タイプ: **5号機 / ボーナス + 無限ART**
- 機械割: **96.5 / 97.4 / 99.8 / 103.8 / 107.8 / 111.5%**
- BIG合成: **1/348.60 → 1/315.08**
- REG/LIGHT: **1/819.20 → 1/546.13**
- ボーナス合算: **1/244.54 → 1/199.80**
- 50枚ベース: **約33G**
- 大漁BIG/BIG: **約204枚**、LIGHT BONUS: **約48枚**
- 無限ART「大漁道」: **約+1.5枚/G**、次回ボーナスまで継続
- 通常救済: **995GでART突入率アップ / 1920Gで天井ART**
- 複数内部モード・高確状態の存在を確認。
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL_RELEASE_DATE_CONFLICT_FORMAL_IDENTITY_PARTIAL**

## resetBehavior v0.7 — 鮪伝説

- **設定変更**: K-Naviに本機専用「設定変更後の挙動」解析項目が存在することまでは確認。ただし現存サブページ本文を取得できず、天井カウンタのclear/retain、内部モード再抽選値等は `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機挙動で補完しない。
- **据え置き**: 995G/1920G進捗、内部モード、高確、ART関連状態の保持を本機固有高信頼本文で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井カウンタ、内部モード、高確、ART状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常時の **995G / 1920G** は確定。設定変更後のクリア/引継ぎと短縮天井は未確定。
- **モード/状態**: 複数モード・高確は存在するが、変更時振分や電断時処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 当時K-Naviユーザー投稿に「朝一100回転高確ねらい」の記述はあるが解析本文ではないため、公開朝一数値として昇格せず低信頼参考値に留めた。確定不利要素はなし。
- **変更判別**: 当時ユーザー投稿に「設定変更がすぐわかる」との言及はあるが、判別条件・演出・確率を高信頼資料で回収できず `PARTIAL_LOW_CONFIDENCE_CLAIM_ONLY`。ガックン等を推測補完しない。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## 主要出典（取得日 2026-09-03）

- K-Navi「鮪伝説」: `https://p-kn.com/slot/1180/`
- パチビー「鮪伝説」: `https://www.pachibee.jp/machines/index/209100007`
- P-WORLD「鮪伝説」: `https://www.p-world.co.jp/machine/database/5890`
- 娯楽産業「大都技研 パチスロ新機種『鮪伝説』発表」: `https://www.goraku-sangyo.com/大都技研　パチスロ新機種「鮪伝説」発表/`
- P-WORLD/グリーンべると「次回ボーナスまで継続のARTがアツい『鮪伝説』」: `https://news.p-world.co.jp/articles/3872/greenbelt`
- 当時解析まとめ「鮪伝説 攻略＆解析情報」: `https://ameblo.jp/pachimatome/entry-10498857544.html`
- 当時事前スペック記事: `https://ameblo.jp/pachimatome/entry-10459567199.html`
- pachinko’s blog「大都技研『鮪伝説』の筺体＆情報」: `https://pachinko.hatenablog.jp/entry/2010/04/maguroDensetsu`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回も前線収集と並行して次の欠損実ファイル特定を試みたが、実ファイル順を保証した状態で対象を一意確定できていないため、推測で別機種をQA済みにする変更は行わなかった。
- 次回はmachine tree/履歴を用いて、**スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定してから補完する。既存 `COMPLETE_CORE` は不用意に変更せず、reset QA状態のみ別管理する。

## 次回再開地点

1. **recordCount 470 / chronologicalFrontier 2010-04-05**。
2. **2010-04-05同日群を継続**。未処理候補として少なくとも **スーパーマジカルセブン（トリビー） / パチスロ宇宙戦艦ヤマト（山佐） / ハッピージャグラーV（北電子）** を再監査し、repo重複を確認して未登録の最古候補から追加する。
3. 4/5同日群を閉じる前に、メーカー別一覧・当時導入カレンダー・旧解析DBを横断して同日漏れを再監査する。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認し、既存登録有無とreleaseDate定義を混同しない。
5. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
