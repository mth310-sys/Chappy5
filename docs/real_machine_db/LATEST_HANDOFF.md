# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは230件地点（`パチスロ北斗の拳2 ネクストゾーン闘` 追加済み）。
- **サミー `パチスロ北斗の拳2 ネクストゾーン将` を231件目として追加済み。**
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 231. パチスロ北斗の拳2 ネクストゾーン将（サミー）

- new record: `docs/real_machine_db/machines/2008-03-02_hokuto2-next-zone-shou.md`
- manufacturer: サミー
- modelName: `北斗の拳2ZS`
- releaseDate: `2008-03-02`（2008-02-01グリーンべると記載の納品開始予定日）
- generation: 5号機初期
- systemType: ボーナス主体 + RT（北斗BIG後/天井救済RT）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 設定1〜6 BIG: `1/290.0 / 282.5 / 276.5 / 268.6 / 251.1 / 235.7`
- MIDDLE: `1/524.3 / 461.5 / 414.8 / 348.6 / 354.3 / 288.7`
- 合成: `1/186.7 / 175.2 / 165.9 / 151.7 / 146.9 / 129.8`
- 50枚ベース: `35.96 / 36.40 / 37.10 / 37.40 / 37.94 / 38.06G`
- BIG純増約312枚。
- MIDDLEは通常手順約100〜104枚、当時解析にはスイカを1度成立させる手順で約116枚の記録あり。K-Naviの終了条件は119枚超払い出し。
- 北斗図柄揃いBIG（ALL北斗、1/8192）後は次回ボーナスまでRT。
- 北斗図柄以外のBIG後999G、MIDDLE後666Gで救済RT「慈愛放出機能」へ入り、次回ボーナスまで継続。
- RT純増は当時公開表現で「現状維持程度」。比較可能な1G純増値は確定できず推測しない。
- 機械割は資料競合:
  - 5号機まとめwiki: `96.4 / 98.4 / 100.4 / 103.1 / 107.1 / 113.1%`
  - 当時ブログ/事前解析: `96.8 / 98.4 / 102.0 / 104.6 / 107.3 / 111.9%`
  - 平均化せず `CONFLICT_PAYOUT_RATE`。

### v0.7 resetBehavior

- settingChangeBehavior: `COUNTER_CARRYOVER_CONFIRMED_SINGLE_SOURCE`
- carryOverBehavior: `CARRYOVER_CONFIRMED`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NO_RESET_ON_SETTING_CHANGE_CONFIRMED_SINGLE_SOURCE`
- ceilingAfterReset: `NO_SHORTENING_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 公開朝一数値:
  - 非北斗BIG後天井RT `999G`
  - MIDDLE後天井RT `666G`
  - **設定変更時も前日の天井用G数を引き継ぐ**という当時事前解析記録あり。
  - リセット短縮天井、朝一専用モード振り分け、設定変更専用恩恵率は `NONE_CONFIRMED`。

### resetBehavior判断メモ

- `北斗の拳2 ネクストゾーン将 / 北斗の拳2ZS / Next-Zone 将` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 666G / 慈愛放出機能 / RT / ガックン / 初期出目` を組み替え、当時業界記事、K-Navi、5号機当時wiki、当時ブログ/事前解析、旧業界史、後年回顧を横断。
- 当時事前解析に「設定変更後も前日のG数を引き継ぐため、宵越し天井狙い有効」の明記を確認したため、設定変更時の天井カウンタ引継ぎは単一ソース確認として保存。
- 電源OFF→ON単独時の天井G数/RT状態、RT中設定変更時の状態処理、ガックン/初期出目等の変更判別は十分な再探索後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 主要出典

- グリーンべると: https://web-greenbelt.jp/00003486/
- K-Navi: https://p-kn.com/slot/761/
- K-Navi 小役/ベース: https://p-kn.com/slot/761/4948/
- パチスロ5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/103.html
- 侍～samurai～777ブログ: https://ameblo.jp/samurai777net/entry-10068777359.html
- キリアのスロット日記（2008年1月）: https://plaza.rakuten.co.jp/kirialoverio/backnumber/200801/
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- パチ7 北斗シリーズ回顧: https://pachiseven.jp/news/index/page%3A48

取得日: 2026-09-01

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 2008年3月境界監査

- 230: `パチスロ北斗の拳2 ネクストゾーン闘`。再追加禁止。
- 231: `パチスロ北斗の拳2 ネクストゾーン将`。再追加禁止。
- 『闘』『将』は同日2008-03-02納品開始予定だが、型式・ボーナス性能・RT構造が異なる独立機種。相互の性能値を混用しない。
- 次は **2008-03-03〜03-15の未処理機を具体導入日で境界監査**する。
- その先の未処理候補として、パイオニア `ハナダマシイ / ハナダマシイ-30` を確認。2008-03-07付グリーンべるとに **納品2008-03-16開始** と明記。mainコード検索では現時点で独立レコードを確認できていない。
- `ハナダマシイ` は25φ/30φの製品区分、性能共通性、先行導入と正式販売の時系列を先に監査し、別型式なら安易に1レコードへ統合しない。

## 重複防止

既存231件は再追加禁止。`北斗の拳2 ネクストゾーン闘` と `将` は名称が一文字違うが独立機種。前作 `北斗の拳2 乱世覇王伝 天覇の章` とも混用禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準231件地点から継続。**
2. **2008-03-03〜03-15の未処理機を具体導入日で再監査し、存在すれば最古から遡及登録。**
3. 03-15までに強い日付根拠を持つ未処理がなければ、パイオニア `ハナダマシイ / ハナダマシイ-30`（グリーンべると: 2008-03-16納品開始）を最優先候補として型式・25φ/30φ区分・性能コア＋v0.7 resetBehaviorを調査する。
4. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` 以降の未補完レコードから継続。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
