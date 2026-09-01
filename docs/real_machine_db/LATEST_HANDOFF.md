# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは228件地点（`リーチ目発見！スロガッパ` 追加済み）。
- **山佐 `パチスロ「PLAYBOY」Limited Edition` を229件目として追加済み。**
- resetBehavior遡及QAは前回 `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 229. パチスロ「PLAYBOY」Limited Edition（山佐）

- new record: `docs/real_machine_db/machines/2008-02_playboy-limited-edition.md`
- commit: `4f502b367bdbc1d92cce71d401131fe7b7f5c525`
- manufacturer: 山佐
- modelName: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: `2008-02`（具体ホール導入日は未確定）
- generation: 5号機初期
- systemType: Aタイプ / ボーナス主体 + ボーナス後20G RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 同定・時期

- 山佐公式は5号機Aタイプ、稼働時期2008年2月と明記。
- 当時HAZUSEも2008年2月機として掲載。
- 信頼できる具体ホール導入日は今回確定できなかったため、推測日を作らず月精度 `2008-02` で保存。
- 型式名も信頼できる直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- 設定: `1 / 2 / 3 / 4 / 5 / 6`。
- HAZUSE ボーナス合成:
  - 1: `1/219.1`
  - 2: `1/209.3`
  - 3: `1/197.9`
  - 4: `1/189.9`
  - 5: `1/179.5`
  - 6: `1/162.2`
- HAZUSE 機械割: `96.9 / 99.1 / 101.5 / 103.5 / 106.1 / 112.0%`。
- BIG約304枚、REG約199枚。
- BIG/REG終了後20G RT。パチスロ救急車ではRT純増約 `+0.7枚/G`。
- 50枚ベースは公式に「ベースアップ」、HAZUSEに「コイン持ちが良くなった」とあるが、比較可能な具体ゲーム数を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井は旧解析で「天井なし」。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_TO_CEILING`（通常時ゲーム数天井なし）
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`（20G RT中の設定変更/電断時状態・残G）
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 朝一専用モード、リセット短縮天井、公開朝一恩恵数値は確認されず。

### 主要出典

- 山佐ネクスト公式: https://yamasa-next.co.jp/model_plbl/
- HAZUSE: https://hazuse.com/i/data/patisuro_playboy_limitedededition/top.htm
- パチスロ救急車: https://www.eightbeat.com/slot99/kishu/ha_gyou/hu/playboyLE/page_menu.html

取得日: 2026-09-01

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 2008年2月境界監査

- 228: `リーチ目発見！スロガッパ`。再追加禁止。
- 229: `パチスロ「PLAYBOY」Limited Edition`。再追加禁止。
- `パチスロ北斗の拳2 ネクストゾーン 闘` は2008年2月系列。2008-02-18のメーカー発表転載では2月25日時点でホール実機導入前とされるため、2月後半以降として境界監査する。
- `北斗の拳2 ネクストゾーン 将` も同月候補。闘との発売/導入順と具体日を別途確定する。
- 2008年2月前半〜中盤に229より早い未処理機が新たに確認された場合は漏れ防止を優先して遡及挿入する。

## 重複防止

既存229件は再追加禁止。初代 `PLAYBOY` / `PLAYBOY30` は今回のLimited Editionとは別機種なので性能値を混用しない。`キングガッパ` も `リーチ目発見！スロガッパ` とは別機種・後発。

## 次回再開地点

1. **LATEST_HANDOFF基準229件地点から継続。**
2. **2008年2月残候補を具体導入日で再監査。最優先は `パチスロ北斗の拳2 ネクストゾーン 闘 / 将` の導入日・兄弟機区別・既存有無の確定。より早い未処理機が見つかればそちらを優先。**
3. 2月境界を閉じた後は2008年3月の最古未処理機へ進む。
4. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` 以降の未補完レコードから継続。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
